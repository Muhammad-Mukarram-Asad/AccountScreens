import React from "react";
import "./HKAccountItem.css";
import WhatYouhavebg from "../../public/icons/WhatYouhavebg.svg";
import bankIcon from "../../public/icons/bankIcon.svg";
import wallet from "../../public/icons/wallet.svg";
// import plus from "../../public/icons/Add.svg";
import {AiOutlinePlus} from "react-icons/ai";
import { Link } from "react-router-dom";
import HKAccountListing2 from "./Inner_item/HKAccountListing";
import HKBottomNav from "../Bottom_Nav/HKBottomNav";
// import MorePopupWithContent from "../../HKMore/MorePopupWithContent/MorePopupWithContent";
const HKAccountItem = (props) => {
  const {
    currency,
    amount,
    bgColor = "#4799a6",
    accountName = "Alfalah Bank",
    accountIcon,
    accountItemClick,
    moreClick,
    index = -1,
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

  return (
    <>
      <div className="title">
        <h1> All Accounts</h1>
        <hr id="hr" />
      </div>

      <div className="AccountItem-Container">
        <div id="custom_div" style={bgStyle}></div>
        <div className="AccountItem-overlay">
          <div className="mainGrid-account">
            <div className="AccountItem-info-account-area">
              <p onClick={() => accountItemClick(index)}>{accountName}</p>

              <div className="AccountItem-moreArea" onClick={moreClick}>
                <img src={bankIcon} width={24} height={24} alt="bank_icon_image" />
              </div>
            </div>
            <div className="AccountItem-available-to-spend-area">
              <p className="heading">Available to Spend</p>
              <div className="AccountItem-spend-amount">
                <p className="currency">PKR</p>
                <p className="amount">20,000</p>
              </div>
            </div>
            <div className="AccountItem-account-icon-area">
              <div
                className="AccountItem-account-icon-area-btn-main"
                onClick={() => accountItemClick(index)}
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
          <Link to="/addAccount">
            <button id="accounts_btn">
                <AiOutlinePlus id="plus_icon" />
            ADD ACCOUNT
            </button>
          </Link>
        </div>
      </div>
      {
        <>
          <HKAccountListing2 />
          <HKBottomNav />
        </>
      }
    </>
  );
};

export default HKAccountItem;
