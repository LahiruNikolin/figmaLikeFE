import React from "react";
import useUserDataFromToken from "../../../hooks/useUserDataFromToken";

type PropTypes = {
  children: JSX.Element;
};

function Layout(props: PropTypes) {
  useUserDataFromToken();
  return (
    <div>
      <div></div>
      {props.children}
    </div>
  );
}

export default Layout;
