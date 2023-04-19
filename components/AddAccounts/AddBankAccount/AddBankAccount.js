import React from "react";
import AccountPositive from "../../../public/icons/AccOpeningPositive.svg";
import AccountNegative from "../../../public/icons/AccOpeningNegative.svg";
import BackArrow from "../../../public/icons/backArrowIcon.svg";
import RightArrow from "../../../public/icons/RightArrow.svg";
import BankIcon from "../../../public/icons/bankIcon.svg"
import "./AddBankAccount.css";

import { useNavigate } from "react-router-dom";


function AddBankAccount() {
  const navigate = useNavigate();
  return (
    <div className="add_bank_account_main_div">
      <div id="main_heading_div">
        <img src={BackArrow} alt="back_arrow_image" />
        <h1>Add Bank Account</h1>
        <img src={RightArrow} alt="back_arrow_image" />
      </div>

      <div id="horizontal_line"></div>

      <div className="account_title">
        <h1>Enter an account title</h1>
        <p> Title should be longer than 3 and less than 50 characters</p>
        <div className="account_title_inner_div">
          <img src={BankIcon} alt="bank_icon" />
          <input type="text" placeholder="Bank Alfalah" maxLength={10} />
        </div>
      </div>


      <div className="account_balance">
        <h1>Opening Balance</h1>
        <p> How much money do you already have in this account?</p>
        <input type="text" placeholder="PKR 0" minLength={4} />
      </div>

      <div className="account_opening_div">
        <div className="add_accounts_inner_div" id="left_side" onClick={()=> {navigate("/selectAccount")}}>
            <img src={AccountPositive} alt="acc_positive" />
            <h5> Positive</h5>
            <p>
                Select if you currently have money in the account
            </p>
        </div>

        <div className="add_accounts_inner_div" id='right_side' onClick={()=> {navigate("/selectAccount")}}>
            <img src={AccountNegative} alt="acc_positive" />
            <h5>Negative</h5>
            <p>
                Select if you currently owe money to the account
            </p>
        </div>
      </div>

      <button id="add_account_btn">Add Bank Account</button>

    </div>
  );
}

export default AddBankAccount;
