import { AuthProvider } from "./context/AuthContext";
import { ModalProvider } from "./context/ModalContext";
import { ProductProvider } from "./context/ProductContext";
import { IngredientProvider } from "./context/IngredientContext";
import AppRouter from "./router/AppRouter";
function App() {

  return (
    <AuthProvider>
      <ProductProvider>
        <ModalProvider>
          <IngredientProvider>
            <AppRouter />
          </IngredientProvider>
        </ModalProvider>
      </ProductProvider>
    </AuthProvider>
  )
}

export default App
