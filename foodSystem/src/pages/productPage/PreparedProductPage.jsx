import { SideBarMenu, Search, CardPreparedProduct } from "../../components/index"
import style from "./ProductPage.module.css"

const PreparedProductPage = () => {
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
            <a href="/admin/product"> Prepared Products</a>
            <p>105</p>
          </div>

          <div className={style.info}>
            <a> Package Products</a>
            <p>95</p>
          </div>

          <div className={style.btnCard}>
            <a href="/admin/product/add"> Add product</a>
          </div>
        </div>


        <div className={style.cardsContainer}>
          <CardPreparedProduct />
          <CardPreparedProduct />
          <CardPreparedProduct />
          <CardPreparedProduct />
          <CardPreparedProduct />
          <CardPreparedProduct />
          <CardPreparedProduct />
          <CardPreparedProduct />
          <CardPreparedProduct />
          <CardPreparedProduct />
          <CardPreparedProduct />
          <CardPreparedProduct />
          <CardPreparedProduct />
          <CardPreparedProduct />
          <CardPreparedProduct />
          <CardPreparedProduct />
          <CardPreparedProduct />
          <CardPreparedProduct />
          <CardPreparedProduct />
          <CardPreparedProduct />
        </div>
      </main>
    </>
  )
}

export default PreparedProductPage