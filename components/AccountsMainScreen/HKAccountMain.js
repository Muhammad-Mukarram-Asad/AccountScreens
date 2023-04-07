import React from "react";
import "./HKAccountMain.css";
import first_screen_image from "../../Images/first_screen_image.png";
// import WhatYouhavebg from "../../public/icons/WhatYouhavebg.svg";
// import infoIcon from "../../public/icons/infoIcon.svg";
// import wallet from "../../public/icons/wallet.svg";
import HKBottomNav from "../Bottom_Nav/HKBottomNav";
import {useNavigate} from "react-router-dom";
const HKAccountMain = () => {

   const navigate = useNavigate();

  return (
    <div className="my_div">
      <div className="title"> All Accounts</div>
      <hr id="hr" />
      <img className="img" src={first_screen_image} alt="wallet_image" />

      <h2> No Active Account </h2>
      <p>
        You have not added any accounts. Add <br />
        your accounts to keep all your finances <br />
        organized in one place.
      </p>
 
   
     <button id="btn_primary" onClick={()=> navigate("/secondScreen")}>Add New Account</button>
   

      <hr id="hr" />

      <HKBottomNav />

    </div>

  );
};
 // const { currency, amount, bgColor = "#4799a6", infoClick } = props;
  // const bgStyle = {
  //   backgroundColor: bgColor,
  //   backgroundImage: `url(${WhatYouhavebg})`,
  //   backgroundSize: "cover",
  //   gridArea: "1 / 1",
  //   opacity: "100",
  //   borderRadius: "16px",
  // };
  
    // <div className="whatYouHave-Container">
    //   <div className="whatYouHave-overlay">
    //       <div className="account-icon-area">
    //         <div className="account-icon-area-btn-main">
    //           {/* <img src={logo} width={24} height={24} /> */}
    //         </div>
    //       </div>


export default HKAccountMain;

