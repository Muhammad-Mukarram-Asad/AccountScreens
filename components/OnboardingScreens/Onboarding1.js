import React from "react";
import { FiCircle } from "react-icons/fi";
import menWithPhone from "../../public/icons/menWithPhone.svg";
import "./Onboarding1.css";
import styles from "./CommonElements.module.css"

import { Link, useNavigate } from "react-router-dom";

function Onboarding1() {
  const navigate = useNavigate();
  return (
    <div className={styles.main_div_obs1}>
      <div className={styles.img_div}>
        <img src={menWithPhone} alt="men_with_phone_image" />
      </div>
      <div className={styles.h_p_div}>
        <h2>Track your expenses</h2>
        <p>
          Know where all your money is <br /> being spent
        </p>
      </div>
      <div className={styles.circle_main_div}>
        <div className={styles.circle}>
          {" "}

        {/* First Circle Below */}

          <FiCircle
            style={{
              fontSize: 20,
              backgroundColor: "#75BAC6",
              color: "white",
              borderRadius: "50%",
            }}
          />{" "}
        </div>

        {/* Second Circle Below */}

        <div className={styles.circle}>
          {" "}
          <FiCircle
            style={{ fontSize: 20 }}
            onClick={() => navigate("/Onboarding2")}
          />{" "}
        </div>

        {/* Third Circle Below */}

        <div className={styles.circle}>
          {" "}
          <FiCircle
            style={{ fontSize: 20 }}
            onClick={() => navigate("/Onboarding3")}
          />{" "}
        </div>
      </div>

      <div className={styles.btns_main_div}>
        <button className={styles.btns} id="skip_btn">
          Skip
        </button>

        <Link to="/Onboarding2">
          <button className={styles.btns} id="next_btn">
            Next
          </button>
        </Link>
      </div>
    </div>
  );
}

export default Onboarding1;
