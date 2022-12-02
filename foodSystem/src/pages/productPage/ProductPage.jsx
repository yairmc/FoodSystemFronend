import { SideBarMenu, Search, TableProducts } from "../../components/index"
import style from "./ProductPage.module.css"

const ProductPage = () => {
  return (
    <>
      <div className={style.layout}>
        <SideBarMenu />
        <main className={style.layoutMain}>
          <Search />
          <TableProducts />
        </main>

      </div>
    </>
  )
}

export default ProductPage