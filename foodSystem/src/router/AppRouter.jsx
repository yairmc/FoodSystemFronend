import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { LoginPage, MenuPage, IngredientPage, AdminMasterPage, ProductPage, AddProductPage } from "../pages"

const AppRouter = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<LoginPage />} />
                <Route path="/menu" element={<MenuPage />} />
                <Route path="/admin" element={<AdminMasterPage />}>
                    <Route path="ingredient" element={<IngredientPage />} />
                    <Route path="product" element={<ProductPage />} />
                    <Route path="product/add" element={<AddProductPage />} />
                </Route>
            </Routes>
        </Router>
    )
}

export default AppRouter