import React from "react";
import notfound from "../../assets/images/not-found.png";
import styles from "./not-found.module.css";

const NotFound = () => {
  return (
    <div className={styles["not-found"]}>
      <img src={notfound} alt="" />
      <p>Page not Found!</p>
      <p>
        here you can redirect to the <a href="/">Home Page</a>
      </p>
    </div>
  );
};

export default NotFound;
