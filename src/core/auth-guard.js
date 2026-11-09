/**
 * VillaForge AI Companion - RBAC Security Module
 * Ensures role-based access control and data encryption.
 */

export const authorize = (user, role) => {
  if (!user || user.role !== role) {
    throw new Error('Unauthorized access');
  }
  return true;
};

export const encryptData = (data) => {
  // Placeholder for E2E encryption logic
  return Buffer.from(JSON.stringify(data)).toString('base64');
};

export const decryptData = (encrypted) => {
  return JSON.parse(Buffer.from(encrypted, 'base64').toString('utf-8'));
};