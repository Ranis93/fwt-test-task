import React, { useEffect, useState } from "react";
import Header from "./components/Header/Header";
import Navigation from "./components/Navigation/Navigation";
import Pagination from "./components/Pagination/Pagination";
import Wrapper from "./components/Wrapper/Wrapper";
import DataContext from "./components/services/Context";
import Service from "./components/services/Service";


const App = () => {
  let service = new Service();
  
  const [dataPaint, setDataPaint] = useState(null);
  const [dataAuth, setDataAuth] = useState(null);
  const [dataLocat, setDataLocat] = useState(null);
  const [filterPic, setFilterPic] = useState([]);
  const [activePage, setActivePage] = useState(0);
  

    useEffect(() => {
      const ptrs = () => {
        return service.getAllPaitings().then((res) => {
          setDataPaint(res);
          setFilterPic(res);
        })        
      }

      const autrs = () => {
        return service.getAllAuthors().then((res) => {
          setDataAuth(res);
        })        
      }

      const loc = () => {
        return service.getAllLocations().then((res) => {
          setDataLocat(res);
        })        
      }
      ptrs();
      autrs();
      loc();
      console.log('hello')
    }, [activePage])


    const onFilteredPic = (data) => {
      setFilterPic(data);
    }

    const getNumPage = (num) => {
      setActivePage(num)
    }

    
    if ((dataPaint !== null) && (dataAuth !== null) && (dataLocat !== null)) {
      return (
        <> 
          <DataContext.Provider value={{dataPaint, dataAuth, dataLocat, filterPic}}>
          <Header/>
          <Navigation onFilteredPic={onFilteredPic}/>
          <Wrapper page={activePage}/>      
          <Pagination getPage={getNumPage}/>
          </DataContext.Provider>
        </>
      );
    }

  
}

export default App;
