import React from "react";


const DataContext = React.createContext({
    dataPaint : {},
    dataAuth: {},
    dataLocat: {},
    filterPic: {}
})

export default DataContext;