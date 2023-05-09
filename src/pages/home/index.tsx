import styles from "@/styles/home.module.css";
import Canvas from "@/components/global/Canvas";
import WithAuth from "@/components/global/WithAuth";

const Index = () => {
  return (
    <div className={styles.mainContainer}>
      <Canvas />
    </div>
  );
};

export default WithAuth(Index);
