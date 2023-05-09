import React, { useState } from "react";
import styles from "../../styles/createUser.module.css";
import { create } from "@/services/user";
import { useRouter } from "next/router";

function CreateUser() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [userName, setUserName] = useState("");

  const handleEmailChange = (e: any) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e: any) => {
    setPassword(e.target.value);
  };

  const handleUserNameChange = (e: any) => {
    setUserName(e.target.value);
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    if (email && password && userName) {
      try {
        const response = await create({ username: userName, email, password });

        if (response.data) {
          router.push("/login");
        }
      } catch (e) {
        console.log("e", e);
      }
    }
  };

  return (
    <div className={styles.mainContainer}>
      <h2 className={styles.headerTxt}>Create User</h2>
      <form onSubmit={handleSubmit} className={styles.customForm}>
        <div>
          <label className={styles.customLabel}>User name:</label>
          <input
            className={styles.customInput}
            type="text"
            value={userName}
            onChange={handleUserNameChange}
            required
          />
        </div>
        <div>
          <label className={styles.customLabel}>Email:</label>
          <input
            className={styles.customInput}
            type="email"
            value={email}
            onChange={handleEmailChange}
            required
          />
        </div>
        <div>
          <label className={styles.customLabel}>Password:</label>
          <input
            className={styles.customInput}
            type="password"
            value={password}
            onChange={handlePasswordChange}
            required
          />
        </div>
        <button className={styles.btn} type="submit">
          Create User
        </button>
      </form>
    </div>
  );
}

export default CreateUser;
