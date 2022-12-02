import style from "./IngredientPage.module.css"
import { Search, TableIngredients, CardIngredient, InfoIngredient } from "../../components/index"
const IngredientPage = () => {
  return (
    <>
      <main className={style.layoutMain}>
        <Search />
        <div className={style.containerTableCard}>
          <TableIngredients />
          <div className={style.formSection}>
            <CardIngredient />
            <div className={style.infoSection}>
              <InfoIngredient />
            </div>
          </div>

        </div>
      </main>

    </>
  )
}

export default IngredientPage