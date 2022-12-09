import ingredientM from "/img/ingredientM.png";
import orderM from "/img/orderM.png";
import productM from "/img/productM.png";
import roleM from "/img/roleM.png";
import userM from "/img/userM.png";
import style from "./OptionMenu.module.css"

function OptionMenu(props) {
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
    <div className={style.containerOption}>
      <img 
        className={style.iconOption}
        src={icon}
        alt="Icon"/>  
      <div className={style.containerTxtOption}>
        <p className={style.nameOption}>
          <strong>{name}</strong> 
        </p>
        <p className={style.descriptionOption}>{description}</p>
      </div>
    </div>
  );
}

export default OptionMenu;