import React from "react";
import "../optionMenu/Option.css";
import ingredientM from "../imgs/ingredientM.png";
import orderM from "../imgs/orderM.png";
import productM from "../imgs/productM.png";
import roleM from "../imgs/roleM.png";
import userM from "../imgs/userM.png";

function Option(props) {
  const {
    option, 
    name, 
    description
  } = props;

  let icon = "";

  if(option == "orderM"){
    icon = orderM;
  }
  if(option == "ingredientM"){
    icon = ingredientM;
  }
  if(option == "productM"){
    icon = productM;
  }
  if(option == "roleM"){
    icon = roleM;
  }
  if(option == "userM"){
    icon = userM;
  }

  return (
    <div className="container-option">
      <img 
        className="icon-option"
        src={icon}
        alt="Icon"/>  
      <div className="container-text-option">
        <p className="name-option">
          <strong>{name}</strong> 
        </p>
        <p className="description-option">{description}</p>
      </div>
    </div>
  );
}

export default Option;