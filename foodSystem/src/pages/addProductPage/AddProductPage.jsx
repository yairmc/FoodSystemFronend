import style from "./AddProductPage.module.css"
import { AddProduct } from "../../components/index"

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