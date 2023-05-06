import React from "react";
import AccountPositive from "../../../public/icons/AccOpeningPositive.svg";
import AccountNegative from "../../../public/icons/AccOpeningNegative.svg";
import BackArrow from "../../../public/icons/backArrowIcon.svg";
import RightArrow from "../../../public/icons/RightArrow.svg";
import BankIcon from "../../../public/icons/bankIcon.svg"
import styles from "./AddBankAccount.module.css";

import { useNavigate } from "react-router-dom";


function AddBankAccount() {
  const navigate = useNavigate();
  return (
    <div className={styles.add_bank_account_main_div}>
      <div className={styles.main_heading_div}>
        <img src={BackArrow} alt="back_arrow_image" onClick={()=> {navigate(-1)}} />
        <h1>Add Bank Account</h1>
        <img src={RightArrow} className={styles.right_arrow_icon} alt="back_arrow_image" />
      </div>

      {/* <div className={styles.horizontal_line}></div> */}

      <div className={styles.account_title}>
        <h1> Account Title*</h1>
        <p> Title should be longer than 3 and less than 50 characters</p>
        <div className={styles.account_title_inner_div}>
          <img src={BankIcon} alt="bank_icon" />
          <input type="text" placeholder="Bank Alfalah" maxLength={30} />
        </div>
      </div>

      <div className={styles.account_amount}>
        <h1>Last 4 Digits of Bank Number (Optional)</h1>
        <p>This should help you differentiate between accounts</p>
        <input type="number" placeholder="3567" minLength={4} />
      </div>


      <div className={styles.account_balance}>
        <h1>Opening Balance</h1>
        <p> How much money do you already have in this account?</p>
        <div className={styles.account_balance_selection_currency}>
        <select>
          <option defaultValue>PKR</option>
          <option>USD</option>
          <option>INR</option>
          <option>Euro</option>
          <option>Pound</option>
          <option>Riyal</option>
          </select>        
        <input type="text" placeholder="PKR 0" minLength={4} />

        </div>
        <p id={styles.amount_warning_p}>Amount Cannot be negative</p>
      </div>

      <div className={styles.account_opening_div}>
        <div className={`${styles.add_accounts_inner_div} ${styles.left_side}`} onClick={()=> {navigate("/selectAccount")}}>
            <img src={AccountPositive} alt="acc_positive" />
            <h5> Positive</h5>
            <p>
                Select if you currently have money in the account
            </p>
        </div>

        <div className={`${styles.add_accounts_inner_div} ${styles.right_side}`} onClick={()=> {navigate("/selectAccount")}}>
            <img src={AccountNegative} alt="acc_positive" />
            <h5>Negative</h5>
            <p>
                Select if you currently owe money to the account
            </p>
        </div>
      </div>

      <button className={styles.add_account_btn}>Add Bank Account</button>

    </div>
  );
}

export default AddBankAccount;
