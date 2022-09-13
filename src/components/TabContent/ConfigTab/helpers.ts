export const isJsonValid = (str: string): boolean => {
  if (!str) {
    return true;
  }
  try {
    JSON.parse(str);
  } catch {
    return false;
  }
  return true;
};
