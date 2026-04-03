const API_URL = process.env.NEXT_PUBLIC_API_URL || '';

export const getImageUrl = (url: string) => {
  if (!url) return '';
  if (
    url.startsWith('http') ||
    url.startsWith('blob:') ||
    url.startsWith('data:')
  )
    return url;

  if (!url.startsWith('/uploads')) return url;

  return `${API_URL}${url}`;
};
