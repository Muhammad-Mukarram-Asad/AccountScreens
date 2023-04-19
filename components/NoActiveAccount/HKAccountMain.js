import React from "react";
import styles from "./HKAccountMain.module.css";

import first_screen_image from "../../Images/first_screen_image.png";
import LeftArrow from "../../public/icons/backArrowIcon.svg";
import rightArrow from "../../public/icons/RightArrow.svg";

import HKBottomNav from "../Bottom_Nav/HKBottomNav";
import { useNavigate } from "react-router-dom";
const HKAccountMain = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className={styles.my_div}>
        <div className={styles.HKAccountMain_title_div}>
          <img
            src={LeftArrow}
            alt="back_arrow"
            onClick={() => {
              navigate(-1);
            }}
          />

          <h1 className={styles.title}> All Accounts</h1>
          <img
            className={styles.hide_right_arrow}
            src={rightArrow}
            alt="forward_arrow"
          />
        </div>

        {/* <hr className={styles.hr} /> */}
        <img
          className={styles.img}
          src={first_screen_image}
          alt="wallet_image"
        />

        <h2> No Active Account </h2>
        <p>
          You have not added any accounts. Add <br />
          your accounts to keep all your finances <br />
          organized in one place.
        </p>

        <button
          className={styles.btn_primary}
          onClick={() => navigate("/secondScreen")}
        >
          Add New Account
        </button>

        <hr className={styles.hr} />
      </div>
      <HKBottomNav />
    </>
  );
};

// import WhatYouhavebg from "../../public/icons/WhatYouhavebg.svg";
// import infoIcon from "../../public/icons/infoIcon.svg";
// import wallet from "../../public/icons/wallet.svg";

// const { currency, amount, bgColor = "#4799a6", infoClick } = props;
// const bgStyle = {
//   backgroundColor: bgColor,
//   backgroundImage: `url(${WhatYouhavebg})`,
//   backgroundSize: "cover",
//   gridArea: "1 / 1",
//   opacity: "100",
//   borderRadius: "16px",
// };

// <div className="whatYouHave-Container">
//   <div className="whatYouHave-overlay">
//       <div className="account-icon-area">
//         <div className="account-icon-area-btn-main">
//           {/* <img src={logo} width={24} height={24} /> */}
//         </div>
//       </div>

export default HKAccountMain;
