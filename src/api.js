import axios from 'axios';

export const BASE_URL = process.env.REACT_APP_API_URL;
export const TOKEN = localStorage.getItem('auth');

export const publicRequest = axios.create({
  baseURL: BASE_URL,
});

export const userRequest = axios.create({
  baseURL: BASE_URL,
  headers: {
    Authorization: `Bearer ${TOKEN}`,
  },
});
