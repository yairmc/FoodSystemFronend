import { AuthProvider } from "./context/AuthContext";
import { ModalProvider } from "./context/ModalContext";
import AppRouter from "./router/AppRouter";
function App() {

  return (
    <AuthProvider>
      <ModalProvider>
        <AppRouter />
      </ModalProvider>
    </AuthProvider>
  )
}

export default App
