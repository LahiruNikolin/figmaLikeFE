/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useCallback } from "react";
import { socket } from "../socket";
import { store } from "@/store";
import _ from "lodash";
import { mapCurrentOnlineUsers } from "@/utils/helpers";
import { setMembers } from "@/store/slices/activeUsersSlice";
import { useDispatch } from "react-redux";

const useUpdateMouseMove = () => {
  const dispatch = useDispatch();
  const mousePositonSlice = useSelector((store: any) => store.mousePositon);

  const updateMousePosition = (coords: any) => {
    socket?.timeout(5000)?.emit(
      "onMouseMove",
      JSON.stringify({
        user: {
          id: store.getState().user.id,
          name: store.getState().user.userName,
        },
        x: coords.x,
        y: coords.y,
      }),
      () => {}
    );
  };

  const handleUpdateMouseMove = useCallback(
    _.throttle((payload: any) => {
      updateMousePosition(payload);
    }, 50),
    []
  );

  const handleOnMouseMove = (data: any) => {
 
    if (data) {
      const result = mapCurrentOnlineUsers(JSON?.parse(data));
      if (result) dispatch(setMembers(result));
    }
  };

  useEffect(() => {
    if (mousePositonSlice.x && mousePositonSlice.y) {
      handleUpdateMouseMove({ x: mousePositonSlice.x, y: mousePositonSlice.y });
    }
  }, [mousePositonSlice.x, mousePositonSlice.y]);

  useEffect(() => {
    socket.on("onMouseMove", handleOnMouseMove);
    return () => {
      socket.off("onMouseMove", handleOnMouseMove);
    };
  }, []);

  return null;
};
export default useUpdateMouseMove;
