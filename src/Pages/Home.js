//////////////////////////////////////////////////////////////////////////////////////
//    Author - Talib Hussain
//    Version - 1.0
//    Project - rmcdmc
//    Component  - Home
//    DESCRIPTION - This is Home Component which has a Home.
//////////////////////////////////////////////////////////////////////////////////////

import React,{useState,useEffect} from 'react'                       // Importing React library
import Login from '../Components/Login'         // Importing Login Component
// import 'bootstrap/dist/css/bootstrap.min.css'   // Importing bootstrap css file
import Sidebar from '../Components/Sidebar'     // Importing Sidebar component
import Header from '../Components/Header'
import HomeCard from '../Components/HomeCard'
import { connect } from "react-redux";

// HOME FUNCTION
function Home(props) {
  const [navCloseStatus, setnavCloseStatus] = useState('')
  useEffect(() => {
    setnavCloseStatus(props.navCloseStatus)
  
  }, [props.navCloseStatus])
  
  return (
    <>
      <Header />
      <div className='sm:gap-0 sm:block md:grid md:grid-cols-12 md:gap-4 mt-12 h-full relative -top-52'>
        <div className="xs:hidden md:visible md:col-span-0 overflow-hidden bg-red-600" style={navCloseStatus==true?{'width':'0','paddingRight':'0','transition':'1s'}:{'width':'auto','paddingRight':'2px','transition':'1s'}}><Sidebar /></div>
        <div className="sm:w-full md:col-start-3 md:col-span-10 md:pr-6 md:pl-2 "><HomeCard /></div>
      </div>
    </>
  )
}

//for redux
const mapStateToProps = (state) => {
  return {
      navCloseStatus: state.navCloseStatus
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    // buyCake: () => dispatch(buyCake())
    NAV_OPEN: (data2) => dispatch({ type: "NAV_OPEN"}),
    NAV_CLOSE: (data3) => dispatch({ type: "NAV_CLOSE" })
  };
};
// export default Home // EXPORTING HOME COMPONENT
export default connect(mapStateToProps, mapDispatchToProps)(Home);

/**
 * Exported to :
 * 1. App 
 */