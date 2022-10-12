import type { NextPage } from "next";
import Link from "next/link";
import { HeaderNav } from "../components/HeaderNav";
import { Nav } from "../components/Nav";

import styles from "../styles/Home.module.css";

const Home: NextPage = () => {
<<<<<<< HEAD
  return <div className={styles.container}></div>;
=======
  return (
    <div className={styles.container}>
      <div className={styles.grid}>
        <Link href="/forms">
          <div className={styles.card}>
            <h2>Forms</h2>
          </div>
        </Link>
        <Link href="/NoStitches">
          <div className={styles.card}>
            <h2>NoStitches</h2>
          </div>
        </Link>
        <Link href="/stitches">
          <div className={styles.card}>
            <h2>Stitches</h2>
          </div>
        </Link>
        <Link href="/radix-accordion">
          <div className={styles.card}>
            <h2>Radix accordion</h2>
          </div>
        </Link>
      </div>
    </div>
  );
>>>>>>> 8a0fc89 (added Accordion)
};

export default Home;
