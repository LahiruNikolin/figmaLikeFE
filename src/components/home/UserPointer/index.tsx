import React from "react";
import Image from "next/image";

function UserPointer({ data }: any) {
  return (
    <div
      style={{
        display: "inline-block",
        position: "absolute",
        top: `${data.y}px`,
        left: `${data.x}px`,
      }}
    >
      <Image
        src={"/icons/pointer.svg"}
        height="30"
        width="30"
        alt={"pointer"}
      />
      <div>
        <span>{data.name}</span>
      </div>
    </div>
  );
}

export default UserPointer;
