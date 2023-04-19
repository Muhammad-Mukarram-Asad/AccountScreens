import React from "react";
import "./HKAccountItem.css";
import WhatYouhavebg from "../../public/icons/WhatYouhavebg.svg";
import wallet from "../../public/icons/wallet.svg";
import info from "../../public/icons/infoIcon.svg";
import LeftArrow from "../../public/icons/backArrowIcon.svg"
import rightArrow from "../../public/icons/RightArrow.svg"

import { AiOutlinePlus } from "react-icons/ai";

import HKAccountListing2 from "./Inner_item/HKAccountListing";
import HKBottomNav from "../Bottom_Nav/HKBottomNav";

import { useNavigate } from "react-router-dom";

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
    <>
      <div className="HK_AccountItem_title">
        <img src={LeftArrow} alt="back_arrow" onClick={()=> {navigate(-1)}} />
        <h1> All Accounts</h1>
        <img id="hide_right_arrow" src={rightArrow} alt="forward_arrow" />
        
        {/* <hr id="hr" /> */}
      </div>

      <div className="AccountItem-Container">
        <div id="custom_div" style={bgStyle}></div>
        <div className="AccountItem-overlay">
          <div className="mainGrid-account">
            {/* <div className="AccountItem-info-account-area">
              <div className="AccountItem-moreArea" onClick={moreClick}>
                <img src={bankIcon} width={24} height={24} alt="bank_icon_image" />
              </div>

            </div> */}

            <div className="AccountItem-available-to-spend-area">
              <p className="heading">Available to Spend</p>
              <div className="AccountItem-spend-amount">
                <p className="currency">PKR</p>
                <p className="amount">20,000</p>
              </div>
            </div>

            <div className="AccountItem-account-icon-area">
              <img src={info} alt="info_icon_img" />
              <div
                className="AccountItem-account-icon-area-btn-main"
                onClick={accountItemClick}
              >
                <img src={wallet} width={24} height={24} alt="wallet_image" />
              </div>
            </div>

            {isAccountDeactivated ? (
              <div className="badge">
                <p>deactivated</p>
              </div>
            ) : null}
          </div>
        </div>

        <div className="accounts_div">
          <h2> Your Accounts</h2>
          <button
            id="accounts_btn"
            onClick={() => {
              navigate("/addAccount");
            }}
          >
            <AiOutlinePlus id="plus_icon" />
            ADD ACCOUNT
          </button>
        </div>
        {
          <div className="accountlistingdiv">
            <HKAccountListing2 />
          </div>
        }
        <HKBottomNav />
      </div>
    </>
  );
};

export default HKAccountItem;
