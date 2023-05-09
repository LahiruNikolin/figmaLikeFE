import apiClient from "./client";
export const login = async (payload: any) =>
  await apiClient("POST", "/user/login", payload);

export const refresh = async () => await apiClient("GET", "/user/refresh");

export const create = async (payload: any) =>
  await apiClient("POST", "/user", payload);