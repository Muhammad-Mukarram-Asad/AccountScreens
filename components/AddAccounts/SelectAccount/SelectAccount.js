import React from "react";
import Bank_Building from "../../../public/icons/Bank_Building.svg";
import BackArrow from "../../../public/icons/backArrowIcon.svg";
import RightArrow from "../../../public/icons/RightArrow.svg";
import SearchIcon from "../../../public/icons/searchIcon.svg";
import BankIcon from "../../../public/icons/bankIcon.svg"

import "./SelectAccount.css";
function SelectAccount() {
  return (
    <div className="fourth_screen_select_main_div">
      <div id="main_heading_div">
        <img src={BackArrow} alt="back_arrow_image" />
        <h1>Select a Bank</h1>
        <img src={RightArrow} alt="back_arrow_image" />
      </div>

      <div id="horizontal_line"></div>

      <div className="search_div">
        <img src={SearchIcon} alt="search_icon" />
        <input type="text" placeholder="Search" />
      </div>

      <div className="bank_list">
        <div className="bank_list_inner_div">
          <div className="bank_img_div">
            <img src={Bank_Building} alt="cash_icon_img" />
          </div>

          <p>Can't find your bank's name? Add it in!</p>
        </div>

        <hr id="hr" />

        <div className="bank_list_inner_div">
          <div className="bank_img_div">
            <img src={BankIcon} alt="cash_icon_img" />
          </div>

          <p>Telenor Microfinance</p>
        </div>

        <hr id="hr" />

        <div className="bank_list_inner_div">
          <div className="bank_img_div">
            <img src="https://www.abl.com/src/uploads/2020/11/Allied-Bank-Logo1.png" alt="cash_icon_img" />
          </div>

          <p>Allied Bank</p>
        </div>

        <hr id="hr" />

        <div className="bank_list_inner_div">
          <div className="bank_img_div">
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/United_Bank_Limited_logo.svg/1200px-United_Bank_Limited_logo.svg.png" alt="cash_icon_img" />
          </div>

          <p>UBL Bank</p>
        </div>

        <hr id="hr" />

        <div className="bank_list_inner_div">
          <div className="bank_img_div">
            <img src="https://s.rozee.pk/company_logos/30/68296145395519.png" alt="cash_icon_img" />
          </div>

          <p>Bank Al Habib</p>
        </div>

        <hr id="hr" />

        <div className="bank_list_inner_div">
          <div className="bank_img_div">
            <img src="https://www.meezanbank.com/wp-content/themes/mbl/images/logo-vertical.png" alt="cash_icon_img" />
          </div>

          <p>Meezan Bank</p>
        </div>

        <hr id="hr" />

        <div className="bank_list_inner_div">
          <div className="bank_img_div">
            <img src={BankIcon} alt="cash_icon_img" />
          </div>

          <p>Bank of Khyber</p>
        </div>

        <hr id="hr" />


      </div>
    </div>
  );
}

export default SelectAccount;
