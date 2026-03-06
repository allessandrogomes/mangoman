const API_URL = process.env.NEXT_PUBLIC_API_URL;

export const getImageUrl = (url: string) => {
  if (!url) return '';
  if (url.startsWith('http')) return url;
  return `${API_URL}${url}`;
};
