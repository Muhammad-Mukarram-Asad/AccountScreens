import React from "react";
import Add_Person from "../../public/icons/Add_Person.svg";
import BackArrow from "../../public/icons/backArrowIcon.svg";
import RightArrow from "../../public/icons/RightArrow.svg";
 import { useNavigate} from "react-router-dom";

import "./PersonAccount.css";

function Fourth_Screen_Person_Account() {
  const navigate = useNavigate();
  return (
    <div className="person_account_main_div">
      <div id="main_heading_div">
        <img src={BackArrow} alt="back_arrow_image" />
        <h1>Add Person Account</h1>
        <img src={RightArrow} alt="back_arrow_image" />
      </div>

      <div id="horizontal_line"></div>

      <div className="person_account_balance">
        <h1>Person Name</h1>
        <input type="text" placeholder="Name" maxLength={20} />
      </div>

      <div className="person_account_balance">
        <h1>Opening Balance</h1>
        <p id="person_p"> What is the balance between you and this person?</p>
        <input type="text" placeholder="PKR 0" minLength={4} />
      </div>

      <div className="person_account_opening_div">
          <div className="person_add_accounts_inner_div" id="person_left_side" onClick={()=>{navigate("/thirdScreen")}}>
            <img src={Add_Person} alt="acc_positive" />
            <h5> Positive</h5>
            <p>Select if this person owes your money</p>
          </div>

        <div className="person_add_accounts_inner_div" id="person_right_side">
          <img src={Add_Person} alt="acc_negative" />
          <h5>Negative</h5>
          <p>Select if you owe this person money</p>
        </div>
      </div>

      <button id="add_person_btn">Add Person Account</button>
    </div>
  );
}

export default Fourth_Screen_Person_Account;
