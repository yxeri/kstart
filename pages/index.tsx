import type { NextPage } from "next";
import Link from "next/link";
import { HeaderNav } from "../components/HeaderNav";
import { Nav } from "../components/Nav";

import styles from "../styles/Home.module.css";

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <HeaderNav />
    </div>
  );
};

export default Home;
