import { useState, createContext } from "react";

const ModalContext = createContext();

const ModalProvider = ({ children }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalSelected, setModalSelected] = useState("");

  const handleOnChangeModal = (state) => {
    setIsModalOpen(state);
  };

  /**
   * Selection es el tipo de modal a renderizar
   */
  const handleOnChangeModalSelected = (selection) => {
    setModalSelected(selection);
  };
  return (
    <ModalContext.Provider
      value={{
        isModalOpen,
        modalSelected,
        handleOnChangeModal,
        handleOnChangeModalSelected,
      }}
    >
      {children}
    </ModalContext.Provider>
  );
};

export { ModalProvider };
export default ModalContext;