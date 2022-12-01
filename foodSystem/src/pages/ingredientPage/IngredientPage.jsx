import style from "./IngredientPage.module.css"
import { SideBarMenu, Search, TableIngredients } from "../../components/index"
const IngredientPage = () => {
  return (
    <>
      <div className={style.layout}>
        <SideBarMenu />
        <main className={style.layoutMain}>
          <Search />
          <TableIngredients />
        </main>

      </div>
    </>
  )
}

export default IngredientPage