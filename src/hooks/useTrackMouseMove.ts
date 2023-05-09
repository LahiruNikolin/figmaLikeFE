import { useEffect } from "react";
import { setPointerData } from "@/store/slices/mousePositonSlice";
import { fetchRefreshToken } from "@/store/slices/userSlice";
import { useDispatch } from "react-redux";
import { AppDispatch } from "@/store";

const useMousePosition = () => {
  const dispatch = useDispatch<AppDispatch>();

  const updateMousePosition = (ev: any) => {
    dispatch(setPointerData({ x: ev.clientX, y: ev.clientY }));
  };

  useEffect(() => {
    window.addEventListener("mousemove", updateMousePosition);
    return () => {
      window.removeEventListener("mousemove", updateMousePosition);
    };
  }, []);

  return null;
};
export default useMousePosition;
