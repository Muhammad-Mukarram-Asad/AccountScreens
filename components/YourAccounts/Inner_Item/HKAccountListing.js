import React from "react";
import "./HKAccountListing.css";
import Dashboard from "../../../public/icons/Dashboard.svg";
import arrow from "../../../public/icons/arrow.svg";
import bankIcon from "../../../public/icons/bankIcon.svg";
import congrats from "../../../public/icons/congrats.svg";
import ATM from "../../../public/icons/ATM.svg";
import Income from "../../../public/icons/Income.svg";
import Savings from "../../../public/icons/Savings.svg";



const HKAccountListing2 = (props) => {
  const {
    index = -1,
    listItemWithBg = true,
    title = "ACCOUNT TITLE - 5645",
    icon = bankIcon,
    amount = "pkr 6,000",
    showArrow = true,
    onClickItem,
  } = props;
  return (
    <>
      <div>
        {listItemWithBg ? (
          <ListItemWithBg
            index={index}
            onClickItem={onClickItem}
            title={title}
            icon={icon}
            amount={amount}
            showArrow={showArrow}
          />
        ) : (
          <ListItemWithoutBg
            index={index}
            onClickItem={onClickItem}
            title={title}
            icon={icon}
            amount={amount}
            showArrow={showArrow}
          />
        )}
      </div>

      <div>
        {listItemWithBg ? (
          <ListItemWithBg
            index={index}
            onClickItem={onClickItem}
            title="Cash"
            icon={Dashboard}
            amount={amount}
            showArrow={showArrow}
          />
        ) : (
          <ListItemWithoutBg
            index={index}
            onClickItem={onClickItem}
            title={"Cash"}
            icon={Dashboard}
            amount={amount}
            showArrow={showArrow}
          />
        )}
      </div>

      <div>
        {listItemWithBg ? (
          <ListItemWithBg
            index={index}
            onClickItem={onClickItem}
            title="Goals"
            icon={congrats}
            amount={amount}
            showArrow={showArrow}
          />
        ) : (
          <ListItemWithoutBg
            index={index}
            onClickItem={onClickItem}
            title={"Goals"}
            icon={congrats}
            amount={amount}
            showArrow={showArrow}
          />
        )}
      </div>

      <div>
        {listItemWithBg ? (
          <ListItemWithBg
            index={index}
            onClickItem={onClickItem}
            title="Budget"
            icon={ATM}
            amount={amount}
            showArrow={showArrow}
          />
        ) : (
          <ListItemWithoutBg
            index={index}
            onClickItem={onClickItem}
            title={"Budget"}
            icon={ATM}
            amount={amount}
            showArrow={showArrow}
          />
        )}
      </div>

      <div>
        {listItemWithBg ? (
          <ListItemWithBg
            index={index}
            onClickItem={onClickItem}
            title="Income"
            icon={Income}
            amount={amount}
            showArrow={showArrow}
          />
        ) : (
          <ListItemWithoutBg
            index={index}
            onClickItem={onClickItem}
            title={"Income"}
            icon={Income}
            amount={amount}
            showArrow={showArrow}
          />
        )}
      </div>

      <div>
        {listItemWithBg ? (
          <ListItemWithBg
            index={index}
            onClickItem={onClickItem}
            title="Savings"
            icon={Savings}
            amount={amount}
            showArrow={showArrow}
          />
        ) : (
          <ListItemWithoutBg
            index={index}
            onClickItem={onClickItem}
            title={"Savings"}
            icon={Savings}
            amount={amount}
            showArrow={showArrow}
          />
        )}
      </div>

    </>
  );
};

const HKAccountListing = ({
  index = -1,
  listItemWithBg = true,
  title = "ACCOUNT TITLE - 5645",
  icon = bankIcon,
  amount = "pkr 6,000",
  showArrow = true,
  onClickItem,
}) => {
  return listItemWithBg ? (
    <ListItemWithBg
      index={index}
      onClickItem={onClickItem}
      title={title}
      icon={icon}
      amount={amount}
      showArrow={showArrow}
    />
  ) : (
    <ListItemWithoutBg
      index={index}
      onClickItem={onClickItem}
      title={title}
      icon={icon}
      amount={amount}
      showArrow={showArrow}
    />
  );
};



const ListItemWithoutBg = ({
  title,
  icon,
  amount,
  showArrow,
  onClickItem,
  index,
}) => {
  return (
    <div
      className="ListItemWithoutBg"
      onClick={index != -1 ? () => onClickItem(index) : onClickItem}
    >
      <div className="AccountArea">
        <div className="icon-circle-AccountArea">
          <img src={icon} width={20} height={20} alt="icons" />
        </div>
        <p>{title}</p>
      </div>
      <div className="AmountArea">
        <p>{amount}</p>
        {showArrow ? <img src={arrow} width={6} height={10}  alt="icons" /> : null}
      </div>
    </div>
  );
};
const ListItemWithBg = ({
  title,
  icon,
  amount,
  showArrow,
  onClickItem,
  index,
}) => {
  return (
    <div
      className="ListItemWithBg"
      onClick={index != -1 ? () => onClickItem(index) : onClickItem}
    >
      <div className="AccountArea">
        <div className="icon-circle-AccountArea">
          <img src={icon} width={20} height={20}   alt="icons" />
        </div>
        <p>{title}</p>
      </div>
      <div className="AmountArea">
        <p>{amount}</p>
        {showArrow ? <img src={arrow} width={10} height={10} alt="arrow" /> : null}{" "}
      </div>
    </div>
  );
};

export default HKAccountListing2;
