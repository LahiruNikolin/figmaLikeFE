/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from "react";
import { useRouter } from "next/router";

type PropTypes = {
  towardsLogin: boolean;
};

function Redirect(props: PropTypes) {
  const router = useRouter();
  useEffect(() => {
    if (props.towardsLogin) router.push("/login");
  }, []);
  return <></>;
}

export default Redirect;
