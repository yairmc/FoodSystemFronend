
import style from "./TableUser.module.css";
import IMG_DELETE from "/img/deleteIcon.svg";
import IMG_UPDATE from "/img/editIcon.svg";

const TableUsers = () => {
     return (
        <>
            <table className={style.containerTable}>
                <thead className={style.headTable}>
                    <tr>
                        <th className={style.titleTable}>
                            Username
                        </th>
                        <th className={style.titleTable}>
                            Name
                        </th>
                        <th className={style.titleTable}>
                            Role
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
                            DianaLM
                        </th>
                        <th>
                            Diana Laura Medina
                        </th>
                        <th>
                            Admin
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
                            TorroSoft
                        </th>
                        <th>
                            Hector Gerardo Zapata Vazquez
                        </th>
                        <th>
                            Kitchen
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
                            CiulogMig
                        </th>
                        <th>
                            Miguel Ciulog
                        </th>
                        <th>
                            Kitchen
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
                            YahirMtz
                        </th>
                        <th>
                            Yahir Martinez
                        </th>
                        <th>
                            Waiter
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
                            OrlandCG
                        </th>
                        <th>
                            Orlando Camacho Gamez
                        </th>
                        <th>
                            Waiter
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
                            ManuelVzla
                        </th>
                        <th>
                            Manuel Valenzuela
                        </th>
                        <th>
                            Waiter
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
        </>
    )
}

export default TableUsers