import React from "react";
import WhatYouhavebg from "../../public/icons/WhatYouhavebg.svg";
import wallet from "../../public/icons/wallet.svg";
import info from "../../public/icons/infoIcon.svg";
import LeftArrow from "../../public/icons/backArrowIcon.svg";
import rightArrow from "../../public/icons/RightArrow.svg";

import { AiOutlinePlus } from "react-icons/ai";

import HKAccountListing2 from "./Inner_item/HKAccountListing";
import HKBottomNav from "../Bottom_Nav/HKBottomNav";

import { useNavigate } from "react-router-dom";

import styles from "./HKAccountItem.module.css";
// import "./HKAccountsItem.css";

// import bankIcon from "../../public/icons/bankIcon.svg";
// import MorePopupWithContent from "../../HKMore/MorePopupWithContent/MorePopupWithContent";

const HKAccountItem = (props) => {
  const {
    bgColor = "#4799a6",
    accountItemClick,
    moreClick,
    isAccountDeactivated = false,
  } = props;

  const bgStyle = {
    backgroundColor: bgColor,
    backgroundImage: `url(${WhatYouhavebg})`,
    backgroundSize: "cover",
    gridArea: "1 / 1",
    opacity: "100",
    borderRadius: "16px",
  };

  const navigate = useNavigate();

  return (
    <div className={styles.HKAccountItem_main_div}>
      <div className={styles.HK_AccountItem_title}>
        <img
          src={LeftArrow}
          alt="back_arrow"
          onClick={() => {
            navigate(-1);
          }}
        />
        <h1> All Accounts</h1>
        <img
          className={styles.hide_right_arrow}
          src={rightArrow}
          alt="forward_arrow"
        />
      </div>

      <div className={styles.AccountItem_Container}>
        <div className={styles.custom_div} style={bgStyle}></div>

        <div className={styles.AccountItem_overlay}>
          <div className={styles.mainGrid_account}>
            <div className={styles.AccountItem_available_to_spend_area}>
              <p className={styles.heading}>Available to Spend</p>
              <div className={styles.AccountItem_spend_amount}>
                <p className={styles.currency}>PKR</p>
                <p className={styles.amount}>20,000</p>
              </div>
            </div>

            <div className={styles.AccountItem_account_icon_area}>
              <img src={info} alt="info_icon_img" />
              <div
                className={styles.AccountItem_account_icon_area_btn_main}
                onClick={accountItemClick}
              >
                <img src={wallet} width={24} height={24} alt="wallet_image" />
              </div>
            </div>

            {isAccountDeactivated ? (
              <div className={styles.badge}>
                <p>deactivated</p>
              </div>
            ) : null}
          </div>
        </div>
      </div>

      <div className={styles.accounts_div}>
        <h2> Your Accounts</h2>
        <button
          className={styles.accounts_btn}
          onClick={() => {
            navigate("/addAccount");
          }}
        >
          <AiOutlinePlus className={styles.plus_icon} />
          ADD ACCOUNT
        </button>
      </div>
      {
        <div className={styles.accountlistingdiv}>
          <HKAccountListing2 />
        </div>
      }
      <HKBottomNav active={2} />
    </div>
  );
};

export default HKAccountItem;
