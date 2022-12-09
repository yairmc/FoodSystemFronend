import style from "./CardUser.module.css"

const CardUser = () => {
    return (
        <div className={style.card}>
          <form action="" className={style.form}>
            <h1>User</h1>
            <div className={style.inputForm} >
              <input type="text" nombre="nombre" name="nameInput" placeholder="Name" />
            </div>
            <div className={style.inputForm} >
              <input type="text" nombre="usario" name="usernameInput" placeholder="Username" />
            </div>
            <div className={style.inputForm} >
              <input type="password" nombre="password" name="passwordInput" placeholder="Password" />
            </div>
            <select name="" id="" className={style.selectStock}>
          ||||<option value="">Admin</option>x
          ||||<option value="">Waiter</option>
          ||||<option value="">Kitchen</option>
        |||||</select>
            <div className={style.btnCard}>
              <input type="submit" value="Add" />
            </div>
          </form>
        </div>
      )
}

export default CardUser