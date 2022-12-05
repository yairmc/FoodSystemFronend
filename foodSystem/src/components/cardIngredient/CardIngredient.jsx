import style from "./CardIngredient.module.css";
const CardIngredient = () => {
  return (

    <div className={style.card}>
      <form action="" className={style.form}>
        <h1>Add Role</h1>
        <div className={style.inputForm} >
          <input type="text" nombre="nombre" name="nameInput" placeholder="Name" />
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