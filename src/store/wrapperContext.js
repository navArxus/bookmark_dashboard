import React, { useState } from "react";
import Ctxprovider from "./context-config"

const Wrapper = (props) => {

    const [showModal,setshowModal] = useState(false)
    const [selcatogory,setselcatogory] = useState("")
    const modalToggler = () => {
        setshowModal(!showModal)
    }
    const TsetSelectedCatogory = (val) => {
        setselcatogory(val)
    }
    let defaultValue = {
        selectedCatogory: selcatogory,
        setSelectedCatogory: TsetSelectedCatogory,
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
