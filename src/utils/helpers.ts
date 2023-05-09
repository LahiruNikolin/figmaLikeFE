import { store } from "@/store";
import jwt_decode from "jwt-decode";

export const mapCurrentOnlineUsers = (incomingUser: any) => {
  const currentUserId = store.getState().user.id;
  const existingActiveUsers = store.getState().activeUsers.memberList;
  if (incomingUser.user.id === currentUserId) return false;
  if (!existingActiveUsers?.length) return [incomingUser];
  return [
    ...existingActiveUsers.filter(
      (member) => member?.user.id !== incomingUser.user.id
    ),
    incomingUser,
  ];
};

export const saveToken = (token: string, isRefresh = false) =>
  localStorage.setItem(
    isRefresh ? "figma_like_refresh_token" : "figma_like_access_token",
    token
  );

export const checkToken = (isRefresh = false) => {
  const result = localStorage.getItem(
    isRefresh ? "figma_like_refresh_token" : "figma_like_access_token"
  );
  if (result) return true;
  return false;
};

export const getToken = (isRefresh = false) => {
  const result = localStorage.getItem(
    isRefresh ? "figma_like_refresh_token" : "figma_like_access_token"
  );
  if (result) return result;
  return false;
};

export const clearAccessToken = () => localStorage.removeItem("access_token");

export const decodeToken = (token: string) => {
  return jwt_decode(token);
};
