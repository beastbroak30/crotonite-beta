// Constants
const APPWRITE_URL = import.meta.env.VITE_APPWRITE_URL;
const PROJECT_ID = import.meta.env.VITE_APPWRITE_PROJECT_ID;
const DATABASE_ID = import.meta.env.VITE_APPWRITE_DATABASE_ID;
const COLLECTION_ID = import.meta.env.VITE_APPWRITE_COLLECTION_ID;
const API_KEY = import.meta.env.VITE_APPWRITE_API_KEY;

// Environment variable validation
if (!APPWRITE_URL || !PROJECT_ID || !DATABASE_ID || !COLLECTION_ID || !API_KEY) {
  throw new Error('Missing required Appwrite environment variables');
}

// TypeScript User Interface
interface User {
  $id?: string;
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

// Utility functions
const MAX_RETRIES = 5;
const BASE_DELAY = 1000; // 1 second
const MAX_DELAY = 10000; // 10 seconds

const calculateDelay = (attempt: number): number => {
  const exponentialDelay = BASE_DELAY * Math.pow(2, attempt);
  return Math.min(exponentialDelay, MAX_DELAY);
};

const delay = (ms: number): Promise<void> => new Promise(resolve => setTimeout(resolve, ms));

const validateUserInput = (name: string, email: string): void => {
  if (!name || name.trim().length === 0) {
    throw new ValidationError('Name is required');
  }
  if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    throw new ValidationError('Invalid email format');
  }
};

const handleApiError = async (error: any, attempt: number): Promise<never> => {
  const status = error.status || 500;
  switch (status) {
    case 409:
      throw new ValidationError('Email already exists');
    case 401:
    case 403:
      throw new DatabaseError('Authentication failed');
    case 404:
      throw new DatabaseError('Database or collection not found');
    case 429:
      if (attempt < MAX_RETRIES) {
        const retryDelay = calculateDelay(attempt);
        await delay(retryDelay);
        return Promise.reject(error); // Continue retry loop
      }
      throw new DatabaseError('Rate limit exceeded. Please try again later');
    case 500:
    case 503:
      if (attempt < MAX_RETRIES) {
        const retryDelay = calculateDelay(attempt);
        await delay(retryDelay);
        return Promise.reject(error); // Continue retry loop
      }
      throw new DatabaseError('Service is temporarily unavailable. Please try again later');
    default:
      throw new DatabaseError(`API Error: ${error.message || 'Unknown error'}`);
  }
};

const appwriteService = {
  async createUser(name: string, email: string): Promise<User> {
    try {
      validateUserInput(name, email);

      let lastError: Error | null = null;
      for (let attempt = 1; attempt <= MAX_RETRIES; attempt++) {
        try {
          const response = await fetch(
            `${APPWRITE_URL}/databases/${DATABASE_ID}/collections/${COLLECTION_ID}/documents`,
            {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json',
                'X-Appwrite-Project': PROJECT_ID
              },
              body: JSON.stringify({
                documentId: 'unique()',
                data: { name: name.trim(), email: email.trim() }
              })
            }
          );

          if (!response.ok) {
            const error = await response.json();
            await handleApiError({ ...error, status: response.status }, attempt);
          }

          const data = await response.json();
          return data;
        } catch (error) {
          lastError = error as Error;
          if (attempt === MAX_RETRIES) {
            throw error;
          }
        }
      }
      throw new DatabaseError('Service is temporarily unavailable', lastError || undefined);
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
          const response = await fetch(
            `${APPWRITE_URL}/databases/${DATABASE_ID}/collections/${COLLECTION_ID}/documents`,
            {
              method: 'GET',
              headers: {
                'X-Appwrite-Project': PROJECT_ID,
                "X-Appwrite-Key": API_KEY,
              }
            }
          );

          if (!response.ok) {
            const error = await response.json();
            await handleApiError({ ...error, status: response.status }, attempt);
          }

          const data = await response.json();
          return data.documents;
        } catch (error) {
          lastError = error as Error;
          if (attempt === MAX_RETRIES) {
            throw error;
          }
        }
      }
      throw new DatabaseError('Service is temporarily unavailable', lastError || undefined);
    } catch (error) {
      if (error instanceof ValidationError || error instanceof DatabaseError) {
        throw error;
      }
      throw new DatabaseError('Unexpected error while retrieving users', error as Error);
    }
  }
};

export default appwriteService;
