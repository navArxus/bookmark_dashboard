import React from "react";

const ctx = React.createContext({
    selectedCatogory : "",
    setSelectedCatogory : ()=> {},
    isModal: "",
    setisModal : () => {}
})

export default ctx