import { publicRequest } from '../api';

export const getHandler = () => {
  return publicRequest.get();
};
