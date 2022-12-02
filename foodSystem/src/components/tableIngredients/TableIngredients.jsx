import style from "./TableIngredients.module.css";
const TableIngredients = () => {
    return (
        <>
        <br></br>
            <table>
                <thead>
                    <tr>
                        <th>
                            Prepared Product
                        </th>
                        <th>
                            Cost
                        </th>
                        <th>
                            Base Price
                        </th>
                        <th>
                            Taxes
                        </th>
                        <th>
                            Stock
                        </th>
                    </tr>
                </thead>
                <tbody id="preparedArea"></tbody>
            </table>
        </>
    )
}

export default TableIngredients