import "../menuPage/Menu.css"
import Option from "../../components/optionMenu/option";

  function Menu() {
    return (
      <div className="Menu">
        <div className="header">
          <p className="title">Welcome to <strong>Food System </strong> Username</p>
          <div className="divBtn">FOODSYSTEM</div>
        </div>
        <div className="main-container">
          <Option
            option="orderM"
            name="Order Managment"
            description="Short Description Short Description Short Description"
          />
          <Option
            option="productM"
            name="Product Managment"
            description="Short Description Short Description Short Description"
          />
          <Option
            option="ingredientM"
            name="Ingredient Managment"
            description="Short Description Short Description Short Description"
          />
          <Option
            option="userM"
            name="User Managment"
            description="Short Description Short Description Short Description"
          />
          <Option
            option="roleM"
            name="Role Managment"
            description="Short Description Short Description Short Description"
          />
        </div>
      </div>
    );
  }
  
  export default Menu;