import React from "react";
import Ctxprovider from "./context-config"

const wrapper = (props) => {
    let defaultValue = {
        selectedCatogory: "",
        setSelectedCatogory: () => { }
    }
    return (
        <Ctxprovider.Provider value={defaultValue}>
            {props.children}
        </Ctxprovider.Provider>
    )
}
export default wrapper
