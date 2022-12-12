import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import useProducts from "../../hooks/useProducts";
import { Search, CardProductNotReady } from "../../components/index";
import style from "./ProductPage.module.css";


const ProductPage = () => {
  const {
    getProducts,
    products,
    setProductAction,
    setProduct,
    setProductSelected,
    productsFilter,
    setProductsFilter
  } = useProducts();
  const [productName, setProductName] = useState("");

  let nagivate = useNavigate();

  const handleOnChangeProductName = (e) => {
    setProductName(e.target.value);
  }
  const handleOnFilterProduct = (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      if (productName === "") {
        setProductsFilter([...products]);
      } else {
        const newProducts = productsFilter.filter(product =>
          product.name.trim().toLowerCase().includes(productName.trim().toLowerCase()));
        setProductsFilter(newProducts)
      }
    }
  }
  const handleOnClick = () => {
    setProductSelected(null);
    setProduct({
      name: "",
      basePrice: "",
      cost: "",
      availability: true,
      taxes: "",
      type: "Packaged",
      stock: ""
    })
    setProductAction({ action: "add", id: -1 });
    nagivate("/admin/product/add");
  }
  useEffect(() => {
    getProducts();
  }, []);

  return (
    <>
      <main className={style.layoutMain}>

        <div className={style.header}>
          <Search
            value={productName}
            filterFunc={handleOnFilterProduct}
            onChangeFunc={handleOnChangeProductName}
          />

          <div className={style.info}>
            <p> All Products</p>
            <p>{products.length}</p>
          </div>

          <div className={style.info}>
            <a> Prepared Products</a>
            <p>0</p>
          </div>

          <div className={style.info}>
            <Link to={"/admin/preparedProduct"}> Package Products</Link>
            <p>{products.length}</p>
          </div>

          <div className={style.btnCard}>
            <button onClick={handleOnClick}>
              Add Product
            </button>

          </div>
        </div>

        <div className={style.cardsContainer}>
          {
            productsFilter.map((product, i) => (
              <CardProductNotReady
                key={i}
                product={product}
              />
            ))
          }
        </div>
      </main>
    </>
  )
}

export default ProductPage