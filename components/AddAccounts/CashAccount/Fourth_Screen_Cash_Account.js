import React from "react";
import BackArrow from "../../public/icons/backArrowIcon.svg";
import RightArrow from "../../public/icons/RightArrow.svg";
import "./CashAccount.css";

function Fourth_Screen_Cash_Account() {
  return (
    <div className="cash_account_main_div">
      <div id="main_heading_div">
        <img src={BackArrow} alt="back_arrow_image" />
        <h1>Add Cash Account</h1>
        <img src={RightArrow} alt="back_arrow_image" />
      </div>

      <div id="horizontal_line"></div>

      <div className="cash_account_balance">
        <h1>Account title</h1>
        <input
          type="text"
          placeholder="My Cash Account"
          maxLength={50}
        />
      </div>

      <div className="cash_account_balance">
        <h1>Opening Balance</h1>
        <p id="cash_p"> How much cash do you have?</p>
        <input type="text" placeholder="PKR 0" minLength={4} />
      </div>

      <button id="add_cash_btn">Add Cash Account</button>
    </div>
  );
}

export default Fourth_Screen_Cash_Account;
