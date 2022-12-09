import { SideBarMenu, Search, CardProductNotReady } from "../../components/index"
import style from "./ProductPage.module.css"

const ProductPage = () => {
  return (
    <>
      <main className={style.layoutMain}>

        <div className={style.header}>
          <Search />

          <div className={style.info}>
            <p> All Products</p>
            <p>200</p>
          </div>

          <div className={style.info}>
            <a> Prepared Products</a>
            <p>105</p>
          </div>

          <div className={style.info}>
            <a href="/admin/preparedProduct"> Package Products</a>
            <p>95</p>
          </div>
          

          <div className={style.btnCard}>
            <a href="/admin/product/add"> Add product</a>
          </div>
        </div>


        <div className={style.cardsContainer}>
          <CardProductNotReady />
          <CardProductNotReady />
          <CardProductNotReady />
          <CardProductNotReady />
          <CardProductNotReady />
          <CardProductNotReady />
          <CardProductNotReady />
          <CardProductNotReady />
          <CardProductNotReady />
          <CardProductNotReady />
          <CardProductNotReady />
          <CardProductNotReady />
          <CardProductNotReady />
          <CardProductNotReady />
          <CardProductNotReady />
          <CardProductNotReady />
          <CardProductNotReady />
          <CardProductNotReady />
          <CardProductNotReady />
          <CardProductNotReady />
        </div>
      </main>
    </>
  )
}

export default ProductPage