import { AuthProvider } from "./context/AuthContext";
import { ModalProvider } from "./context/ModalContext";
import { ProductProvider } from "./context/ProductContext";
import AppRouter from "./router/AppRouter";
function App() {

  return (
    <AuthProvider>
      <ProductProvider>
        <ModalProvider>
          <AppRouter />
        </ModalProvider>
      </ProductProvider>
    </AuthProvider>
  )
}

export default App
