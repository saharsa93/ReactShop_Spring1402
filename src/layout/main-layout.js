import React from "react";
import { Footer } from "../components/footer";
import { Header } from "../components/header";
import styles from "./main-layout.module.css";

const MainLayout = ({ children }) => {
  return (
    <>
      <div>
        <Header />
        <main className={`${styles["main"]} ${styles["primary-color"]}`}>
          {children}
        </main>
        <Footer />
      </div>
    </>
  );
};

export default MainLayout;
