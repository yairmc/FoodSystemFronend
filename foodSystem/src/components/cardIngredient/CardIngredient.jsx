import style from "./CardIngredient.module.css";
const CardIngredient = () => {
  return (
    <div className={style.cardIngredient}>
      <form action="" className={style.formIngredient}>
        <h1>Add Ingredient</h1>
        <div className={style.inputIngredient} >
        <input type="text" nombre="nombre" name="nameInput"/>
        </div>
        <select name="" id="" className={style.selectStock}>
          <option value="">1</option>
          <option value="">2</option>
          <option value="">3</option>
        </select>
        <div className={style.btnCard}>
        <input type="submit" value="Add" />
        </div>
      </form>
    </div>
  )
}

export default CardIngredient