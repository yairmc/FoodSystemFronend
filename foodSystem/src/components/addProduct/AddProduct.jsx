import style from "./AddProduct.module.css";
import useProducts from "../../hooks/useProducts";


const AddProduct = () => {
    const { handleAddProduct, handleOnChangeFormInput } = useProducts();
    const handleOnSubmit = async (evt) => {
        evt.preventDefault();
        await handleAddProduct()
    }
    return (
        <>
            <div className={style.generalCardProduct}>
                <div className={style.cardProduct}>
                    <form action="" className={style.formProduct}>
                        <h1>Add Product</h1>
                        <div className={style.inputProduct} >
                            <input type="text" nombre="nombre" name="name" placeholder="Name"
                                onChange={handleOnChangeFormInput} />
                        </div>
                        <div className={style.inputProduct} >
                            <input type="text" cost="cost" name="cost" placeholder="Cost"
                                onChange={handleOnChangeFormInput} />
                        </div>

                        <div className={style.inputProduct} >
                            <input type="text" baseprice="basePrice" name="basePrice" placeholder="Base price"
                                onChange={handleOnChangeFormInput} />
                        </div>

                        <div className={style.inputProduct} >
                            <input type="text" taxes="taxes" name="taxes" placeholder="Taxes"
                                onChange={handleOnChangeFormInput} />
                        </div>

                        <div className={style.inputProduct} >
                            <select name="" id="" className={style.selectType}>
                                <option value="">Packaged</option>
                                <option value="">Prepared</option>
                            </select>
                        </div>

                        <div className={style.inputProduct} >
                            <input type="number" stock="stock" name="stock" placeholder="Stock"
                                onChange={handleOnChangeFormInput} />
                        </div>

                        <div className={style.btnCard}>
                            <input type="submit" value="Add" onClick={handleOnSubmit} />
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
                                        <input type="checkbox" />
                                    </th>
                                    <th>
                                        IngredientName
                                    </th>

                                </tr>
                                <tr>
                                    <th>
                                        <input type="checkbox" />
                                    </th>
                                    <th>
                                        IngredientName
                                    </th>

                                </tr>
                                <tr>
                                    <th>
                                        <input type="checkbox" />
                                    </th>
                                    <th>
                                        IngredientName
                                    </th>

                                </tr>
                                <tr>
                                    <th>
                                        <input type="checkbox" />
                                    </th>
                                    <th>
                                        IngredientName
                                    </th>

                                </tr>
                                <tr>
                                    <th>
                                        <input type="checkbox" />
                                    </th>
                                    <th>
                                        IngredientName
                                    </th>

                                </tr><tr>
                                    <th>
                                        <input type="checkbox" />
                                    </th>
                                    <th>
                                        IngredientName
                                    </th>

                                </tr><tr>
                                    <th>
                                        <input type="checkbox" />
                                    </th>
                                    <th>
                                        IngredientName
                                    </th>

                                </tr>
                                <tr>
                                    <th>
                                        <input type="checkbox" />
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