import useIngredient from "../../hooks/useIngredient";
import style from "./TableIngredients.module.css";
import IMG_DELETE from "/img/deleteIcon.svg";
import IMG_UPDATE from "/img/editIcon.svg";
const TableIngredients = () => {
    const { ingredients, handleSelectIngredient } = useIngredient();
    return (
        <>
            <table className={style.containerTable}>
                <thead className={style.headTable}>
                    <tr>
                        <th className={style.titleTable}>
                            Ingredient
                        </th>
                        <th className={style.titleTable}>
                            Stock
                        </th>
                        <th className={style.titleTable}>
                            Edit
                        </th>
                        <th className={style.titleTable}>
                            Delete
                        </th>
                    </tr>

                </thead>
                <tbody className={style.bodyTable}>
                    {
                        ingredients.map((ingredient, i) => (
                            <tr key={i}>
                                <th>
                                    {ingredient.name}
                                </th>
                                <th>
                                    {ingredient.stock}
                                </th>
                                <th>
                                    <button
                                        onClick={() => handleSelectIngredient(ingredient.id, "update")}
                                        className={style.btnAction}
                                    >
                                        <img src={IMG_UPDATE} alt="" />
                                    </button>
                                </th>
                                <th>
                                    <button
                                        onClick={() => handleSelectIngredient(ingredient.id, "delete")}
                                        className={style.btnAction}
                                    >
                                        <img src={IMG_DELETE} alt="" />
                                    </button>
                                </th>
                            </tr>
                        ))
                    }
                </tbody>

            </table>
        </>
    )
}

export default TableIngredients