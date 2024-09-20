import React from "react";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import PermIdentityOutlinedIcon from "@mui/icons-material/PermIdentityOutlined";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";

import styles from "./header.module.scss";

const menuOptions = ["Categories", "Deals", "What's New", "Delivery"];

function Header() {
  return (
    <div className={styles.header}>
      <div className={styles.logo}>
        <ShoppingCartOutlinedIcon className={styles.logo} />
        <p className={styles.title}>Shopcart</p>
      </div>
      <div className={styles.menu}>
        {menuOptions.map((opt) => (
          <p key={opt}>
            {opt}
            {opt === "Categories" && <KeyboardArrowDownIcon />}
          </p>
        ))}
      </div>
      <div className={styles.searchBar}>
        <input placeholder="Search Product" />
        <SearchOutlinedIcon className={styles.searchIcon} />
      </div>
      <div className={styles.accountAndCart}>
        <div className={styles.account}>
          <PermIdentityOutlinedIcon />
          <p>Account</p>
        </div>
        <div className={styles.cart}>
          <ShoppingCartIcon />
          <p>Cart</p>
        </div>
      </div>
    </div>
  );
}

export default Header;
