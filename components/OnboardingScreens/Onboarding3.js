import React from "react";
import { FiCircle } from "react-icons/fi";
import womenWithAllPhone from "../../public/icons/womenWithAll_Items.svg";

// Below is the normal external css file import:
import "./Onboarding1.css";

// But the below one is the modular.css file:
import styles from "./CommonElements.module.css";

import { useNavigate } from "react-router-dom";

function Onboarding3() {
  const navigate = useNavigate();

  return (
    <div className={styles.main_div_obs1}>
      <div className={styles.img_div}>
        <div className={styles.img_center} >
          <img src={womenWithAllPhone} alt="men_with_phone_image" />
        </div>
      </div>
      <div className={styles.h_p_div}>
        <h2>Save for your dreams</h2>
        <p>
          Create and achieve goals to live <br /> your best life
        </p>
      </div>
      <div className={styles.circle_main_div}>
        <div className={styles.circle}>
          {" "}
          <FiCircle
            style={{ fontSize: 10 }}
            onClick={() => navigate("/")}
          />{" "}
        </div>
        <div className={styles.circle}>
          {" "}
          <FiCircle
            style={{ fontSize: 10 }}
            onClick={() => navigate("/Onboarding2")}
          />{" "}
        </div>
        <div className={styles.circle}>
          {" "}
          <FiCircle
            style={{
              fontSize: 10,
              backgroundColor: "#75BAC6",
              color: "white",
              borderRadius: "50%",
            }}
          />{" "}
        </div>
      </div>

      <div className={styles.btns_main_div}>
        <button
          className={styles.btns}
          id="getStarted_btn"
          onClick={() => navigate("/HKAccountMain")}
        >
          Get Started
        </button>
      </div>
    </div>
  );
}

export default Onboarding3;
