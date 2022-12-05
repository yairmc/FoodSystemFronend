import style from "./InfoIngredient.module.css"
const InfoIngredient = () => {
    return (
        <div className={style.cardIngredient}>
            <label htmlFor="">All Ingredients</label>
            <p className={style.p}>200</p>
        </div>
    )
}

export default InfoIngredient