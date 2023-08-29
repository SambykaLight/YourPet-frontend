import React, { useContext, useState } from "react";

const ContextModal = React.createContext()

export const useModalContext = () => {
    return useContext(ContextModal)
}

const Context = ({children}) => {
    const [showModal, setShowModal] = useState(false);
    return (
        <ContextModal.Provider value={{toggleValue: showModal, toggle: setShowModal }}>
            
            {children}

        </ContextModal.Provider>
    )
}

export default Context