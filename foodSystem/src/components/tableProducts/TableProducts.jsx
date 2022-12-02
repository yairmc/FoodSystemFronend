const TableProducts = () => {
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
                <tbody id="packagedArea"></tbody>
            </table>
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
                            Ingredients
                        </th>
                    </tr>
                </thead>
                <tbody id="preparedArea"></tbody>
            </table>
        </>
        
    )
}

export default TableProducts