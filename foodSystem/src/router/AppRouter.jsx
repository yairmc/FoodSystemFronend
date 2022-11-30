import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { LoginPage, MenuPage } from "../pages"

const AppRouter = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<LoginPage />} />
                <Route path="/menu" element={<MenuPage />}></Route>
            </Routes>
        </Router>
    )
}

export default AppRouter