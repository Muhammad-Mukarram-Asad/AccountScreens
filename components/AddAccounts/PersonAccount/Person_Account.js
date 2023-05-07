import React from "react";
// import Add_Person from "../../../public/icons/Add_Person.svg";
import ArrowBackwardPerson from "../../../public/icons/ArrowPersonBackword.svg"
import ArrowRedPerson from "../../../public/icons/ArrowRedPerson.svg"
import BackArrow from "../../../public/icons/backArrowIcon.svg";
import RightArrow from "../../../public/icons/RightArrow.svg";
 import { useNavigate} from "react-router-dom";

import styles from "./PersonAccount.module.css";

function PersonAccount() {
  const navigate = useNavigate();
  return (
    <div className={styles.person_account_main_div}>
      <div className={styles.main_heading_div}>
        <img src={BackArrow} alt="back_arrow_image" onClick={()=> {navigate(-1)}} />
        <h1>Add Person Account</h1>
        <img src={RightArrow} className={styles.right_arrow_icon} alt="back_arrow_image" />
      </div>


      <div className={styles.person_account_balance}>
        <h1>Person Name</h1>
        <input type="text" placeholder="Name" maxLength={20} />
      </div>

      <div className={styles.person_account_balance}>
        <h1>Opening Balance</h1>
        <p> What is the balance between you and this person?</p>
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

      <div className={styles.person_account_opening_div}>
          <div className={`${styles.person_add_accounts_inner_div} ${styles.person_left_side}`} onClick={()=>{navigate("/thirdScreen")}}>
            <img src={ArrowBackwardPerson} alt="acc_positive" />
            <h5> Receivable</h5>
            <p>Select if this person owes your money</p>
          </div>

        <div className={`${styles.person_add_accounts_inner_div} ${styles.person_right_side}`}>
          <img src={ArrowRedPerson} alt="acc_negative" />
          <h5>Payable</h5>
          <p>Select if you owe this person money</p>
        </div>
      </div>

      <div className={styles.person_btn_div}>
        <button className={styles.add_person_btn}>Add Person Account</button>
      </div>
    </div>
  );
}

export default PersonAccount;
