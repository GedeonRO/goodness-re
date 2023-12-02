import React, { useState } from "react";
import styles from "./Header.module.css";
import "react-dropdown/style.css";
import { useSelector } from 'react-redux';
import HeaderLeftContent from "./header_left_content";
import HeaderCenterContent from "./header_center_content";
import HeaderRightContent from "./header_right_content";


const Header = () => {

  return (
    <div className={styles.header}>
      {/* Left  */}
      <HeaderLeftContent />

      {/* Center */}
      <HeaderCenterContent />

      {/* right */}
      <HeaderRightContent />
    </div >
  );
};

export default Header;
