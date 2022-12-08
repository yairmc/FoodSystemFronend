import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { LoginPage, MenuPage, IngredientPage, AdminMasterPage, ProductPage, AddProductPage, OrderPage, RolePage, CreateOrderPage, UserPage, CreateProductPage } from "../pages"

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
                    <Route path="order" element={<OrderPage />} />
                    <Route path="role" element={<RolePage/>} />
                    <Route path="order/add" element={<CreateOrderPage/>} />
                    <Route path="user" element={<UserPage/>} />
                    <Route path="product/add" element={<CreateProductPage/>}/>
                </Route>
            </Routes>
        </Router>
    )
}

export default AppRouter