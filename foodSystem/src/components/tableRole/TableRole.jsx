import style from "./TableRole.module.css";
import IMG_DELETE from "/img/deleteIcon.svg";
import IMG_UPDATE from "/img/editIcon.svg";

const TableRole = () => {
  return (

    <table className={style.containerTable}>
      <thead className={style.headTable}>
        <tr>
          <th className={style.titleTable}>
            Role
          </th>
          <th className={style.titleTable}>
            Employees
          </th>
          <th className={style.titleTable}>
            Edit
          </th>
          <th className={style.titleTable}>
            Delete
          </th>
        </tr>

      </thead>
      <tbody className={style.bodyTable}>
        <tr>
          <th>
            Admin
          </th>
          <th>
            01
          </th>
          <th>
            <img src={IMG_UPDATE} alt="" />
          </th>
          <th>
            <img src={IMG_DELETE} alt="" />
          </th>
        </tr>
        <tr>
          <th>
            Waiter
          </th>
          <th>
            07
          </th>
          <th>
            <img src={IMG_UPDATE} alt="" />
          </th>
          <th>
            <img src={IMG_DELETE} alt="" />
          </th>
        </tr>
        <tr>
          <th>
            Kitchen
          </th>
          <th>
            09
          </th>
          <th>
            <img src={IMG_UPDATE} alt="" />
          </th>
          <th>
            <img src={IMG_DELETE} alt="" />
          </th>
        </tr>
      </tbody>

    </table>

  )
}

export default TableRole