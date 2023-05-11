import React, { useState } from "react";
import Link from "next/link";

import * as styles from "./UserIcon.module.css";

const UserIcon = (props) => {
  const firstLetter = props.firstName.split("")[0];
  const secondLetter = props.lastName.split("")[0];

  const [isOpen, setOpen] = useState(false)

  const displayDetailsBox = () => {
    setOpen(!isOpen);
    const wrapper = document.getElementById("boxWrapper");
    const content = document.getElementById("contentWrapper");

    if (!isOpen) {
      wrapper.style.height = "auto";
      content.style.display = "block";
    } else {
      wrapper.style.height = "0";
      content.style.display = "none";
    }
  };

  return (
    <div className={styles.wrapper} onClick={() => displayDetailsBox()}>
      <div className={styles.contentContainer}>
        <h4>{firstLetter + secondLetter}</h4>
      </div>
      <div id="boxWrapper" className={styles.detailsBoxContainer}>
        <div id="contentWrapper" className={styles.contentWrapper}>
          <h3>{props.firstName + " " + props.lastName}</h3>
          <ul>
            <Link href="#">
              <li>Account Details</li>
            </Link>
            <Link href="/log-out">
              <li>Log out</li>
            </Link>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default UserIcon;
