import { useState, useEffect } from "react";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { socket } from "../socket";
import { Provider } from "react-redux";
import { store } from "@/store";
import { mapCurrentOnlineUsers } from "@/utils/helpers";
import { setMembers } from "@/store/slices/activeUsersSlice";

export default function App({ Component, pageProps }: AppProps) {
  function onConnect() {
    console.log("connected socketod", socket.id);
  }

  function onDisconnect() {}

  useEffect(() => {
    socket.on("connect", onConnect);
    socket.on("disconnect", onDisconnect);

    return () => {
      socket.off("connect", onConnect);
      socket.off("disconnect", onDisconnect);
    };
  }, []);

  useEffect(() => {
    socket.connect();
    return () => {
      socket.disconnect();
    };
  }, []);

  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  );
}
