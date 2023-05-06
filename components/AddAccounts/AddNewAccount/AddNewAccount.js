import React from "react";
// import Bank_Building from "../../../public/icons/Bank_Building.svg";
import Bank from "../../../public/icons/Bank.svg";
// import Person from "../../../public/icons/Person.svg";
import Add_Person from "../../../public/icons/Add_Person.svg";

import BackArrow from "../../../public/icons/backArrowIcon.svg";
import Cash from "../../../public/icons/Cash.svg";
import RightArrow from "../../../public/icons/RightArrow.svg";

import { useNavigate } from "react-router-dom";

import styles from "./AddNewAccount.module.css";

function AddNewAccount() {
  const navigate = useNavigate();
  return (
    <div className={styles.add_new_account_main_div}>
      <div className={styles.main_heading_div}>
        <img src={BackArrow} alt="back_arrow_image" onClick={()=> {navigate(-1)}} />
        <h1>Add New Account</h1>
        <img src={RightArrow} className={styles.right_arrow_icon} alt="back_arrow_image" />
      </div>

      {/* <hr className={styles.hr} /> */}

      <div className={styles.selecting_account_div}>
        <p>Choose your account type</p>

        <div className={styles.accounts_list}>
          <div className={styles.account_list_inner_div} onClick={()=>{navigate("/addCashAccount")}}>
              <div className={styles.account_list_img_div}>
                <img src={Cash} alt="cash_icon_img" />
              </div>
              <p>Cash</p>
          </div>

          {/* <hr className={styles.hr} /> */}

          <div className={styles.account_list_inner_div} onClick={()=>{navigate("/addBankAccount")}}>
              <div className={styles.account_list_img_div}>
                <img src={Bank} alt="Bank_building_icon_img" />
              </div>
              <p>Bank</p>
          </div>

          {/* <hr className={styles.hr} /> */}

          <div className={styles.account_list_inner_div} onClick={()=>{navigate("/addPersonAccount")}}>
              <div className={styles.account_list_img_div}>
                <img src={Add_Person} alt="person_icon_img" />
              </div>
              <p>Person</p>
          </div>

          {/* <hr className={styles.hr} /> */}
        </div>
      </div>
    </div>
  );
}

export default AddNewAccount;
