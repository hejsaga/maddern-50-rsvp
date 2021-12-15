import React from "react";
import { NavLink } from "react-router-dom";
import { useAuthContext } from "../context/AuthContext";
import styles from "./css/Navbar.module.css";

function Navbar() {
  const { currentUser } = useAuthContext();

  return (
    <div className={styles.navbar}>
      <div className={styles.curbitLeft}>
        <img src="/curbitskull.png" alt="kurbits"></img>
      </div>

      {currentUser ? (
        <>
          <NavLink to="/">Hem</NavLink>
          <NavLink to="/fest">Fest</NavLink>
          <NavLink to="/boende">Boende</NavLink>
          <NavLink to="/om-gammelgarden">Gammelgården</NavLink>
          <NavLink to="/gora-i-ludvika">Aktiviteter</NavLink>
          <NavLink to="/carpool">Samåkning</NavLink>
          <NavLink to="/osa">O.S.A</NavLink>
        </>
      ) : (
        <></>
      )}

      <div className={styles.curbitRight}>
        <img src="/curbitskull.png" alt="kurbits"></img>
      </div>
    </div>
  );
}

export default Navbar;
