import { SideBarMenu, Search, TableProducts } from "../../components/index"
import style from "./ProductPage.module.css"

const ProductPage = () => {
  return (
    <>
        <main className={style.layoutMain}>
          <Search />
          <TableProducts />
        </main>
    </>
  )
}

export default ProductPage