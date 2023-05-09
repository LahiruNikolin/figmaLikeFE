import React from "react";
import UserPointer from "../UserPointer";
import { useSelector } from "react-redux";
import styles from "./pointerContainer.module.css";

function PointerContainer() {
  const { memberList } = useSelector((store: any) => store.activeUsers);

  return (
    <div className={styles.pointerContainer}>
      {memberList.map((member: any) => (
        <UserPointer
          key={member.userId}
          data={{ x: member.x, y: member.y, name: member.user.name }}
        />
      ))}
    </div>
  );
}

export default PointerContainer;
