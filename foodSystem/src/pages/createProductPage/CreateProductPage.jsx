import style from "./CreateProductPage.module.css"
import { Search, AddProduct } from "../../components/index"
const CreateProductPage = () => {
  return (
    <>
      <main className={style.layoutMain}>
        <Search />
        <div className={style.containerTableCard}>
          <AddProduct />

        </div>
      </main>

    </>
  )
}

export default CreateProductPage