import style from "./TableIngredients.module.css";
import IMG_DELETE from "/img/deleteIcon.svg";
import IMG_UPDATE from "/img/editIcon.svg";
const TableIngredients = () => {
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
                    <tr>
                        <th>
                            Zanahoria
                        </th>
                        <th>
                            50
                        </th>
                        <th>
                            <img src={IMG_UPDATE} alt="" />
                        </th>
                        <th>
                            <img src={IMG_DELETE} alt="" />
                        </th>
                    </tr>
                    <tr>
                        <th>
                            Papas
                        </th>
                        <th>
                            60
                        </th>
                        <th>
                            <img src={IMG_UPDATE} alt="" />
                        </th>
                        <th>
                            <img src={IMG_DELETE} alt="" />
                        </th>
                    </tr>
                    <tr>
                        <th>
                            Queso
                        </th>
                        <th>
                            22
                        </th>
                        <th>
                            <img src={IMG_UPDATE} alt="" />
                        </th>
                        <th>
                            <img src={IMG_DELETE} alt="" />
                        </th>
                    </tr>
                </tbody>

            </table>
        </>
    )
}

export default TableIngredients