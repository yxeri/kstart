import type { NextPage } from "next";
import Link from "next/link";
import Navbar from "../components/Navbar";
import styles from "../styles/Home.module.css";

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Navbar />
      <div className={styles.grid}>
        <Link href="/forms">
          <div className={styles.card}>
            <h2>Forms</h2>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Home;
