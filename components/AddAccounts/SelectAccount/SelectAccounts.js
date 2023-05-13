import React from "react";
import Bank_Building from "../../../public/icons/Bank.svg";
import BackArrow from "../../../public/icons/backArrowIcon.svg";
import RightArrow from "../../../public/icons/RightArrow.svg";
import SearchIcon from "../../../public/icons/searchIcon.svg";
import BankIcon from "../../../public/icons/bankIcon.svg"
import Mobilink from "../../../public/icons/MobilinkMicrofinanceBankLtd.svg";
import Meezan from "../../../public/icons/Meezan.svg"
import Telenor from "../../../public/icons/TelenorMicrofinanceBank.svg"
import JazzCash from "../../../public/icons/JazzCash.svg"
import Allied from "../../../public/icons/AlliedBank.svg"
import UBL from "../../../public/icons/UBL.svg"


import { useNavigate } from "react-router-dom";

import styles from "./SelectAccount.module.css";
function SelectAccounts() {
 
  const navigate = useNavigate();
  return (
    <div className={styles.fourth_screen_select_main_div}>
      <div className={styles.main_heading_div}>
        <img src={BackArrow} alt="back_arrow_image" onClick={()=> {navigate(-1)}} />
        <h1>Select a Bank</h1>
        <img src={RightArrow} className={styles.right_arrow_icon} alt="back_arrow_image" />
      </div>

      {/* <div className={styles.horizontal_line}></div> */}

      <div className={styles.search_div}>
        <img src={SearchIcon} alt="search_icon" />
        <input type="text" placeholder="Search" />
      </div>

      <div className={styles.bank_list}>
        <div className={styles.bank_list_inner_div}>
          <div className={styles.bank_img_div}>
            <img src={Bank_Building} alt="cash_icon_img" />
          </div>

          <p>Can't find your bank's name? Add it in!</p>
        </div>

        <hr className={styles.hr} />

        <div className={styles.bank_list_inner_div}>
          <div className={styles.bank_img_div}>
            <img src={Telenor} alt="cash_icon_img" />
          </div>

          <p>Telenor Microfinance</p>
        </div>

        <hr className={styles.hr} />

        <div className={styles.bank_list_inner_div}>
          <div className={styles.bank_img_div}>
            <img src={Allied} alt="cash_icon_img" />
          </div>

          <p>Allied Bank</p>
        </div>

        <hr className={styles.hr} />

        <div className={styles.bank_list_inner_div}>
          <div className={styles.bank_img_div}>
            <img src={UBL} alt="cash_icon_img" />
          </div>

          <p>UBL Bank</p>
        </div>

        <hr className={styles.hr} />

        <div className={styles.bank_list_inner_div}>
          <div className={styles.bank_img_div}>
            <img src={BankIcon} alt="cash_icon_img" />
          </div>

          <p>Bank Al Falah</p>
        </div>

        <hr className={styles.hr} />

        <div className={styles.bank_list_inner_div}>
          <div className={styles.bank_img_div}>
            <img src={Meezan} alt="cash_icon_img" />
          </div>

          <p>Meezan Bank</p>
        </div>

        <hr className={styles.hr} />

        <div className={styles.bank_list_inner_div}>
          <div className={styles.bank_img_div}>
            <img src={JazzCash} alt="cash_icon_img" />
          </div>

          <p>Jazz Cash</p>
        </div>

        <hr className={styles.hr} />

        <div className={styles.bank_list_inner_div}>
          <div className={styles.bank_img_div}>
            <img src={Mobilink} alt="cash_icon_img" />
          </div>

          <p>Mobilink</p>
        </div>

        <hr className={styles.hr} />
      </div>
    </div>
  );
}

export default SelectAccounts;
