import { NextPage } from "next";
import { MyAccordion } from "../components/MyAccordion";
import styles from "../styles/Forms.module.css";

const RadixAccordion: NextPage = () => {
  return (
    <>
      <div className={styles.wrapper}>
        <MyAccordion />
      </div>
    </>
  );
};

export default RadixAccordion;
