import React, { useState } from "react";
import Ctxprovider from "./context-config"

const Wrapper = (props) => {

    const [showModal,setshowModal] = useState(false)
    const modalToggler = () => {
        setshowModal(!showModal)
    }
    let defaultValue = {
        selectedCatogory: "",
        setSelectedCatogory: () => { },
        isModal: showModal,
        setisModal: modalToggler
    }
    return (
        <Ctxprovider.Provider value={defaultValue}>
            {props.children}
        </Ctxprovider.Provider>
    )
}
export default Wrapper
