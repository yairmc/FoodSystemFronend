import { LoginForm } from "../../components";
import IMG_PIZZA from "/img/pizza.png";
import style from "./LoginPage.module.css";
const LoginPage = () => {
    return (
        <>
            <div className={style.container}>
                <div className={style.welcome}>
                    <div className={style.headerContent}>
                        <header className={style.headerLayout}>
                            <div className={style.headerLogin}>
                                <p> FOODSYSTEM</p>
                            </div>
                        </header>
                        <p className={style.welcomeText}>Welcome to <span>Food System</span></p>
                        <p className={style.welcomeParagraph}>
                            We are glad to see you here, FoodSystem
                            will help you to manage your restaurant in
                            an easy and simple way. </p>
                    </div>
                    <img className={style.imgPizza} src={IMG_PIZZA} alt="Pizza" />
                </div>

                <LoginForm />
            </div>
        </>
    )
}

export default LoginPage