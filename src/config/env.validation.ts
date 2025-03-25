// Environment variable validation and sanitization
const validateAndSanitizeEnvVars = () => {
  const requiredVars = [
    'VITE_FIREBASE_PROJECT_ID',
    'VITE_FIREBASE_APP_ID'
  ];

  const missingVars = requiredVars.filter(varName => !import.meta.env[varName]);
  if (missingVars.length > 0) {
    throw new Error(`Missing required environment variables: ${missingVars.join(', ')}`);
  }

  // Sanitize and validate values
  const projectId = import.meta.env.VITE_FIREBASE_PROJECT_ID?.trim();
  const appId = import.meta.env.VITE_FIREBASE_APP_ID?.trim();

  if (!projectId || !appId) {
    throw new Error('Firebase configuration values cannot be empty');
  }

  // Return only the minimal required configuration with sanitized values
  return {
    projectId,
    appId
  };
};

// Export validated and sanitized configuration
export const envConfig = validateAndSanitizeEnvVars();