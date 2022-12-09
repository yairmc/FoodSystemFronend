import useIngredient from "../../hooks/useIngredient";
import style from "./CardIngredient.module.css";
const CardIngredient = () => {
  const {
    hadleOnChangeNewIngredient,
    handleAddIngredient,
    errorAction,
    ingredientInfo,
    action,
    handleSelectIngredient,
    handleUpdateIngredient,
    handleResetAction,
    handleDeleteIngredient,
    ingredientFound
  } = useIngredient();


  const ingredientAction = action.action;


  const handleOnSubmit = async (e) => {
    if (ingredientAction === "void") {
      await handleAddIngredient(e);
    } else if (ingredientAction === "update") {
      await handleUpdateIngredient(e);

    } else if (ingredientAction === "delete") {
      await handleDeleteIngredient(e);
    }
  }
  const handleOnCancel = (e) => {
    e.preventDefault();
    handleResetAction();

  }
  return (
    <div className={style.card}>
      <form className={style.form}
        onSubmit={handleOnSubmit}
      >
        <h1>Add Role</h1>
        <div className={style.inputForm} >
          <input type="text" name="name" placeholder="Ingredient name..."
            value={ingredientInfo.name}
            onChange={hadleOnChangeNewIngredient}
            disabled={ingredientAction === "delete" ? true : false}
          />
        </div>
        <div className={style.inputForm}>
          <input type="number" placeholder={"Stock..."} name="stock"
            value={ingredientInfo.stock}
            onChange={hadleOnChangeNewIngredient}
            disabled={ingredientAction === "delete" ? true : false}
          />
        </div>
        <div className={style.btnCard}>
          <input type="submit" value={ingredientAction === "void" ? "Add" : ingredientAction} />
          {
            ingredientAction !== "void" ? (
              <button className={style.btnCancel}
                onClick={handleOnCancel}
              >
                Cancel
              </button>
            ) : null
          }
        </div>
        <div>
          {
            errorAction.state ? (
              <div className={style.errorMessage}>
                <p>{errorAction.message}</p>
              </div>
            ) : null
          }
        </div>
      </form>
    </div>
  )
}

export default CardIngredient