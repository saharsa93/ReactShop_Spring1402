import React from "react";
import { NavLink, Outlet } from "react-router-dom";
import styles from "./tutorials-page.module.css";

const TutorialsPage = () => {
  return (
    <div className={styles["tutorials-page"]}>
      <aside>
        <ul>
          <li>
            <NavLink to="/tutorials">Welcome</NavLink>
          </li>
        </ul>
        <ul>
          <li>
            <NavLink to="/tutorials/react-components">React Components</NavLink>
          </li>
        </ul>
      </aside>
      <div>
        <Outlet />
      </div>
    </div>
  );
};

export default TutorialsPage;
