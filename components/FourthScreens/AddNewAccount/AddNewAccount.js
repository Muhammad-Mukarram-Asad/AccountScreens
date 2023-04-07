import React from "react";
import Bank_Building from "../../../public/icons/Bank_Building.svg";
// import Person from "../../../public/icons/Person.svg";
import Add_Person from "../../../public/icons/Add_Person.svg";

import BackArrow from "../../../public/icons/backArrowIcon.svg";
import Cash from "../../../public/icons/Cash.svg";
import RightArrow from "../../../public/icons/RightArrow.svg";

import { useNavigate } from "react-router-dom";

import "./AddNewAccount.css";

function AddNewAccount() {
  const navigate = useNavigate();
  return (
    <div className="add_new_account_main_div">
      <div id="main_heading_div">
        <img src={BackArrow} alt="back_arrow_image" />
        <h1>Add New Account</h1>
        <img src={RightArrow} alt="back_arrow_image" />
      </div>

      <div id="horizontal_line"></div>

      <div className="selecting_account_div">
        <p>Choose your accoun type</p>

        <div className="accounts_list">
          <div className="account_list_inner_div" onClick={()=>{navigate("/addCashAccount")}}>
              <div className="account_list_img_div">
                <img src={Cash} alt="cash_icon_img" />
              </div>
              <p>Cash</p>
          </div>

          <hr id="hr" />

          <div className="account_list_inner_div" onClick={()=>{navigate("/addBankAccount")}}>
              <div className="account_list_img_div">
                <img src={Bank_Building} alt="Bank_building_icon_img" />
              </div>
              <p>Bank</p>
          </div>

          <hr id="hr" />

          <div className="account_list_inner_div" onClick={()=>{navigate("/addPersonAccount")}}>
              <div className="account_list_img_div">
                <img src={Add_Person} alt="person_icon_img" />
              </div>
              <p>Person</p>
          </div>

          <hr id="hr" />
        </div>
      </div>
    </div>
  );
}

export default AddNewAccount;
