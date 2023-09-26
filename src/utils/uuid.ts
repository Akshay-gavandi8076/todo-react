import { v4 as uuidv4 } from 'uuid';

// Generate a unique ID using uuidv4
export function generateUniqueId(): string {
  return uuidv4();
}
