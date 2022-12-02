
import style from "./TableProduct.module.css";
import IMG_DELETE from "/img/deleteIcon.svg";
import IMG_UPDATE from "/img/editIcon.svg";

const TableProducts = () => {
     return (
        <>
            <table className={style.containerTable}>
                <thead className={style.headTable}>
                    <tr>
                        <th className={style.titleTable}>
                            Packaged Product
                        </th>
                        <th className={style.titleTable}>
                            Cost
                        </th>
                        <th className={style.titleTable}>
                            Base Price
                        </th>
                        <th className={style.titleTable}>
                            Taxes
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
                            Pastel
                        </th>
                        <th>
                            50
                        </th>
                        <th>
                            50
                        </th>
                        <th>
                            50
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
                            Donas
                        </th>
                        <th>
                            60
                        </th>
                        <th>
                            50
                        </th>
                        <th>
                            50
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
                            Pay
                        </th>
                        <th>
                            22
                        </th>
                        <th>
                            50
                        </th>
                        <th>
                            50
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
                </tbody>
            </table>
            <br></br>
            <table className={style.containerTable}>
                <thead className={style.headTable}>
                    <tr>
                        <th className={style.titleTable}>
                            Prepared Product
                        </th>
                        <th className={style.titleTable}>
                            Cost
                        </th>
                        <th className={style.titleTable}>
                            Base Price
                        </th>
                        <th className={style.titleTable}>
                            Taxes
                        </th>
                        <th className={style.titleTable}>
                            Ingredients
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
                            Pastel
                        </th>
                        <th>
                            50
                        </th>
                        <th>
                            50
                        </th>
                        <th>
                            50
                        </th>
                        <th>
                            ingredient, ingredient
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
                            Donas
                        </th>
                        <th>
                            60
                        </th>
                        <th>
                            50
                        </th>
                        <th>
                            50
                        </th>
                        <th>
                        ingredient, ingredient
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
                            Pay
                        </th>
                        <th>
                            22
                        </th>
                        <th>
                            50
                        </th>
                        <th>
                            50
                        </th>
                        <th>
                        ingredient, ingredient
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

export default TableProducts