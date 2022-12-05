import style from "./Cmbx.module.css";

const Cmbx = () => {
    return (
        <div>
            <select name="" id="" className={style.selectStock}>
                <option value="">All Orders</option>
                <option value="">On Hold</option>
                <option value="">Ready to Serve</option>
                <option value="">Paid Out</option>
                <option value="">Canceled</option>
            </select>
        </div>
    )
}

export default Cmbx