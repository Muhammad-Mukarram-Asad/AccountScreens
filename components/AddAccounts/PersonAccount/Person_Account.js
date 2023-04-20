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

      <div className={styles.horizontal_line}></div>

      <div className={styles.person_account_balance}>
        <h1>Person Name</h1>
        <input type="text" placeholder="Name" maxLength={20} />
      </div>

      <div className={styles.person_account_balance}>
        <h1>Opening Balance</h1>
        <p className={styles.person_p}> What is the balance between you and this person?</p>
        <input type="text" placeholder="PKR 0" minLength={4} />
      </div>

      <div className={styles.person_account_opening_div}>
          <div className={`${styles.person_add_accounts_inner_div} ${styles.person_left_side}`} onClick={()=>{navigate("/thirdScreen")}}>
            <img src={ArrowBackwardPerson} alt="acc_positive" />
            <h5> Positive</h5>
            <p>Select if this person owes your money</p>
          </div>

        <div className={`${styles.person_add_accounts_inner_div} ${styles.person_left_side}`}>
          <img src={ArrowRedPerson} alt="acc_negative" />
          <h5>Negative</h5>
          <p>Select if you owe this person money</p>
        </div>
      </div>

      <button className={styles.add_person_btn}>Add Person Account</button>
    </div>
  );
}

export default PersonAccount;
