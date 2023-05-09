import { useEffect } from "react";

import { useDispatch } from "react-redux";
import { AppDispatch } from "@/store";
import { decodeToken, getToken } from "@/utils/helpers";
import { setUserId } from "@/store/slices/userSlice";
const useUserDataFromToken = () => {
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    const token = getToken();
    if (token) {
      const decodedToken: any = decodeToken(token);

      dispatch(
        setUserId({ id: decodedToken.userId, userName: decodedToken.name })
      );
    }
  }, []);

  return null;
};
export default useUserDataFromToken;
