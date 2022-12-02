import { useNavigate } from "react-router-dom";
import style from "./MenuPage.module.css"
import { OptionMenu } from "../../components";

function MenuPage() {
  let navigate = useNavigate();

  const handleOnSubmit = async (evt) => {
    evt.preventDefault();
    navigate("/admin/ingredient");
  }
  return (
    <div className={style.Menu}>
      <div className={style.header}>
        <p className={style.title}>Welcome to <strong>Food System </strong> Username</p>
        <div className={style.divBtn}>FOODSYSTEM</div>
      </div>
      <div className={style.mainContainer}>
        <OptionMenu
          option="orderM"
          name="Order Managment"
          description="Short Description Short Description Short Description"
        />
        <OptionMenu
          option="productM"
          name="Product Managment"
          description="Short Description Short Description Short Description"
        />
        <button className={style.btnOption} onClick={handleOnSubmit}>
          <OptionMenu
            option="ingredientM"
            name="Ingredient Managment"
            description="Short Description Short Description Short Description"
          />
        </button>
        <OptionMenu
          option="userM"
          name="User Managment"
          description="Short Description Short Description Short Description"
        />
        <OptionMenu
          option="roleM"
          name="Role Managment"
          description="Short Description Short Description Short Description"
        />
      </div>
    </div>
  );
}

export default MenuPage;