
import classes from "./Header.module.css";

export default function Header() {
  return (
    <header>
      <div className={classes.headerContent}>
        <div className={classes.brandName}>MediLine</div>
        <div className={classes.navList}>
          <div className={classes.navPills}>HOME</div>
          <div className={classes.navPills}>ORDERS</div>
          <div className={classes.navPills}>CART</div>
          <div className={classes.navPills}>ABOUT</div>
          <button className={classes.authButton}>LOGIN | SIGN UP</button>
        </div>
      </div>
    </header>
  );
}
