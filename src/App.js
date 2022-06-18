import './App.css';
import { useState, useEffect } from 'react';
import Home from './Pages/Home';
import { BrowserRouter, Route, Router, Routes } from 'react-router-dom';
import PropDetailFull from './Pages/PropDetailFull'
import RightSidebar from './Components/RightSidebar';
import Sidebar from './Components/Sidebar';
import Header from './Components/Header';
import BasicGrid from './Components/BasicGrid';
import OffcanvasTabs from './Components/OffcanvasTabs';
import InputField from './Components/InputField';
import ListItems from './Components/ListItems';
import CollapseItem from './Components/CollapseItem';
import ChartTest from './Components/ChartTest';
import DataGrid2 from './Components/DataGrid2';
import Dashboard from './Pages/Dashboard';
import TableData from './Components/TableData';
import DocumentView from './Components/DocumentView'
import DocumentViewPage from './Pages/DocumentViewPage';
import { connect } from "react-redux";
import Profile from './Pages/Profile';
import Master from './Pages/Master';
import SafSerach from './Pages/SafSerach';


function App(props) {
  const [boxWidth, setBoxWidth] = useState({width:'md:w-4/5',margin:'md:ml-64'})
  useEffect(() => {
   if(props.navOriginalCloseStatus==true){
     setBoxWidth({width:'md:w-full',margin:'md:ml-0'})
     console.log(boxWidth.width," ",boxWidth.margin)
   }else{
    setBoxWidth({width:'md:w-4/5',margin:'md:ml-64'})
    console.log(boxWidth.width," ",boxWidth.margin)

   }
  
   
  }, [props.navOriginalCloseStatus])
  
  return (
    <>
      {/* <Home /> */}
      {/* <BasicGrid/> */}
      <BrowserRouter>
        <Header />
        <Sidebar />
        <div className={"sm:w-full transition-all pl-12 "+boxWidth.width+ " sm:ml-0 "+boxWidth.margin +" mt-2"}>
        {/* <div className={"sm:w-full "+"md:w-4/5"+ " sm:ml-0 "+"md:ml-64" +" mt-2"}> */}
          <Routes>
            <Route path='/' element={<DataGrid2 />} />
            <Route path='/prop-dtl' element={<PropDetailFull />} />
            <Route path='/dashboard' element={<Dashboard />} />
            <Route path='/master' element={<Master />} />
            <Route path='/doc-view' element={<DocumentViewPage />} />
            <Route path='/profile' element={<Profile />} />
            <Route path='/saf-search' element={<SafSerach />} />
          </Routes>
        </div>
        <RightSidebar />
      </BrowserRouter>
    </>
  );
}

//for redux
const mapStateToProps = (state) => {
  return {
    navCloseStatus: state.navCloseStatus,
    navOriginalCloseStatus: state.navOriginalCloseStatus
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    // buyCake: () => dispatch(buyCake())
    NAV_OPEN: (data2) => dispatch({ type: "NAV_OPEN" }),
    NAV_CLOSE: (data3) => dispatch({ type: "NAV_CLOSE" })
  };
};
// export default Home // EXPORTING HOME COMPONENT
export default connect(mapStateToProps, mapDispatchToProps)(App);
// export default App;
