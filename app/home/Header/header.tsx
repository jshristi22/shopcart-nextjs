import React from "react";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import PermIdentityOutlinedIcon from "@mui/icons-material/PermIdentityOutlined";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import MenuItem from "@mui/material/MenuItem";

import styles from "./header.module.scss";
import { Select } from "@mui/material";

const menuOptions = ["Categories", "Deals", "What's New", "Delivery"];

async function Header() {
  const response = await fetch("http://localhost:3000/api/category");
  const categories: string[] = await response.json();

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
            {opt === "Categories" && (
              <Select>
                {categories?.map((cat, index) => (
                  <MenuItem key={index} value={cat}>
                    {cat}
                  </MenuItem>
                ))}
              </Select>
            )}
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
