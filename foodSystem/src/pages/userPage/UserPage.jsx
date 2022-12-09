import style from "./UserPage.module.css"
import { Search, TableUsers, CardUser, InfoUser } from "../../components/index"

const UserPage = () => {
  return (
    <>
      <main className={style.layoutMain}>
        <Search />
        <div className={style.containerTableCard}>
          <TableUsers />
          <div className={style.formSection}>
            <CardUser />
            <div className={style.infoSection}>
              <InfoUser />
            </div>
          </div>

        </div>
      </main>
    </>
  )
}

export default UserPage