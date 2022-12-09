import { useNavigate } from "react-router-dom";
import style from "./MenuPage.module.css"
import { OptionMenu } from "../../components";

function MenuPage() {
  let navigate = useNavigate();

  const handleOnSubmit = async (evt) => {
    evt.preventDefault();
    navigate("/admin/ingredient");
  }
  const handleOnSubmitProduct = async (evt) => {
    evt.preventDefault();
    navigate("/admin/product");
  }
  const handleOnSubmitOrder = async (evt) => {
    evt.preventDefault();
    navigate("/admin/order");
  }
  const handleOnSubmitUser = async (evt) => {
    evt.preventDefault();
    navigate("/admin/user");
  }
  const handleOnSubmitRole = async (evt) => {
    evt.preventDefault();
    navigate("/admin/role");
  }

  return (
    <div className={style.Menu}>
      <div className={style.header}>
        <p className={style.title}>Welcome to <strong>Food System </strong> Username</p>
        <div className={style.divBtn}>FOODSYSTEM</div>
      </div>
      <div className={style.mainContainer}>
        <div onClick={handleOnSubmitOrder}>
          <OptionMenu
            option="orderM"
            name="Order Managment"
            description="Short Description Short Description Short Description"
          />
        </div>
        <div onClick={handleOnSubmitProduct}>
          <OptionMenu
            option="productM"
            name="Product Managment"
            description="Short Description Short Description Short Description"
          />
        </div>
        <div onClick={handleOnSubmit}>
          <OptionMenu
            option="ingredientM"
            name="Ingredient Managment"
            description="Short Description Short Description Short Description"
          />
        </div>
        <div onClick={handleOnSubmitUser}>
          <OptionMenu
            option="userM"
            name="User Managment"
            description="Short Description Short Description Short Description"
          />
        </div>
        <div onClick={handleOnSubmitRole}>
          <OptionMenu
            option="roleM"
            name="Role Managment"
            description="Short Description Short Description Short Description"
          />
        </div>
      </div>
    </div>
  );
}

export default MenuPage;