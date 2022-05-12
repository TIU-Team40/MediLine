import react from "react";
import classes from "./Header.module.css";

export default function Header() {
  return (
    <header>
      <div className={classes.headerContent}>
        <div className={classes.brandName}>MediLine</div>
        <div className={classes.navList}>
        <div className={classes.navPills}>Home</div>
        <div className={classes.navPills}>Orders</div>
        <div className={classes.navPills}>Cart</div>
        <div className={classes.navPills}>About</div>
        <button className={classes.authButton}>Login / SignUp</button>
        </div>
      </div>
    </header>
  );
}
