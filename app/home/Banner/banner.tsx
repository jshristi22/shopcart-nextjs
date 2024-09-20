import React from "react";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

import styles from "./banner.module.scss";

function Banner() {
  return (
    <div className={styles.banner}>
      <div className={styles.phone}>
        <LocalPhoneIcon fontSize="small" />
        <p>+91 76859 84956</p>
      </div>
      <div className={styles.offers}>
        <p>50% off on headphones </p>
        <p>| </p>
        <p>Shop now</p>
      </div>
      <div className={styles.langLoc}>
        <span>
          Eng
          <KeyboardArrowDownIcon />
        </span>
        <span>
          Location
          <KeyboardArrowDownIcon />
        </span>
      </div>
    </div>
  );
}

export default Banner;
