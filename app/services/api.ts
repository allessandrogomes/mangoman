import axios from 'axios';

const baseURL =
  process.env.NODE_ENV === 'production'
    ? 'https://colorful-oasis-491a4cb7d8.strapiapp.com/api'
    : 'http://localhost:1337/api';

export const api = axios.create({
  baseURL,
});
