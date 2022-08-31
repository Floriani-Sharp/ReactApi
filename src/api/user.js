import { publicRequest, userRequest } from '../api';

export const getAllUsers = (page) => {
  return userRequest.get(`/admin/user/user?page=${page}`);
};

export const register = (user) => {
  return publicRequest.post('/auth/register', user);
};

export const request = (email) => {
  return publicRequest.post('/auth/resetpassword', email);
};

export const reset = (data) => {
  return publicRequest.put('/auth/updatepassword', data);
};

export const confirm = (id) => {
  return publicRequest.get(`/auth/confirm/${id}`);
};

export const deleteUser = (id) => {
  return userRequest.delete(`/admin/user/user/${id}`);
};

export const updateUser = (user) => {
  return userRequest.put('/admin/user/user', user);
};

export const get = () => {
  return userRequest.post('/auth/me');
};

export const update = (user) => {
  return userRequest.put('/profil/profil', user);
};

export const signIn = (user) => {
  return publicRequest.post('/auth/login', user);
};
