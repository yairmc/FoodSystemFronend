import useIngredient from "../../hooks/useIngredient";

import style from "./InfoIngredient.module.css";
const InfoIngredient = () => {
    const {ingredients} = useIngredient();
    return (
        <div className={style.cardIngredient}>
            <label htmlFor="">All Ingredients</label>
            <p className={style.p}>{ingredients.length}</p>
        </div>
    )
}

export default InfoIngredient