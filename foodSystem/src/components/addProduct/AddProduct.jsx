import style from "./AddProduct.module.css";

const AddProduct = () => {
    return (
        <>
        <div className={style.generalCardProduct}>
            <div className={style.cardProduct}>
                <form action="" className={style.formProduct}>
                    <h1>Add Product</h1>
                    <div className={style.inputProduct} >
                        <input type="text" nombre="nombre" name="nameInput" placeholder="Name" />
                    </div>
                    <div className={style.inputProduct} >
                        <input type="text" nombre="cost" name="costInput" placeholder="Cost" />
                    </div>

                    <div className={style.inputProduct} >
                        <input type="text" nombre="cost" name="costInput" placeholder="Base price" />
                    </div>

                    <div className={style.inputProduct} >
                        <input type="text" nombre="cost" name="costInput" placeholder="Taxes" />
                    </div>

                    <div className={style.inputProduct} >
                        <select name="" id="" className={style.selectType}>
                            <option value="">Beverage</option>
                            <option value="">Dish</option>
                        </select>
                    </div>

                    <div className={style.inputProduct} >
                        <select name="" id="" className={style.selectStock}>
                            <option value="">1</option>
                            <option value="">2</option>
                            <option value="">3</option>
                        </select>
                    </div>

                    <div className={style.btnCard}>
                        <input type="submit" value="Add" />
                    </div>

                </form>
            </div>

            <div className={style.cardRight}>
            <div className={style.cardInfoProducts}>
            <h1 className={style.tableTitle}>Ingredients</h1>
            <table className={style.containerTable}>
                
                <tbody className={style.bodyTable}>
                    <tr>
                        <th className={style.checkColumn}>
                        <input type="checkbox"/>
                        </th>
                        <th>
                            IngredientName
                        </th>
                        
                    </tr>
                    <tr>
                        <th>
                        <input type="checkbox"/>
                        </th>
                        <th>
                        IngredientName
                        </th>
                        
                    </tr>
                    <tr>
                        <th>
                        <input type="checkbox"/>
                        </th>
                        <th>
                        IngredientName
                        </th>
                        
                    </tr>
                    <tr>
                        <th>
                        <input type="checkbox"/>
                        </th>
                        <th>
                        IngredientName
                        </th>
                        
                    </tr>
                    <tr>
                        <th>
                        <input type="checkbox"/>
                        </th>
                        <th>
                        IngredientName
                        </th>
                        
                    </tr><tr>
                        <th>
                        <input type="checkbox"/>
                        </th>
                        <th>
                        IngredientName
                        </th>
                        
                    </tr><tr>
                        <th>
                        <input type="checkbox"/>
                        </th>
                        <th>
                        IngredientName
                        </th>
                        
                    </tr>
                    <tr>
                        <th>
                        <input type="checkbox"/>
                        </th>
                        <th>
                        IngredientName
                        </th>
                        
                    </tr>
                </tbody>

            </table>
            </div>

            <div className={style.cardInfoProducts}>
                <div className={style.info}>
                    <label htmlFor="">All Products</label>
                    <p className={style.quantity}>200</p>
                </div>
                <div className={style.info}>
                    <label htmlFor="">Prepared Products</label>
                    <p className={style.quantity}>60</p>
                </div>
                <div className={style.info}>
                    <label htmlFor="">Packaged Products</label>
                    <p className={style.quantity}>140</p>
                </div>
            </div>
            </div>

            </div>
        </>
    )
}

export default AddProduct