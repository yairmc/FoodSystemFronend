import { useNavigate } from "react-router-dom";
import style from "./LoginForm.module.css";
import useAuth from "../../hooks/useAuth";
const LoginForm = () => {
  let navigate = useNavigate();
  const { changeCredential, handleLogin } = useAuth();
  const handleOnSubmit = async (evt) => {
    evt.preventDefault();
    const auth = await handleLogin();
    if (auth) {
      navigate("/menu")
    } else {
      console.log("Auth no");
    }
  }
  return (
    <div className={style.loginContainer}>
      <form id="formLogin" onSubmit={handleOnSubmit}>
        <input
          name="userName"
          type="text"
          className={style.loginInput}
          id="usernameInput"
          placeholder="Username"
          onChange={changeCredential}
        />
        <input
          name="password"
          type="password"
          className={style.loginInput}
          id="passwordInput"
          placeholder="Password"
          onChange={changeCredential}
        />
        <input
          type="submit"
          className={style.btnLogIn}
          id="LogIn"
          value="Login"
        />
      </form>
      <div id="messageSection"></div>
      <p className={style.text}>I accept the terms and conditions by creating an <br /> account.</p>
    </div >
  )
}

export default LoginForm