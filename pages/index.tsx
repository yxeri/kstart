import type { NextPage } from "next";
import Link from "next/link";
import { HeaderNav } from "../components/header/HeaderNav";
import { Nav } from "../components/header/Nav";

import styles from "../styles/Home.module.css";

const Home: NextPage = () => {
  return <div className={styles.container}></div>;

  return (
    <div className={styles.container}>
      <HeaderNav />
    </div>
  );
};

export default Home;
