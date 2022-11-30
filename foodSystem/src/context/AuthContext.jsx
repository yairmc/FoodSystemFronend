import { createContext, useState } from "react"
import { fetchLogin } from "../API/apiAuth"

const AuthContext = createContext();

const AuthProvider = ({ children }) => {

    const [credential, setCredential] = useState({ userName: "", password: "" });
    const changeCredential = (evt) => {
        const { name, value } = evt.target;
        setCredential({ ...credential, [name]: value });
        /**Se hace una copia del obj credential y se asigna el valor a la llave correspondiente */
    }
    const handleLogin = async () => {
        try {
            const result = await fetchLogin(credential);
            let { token } = result;
            return result?.token ? true : false;
        } catch (error) {
            return false;
        }
    }
    return (
        <AuthContext.Provider
            value={{
                user: credential,
                changeCredential,
                handleLogin
            }}
        >
            {children}
        </AuthContext.Provider>
    )
}

export { AuthProvider }
export default AuthContext