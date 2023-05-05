import React from "react";
import { FiCircle } from "react-icons/fi";
import womenWithPhone from "../../public/icons/womenWithPhone.svg";
import "./Onboarding1.css";
import styles from "./CommonElements.module.css";
import { Link, useNavigate } from "react-router-dom";

function Onboarding2() {
  const navigate = useNavigate();
  return (
    <div className={styles.main_div_obs1}>
      <div className={styles.img_div}>
        <div className={styles.img_center}>
          <img src={womenWithPhone} alt="men_with_phone_image" />
        </div>
      </div>
      <div className={styles.h_p_div}>
        <h2>Spend with intentsion</h2>
        <p>
          Budget your monthly expenses <br /> and avoid overspending.
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
            style={{
              fontSize: 10,
              backgroundColor: "#75BAC6",
              color: "white",
              borderRadius: "50%",
            }}
          />{" "}
        </div>
        <div className={styles.circle}>
          {" "}
          <FiCircle
            style={{ fontSize: 10 }}
            onClick={() => navigate("/Onboarding3")}
          />{" "}
        </div>
      </div>

      <div className={styles.btns_main_div}>
        <div>
          <button
            className={styles.btns}
            id="skip_btn"
            onClick={() => {
              navigate("/OnboardingDashboard");
            }}
          >
            Skip
          </button>
        </div>

        <div>
          <Link to="/Onboarding3">
            <button className={styles.btns} id="next_btn">
              Next
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Onboarding2;
