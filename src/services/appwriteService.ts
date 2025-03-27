import { Client, Databases, AppwriteException, Models } from "appwrite";

const client = new Client();
client
  .setEndpoint("https://cloud.appwrite.io/v1") // Replace with your Appwrite URL
  .setProject("67e51f81000e2ef4a7e9"); // Replace with your Project ID

const databases = new Databases(client);
const databaseID = "67e5236700162bfc2605"; // Replace with your Database ID
const collectionID = "67e52380003c55d8413c"; // Replace with your Collection ID

// Define User type extending Appwrite Document
interface User extends Models.Document {
  name: string;
  email: string;
}

// Custom error types
class ValidationError extends Error {
  constructor(message: string) {
    super(message);
    this.name = 'ValidationError';
  }
}

class DatabaseError extends Error {
  constructor(message: string, public originalError?: Error) {
    super(message);
    this.name = 'DatabaseError';
  }
}

const MAX_RETRIES = 3;
const RETRY_DELAY = 1000; // 1 second

const validateUserInput = (name: string, email: string): void => {
  if (!name || name.trim().length === 0) {
    throw new ValidationError('Name is required');
  }
  if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    throw new ValidationError('Invalid email format');
  }
};

const delay = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));

const appwriteService = {
  async createUser(name: string, email: string): Promise<User> {
    try {
      validateUserInput(name, email);

      let lastError: Error | null = null;
      for (let attempt = 1; attempt <= MAX_RETRIES; attempt++) {
        try {
          const response = await databases.createDocument<User>(
            databaseID,
            collectionID,
            "unique()",
            { name: name.trim(), email: email.trim() }
          );
          return response;
        } catch (error) {
          lastError = error as Error;
          if (error instanceof AppwriteException && error.code === 409) {
            throw new ValidationError('Email already exists');
          }
          if (attempt < MAX_RETRIES) {
            await delay(RETRY_DELAY * attempt);
            continue;
          }
        }
      }
      throw new DatabaseError('Failed to create user after multiple attempts', lastError || undefined);
    } catch (error) {
      if (error instanceof ValidationError || error instanceof DatabaseError) {
        throw error;
      }
      throw new DatabaseError('Unexpected error while creating user', error as Error);
    }
  },

  async getUsers(): Promise<User[]> {
    try {
      let lastError: Error | null = null;
      for (let attempt = 1; attempt <= MAX_RETRIES; attempt++) {
        try {
          const response = await databases.listDocuments<User>(databaseID, collectionID);
          return response.documents;
        } catch (error) {
          lastError = error as Error;
          if (attempt < MAX_RETRIES) {
            await delay(RETRY_DELAY * attempt);
            continue;
          }
        }
      }
      throw new DatabaseError('Failed to fetch users after multiple attempts', lastError || undefined);
    } catch (error) {
      if (error instanceof DatabaseError) {
        throw error;
      }
      throw new DatabaseError('Unexpected error while fetching users', error as Error);
    }
  }
};

export default appwriteService;
