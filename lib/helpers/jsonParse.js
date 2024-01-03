export default function jsonParseSafe(data, fallback = {}) {
    try {
      return JSON.parse(data);
    } catch {
      return fallback;
    }
  }