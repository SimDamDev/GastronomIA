export function handleError(error) {
  if (error.code === 11000) {
    throw new Error('Name must be unique');
  }
  throw error;
}
