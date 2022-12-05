import style from "./RolePage.module.css";
import {TableRole, CardRole} from "../../components";
const RolePage = () => {
    return (
        <div className={style.mainContainer}>
           
            <div className={style.roleSection}>
                <TableRole/>
                <CardRole/>
            </div>
        </div>
    )
}

export default RolePage