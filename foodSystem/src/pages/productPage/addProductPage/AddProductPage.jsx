import { SideBarMenu, Search, AddProduct } from "../../../components/index"
import style from "./AddProductPage.module.css"

const AddProductPage = () => {
  return (
    <>
      <main className={style.layoutMain}>
        <AddProduct/>
      </main>
    </>
  )
}

export default AddProductPage