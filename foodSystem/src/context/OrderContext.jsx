import { createContext, useState } from "react"
import { fetchAddOrder } from "../API/apiOrders";

const OrderContext = createContext();
export const OrderProvider = ({ children }) => {
  const [order, setOrder] = useState({});

  const addOrder = async () => {
    try {
      const result = await fetchAddOrder();
      setOrder(result);
    } catch (error) {
      console.log(error);
    }
  }
  return (
    <OrderContext.Provider
      value={{
        order,
        addOrder
      }}
    >
      {children}
    </OrderContext.Provider>
  )
}

export { OrderProvider }
export default OrderContext