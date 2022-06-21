import './App.css';
import { useState, useEffect } from 'react';
import Home from './Pages/Home';
import { BrowserRouter, Route, Router, Routes } from 'react-router-dom';
import PropDetailFull from './Pages/PropDetailFull'
import RightSidebar from './Components/RightSidebar';
import Sidebar from './Components/Sidebar';
import Header from './Components/Header';
import OffcanvasTabs from './Components/OffcanvasTabs';
import InputField from './Components/InputField';
import ListItems from './Components/ListItems';
import CollapseItem from './Components/CollapseItem';
import DataGrid2 from './Components/DataGrid2';
import Dashboard from './Pages/Dashboard';
import TableData from './Components/TableData';
import DocumentView from './Components/DocumentView'
import DocumentViewPage from './Pages/DocumentViewPage';
import { connect } from "react-redux";
import Profile from './Pages/Profile';
import Master from './Pages/Master';
import SafSerach from './Pages/SafSerach';
import ToastComponent from './Components/ToastComponent';
import ModalComponent from './Components/ModalComponent';
import FormTest from './Components/testComponents/FormTest';
import InboxDa from './Pages/verificationLevels/dealingAssistant/InboxDa';
import InboxSi from './Pages/verificationLevels/sectionIncharge/InboxSi';
import InboxEo from './Pages/verificationLevels/executiveOfficer/InboxEo';
import BasicTable from './Components/staticData/BasicTable';


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
            <Route path='/table' element={<BasicTable />} />
            {/* <Route path='/toast' element={<ToastComponent />} />
            <Route path='/modal' element={<ModalComponent />} />
            <Route path='/formik' element={<FormTest />} />
            <Route path='/data' element={<DataGrid2 />} /> */}
            <Route path='/inbox-da' element={<InboxDa />} />
            <Route path='/inbox-si' element={<InboxSi />} />
            <Route path='/inbox-eo' element={<InboxEo />} />
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
