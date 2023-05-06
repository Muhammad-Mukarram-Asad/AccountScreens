import React from "react";
import BackArrow from "../../../public/icons/backArrowIcon.svg";
import RightArrow from "../../../public/icons/RightArrow.svg";
import styles from "./CashAccount.module.css";
import { useNavigate } from "react-router-dom";

function CashAccount() {
  const navigate = useNavigate();

  return (
    <div className={styles.cash_account_main_div}>
      <div className={styles.main_heading_div}>
        <img
          src={BackArrow}
          alt="back_arrow_image"
          onClick={() => {
            navigate(-1);
          }}
        />
        <h1>Add Cash Account</h1>
        <img
          src={RightArrow}
          className={styles.right_arrow_icon}
          alt="back_arrow_image"
        />
      </div>

      {/* <div className={styles.horizontal_line}></div> */}

      <div className={styles.cash_account_balance}>
        <h1>Account title</h1>
        <input type="text" placeholder="My Cash Account" maxLength={50} />
      </div>

      <div className={styles.cash_account_balance}>
        <h1>Opening Balance</h1>
        <p className={styles.cash_p}> How much cash do you have?</p>
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
      </div>

      <button className={styles.add_cash_btn}>Add Cash Account</button>
    </div>
  );
}

export default CashAccount;
