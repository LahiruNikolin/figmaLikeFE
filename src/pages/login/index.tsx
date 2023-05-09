import React, { useState, ChangeEvent, FormEvent } from "react";
import { handleLogin } from "@/store/slices/userSlice";
import { useDispatch } from "react-redux";
import { AppDispatch } from "@/store";
import { useRouter } from "next/router";
import { saveToken } from "@/utils/helpers";
import styles from "../../styles/login.module.css";

const Index = () => {
  const dispatch = useDispatch<AppDispatch>();
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleEmailChange = (e: ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e: ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    const response = await dispatch(handleLogin({ email, password }));

    if (response.meta.requestStatus === "fulfilled") {
      router.push("./");
      saveToken(response.payload.accessToken);
      saveToken(response.payload.refreshToken, true);
    }

    setEmail("");
    setPassword("");
  };

  return (
    <div className={styles.mainContainer}>
      <h2 className={styles.headerTxt}>Login</h2>
      <form onSubmit={handleSubmit} className={styles.customForm}>
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
          Login
        </button>
        <div
          className={styles.createAccountContainer}
          onClick={() => {
            router.push("/create-user");
          }}
        >
          <h4>create an account?</h4>
        </div>
      </form>
    </div>
  );
};

export default Index;
