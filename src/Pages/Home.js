//////////////////////////////////////////////////////////////////////////////////////
//    Author - Talib Hussain
//    Version - 1.0
//    Project - rmcdmc
//    Component  - Home
//    DESCRIPTION - This is Home Component which has a Home.
//////////////////////////////////////////////////////////////////////////////////////

import React, { useState, useEffect } from 'react'                       // Importing React library
import Login from '../Components/Login'         // Importing Login Component
// import 'bootstrap/dist/css/bootstrap.min.css'   // Importing bootstrap css file
import Sidebar from '../Components/Sidebar'     // Importing Sidebar component
import Header from '../Components/Header'
import HomeCard from '../Components/HomeCard'
import { connect } from "react-redux";
import RightSidebar from '../Components/RightSidebar'
import BasicDetailsCard from '../Components/BasicDetailsCard'
import DataGrid2 from '../Components/DataGrid2'

// HOME FUNCTION
function Home(props) {
  const [navCloseStatus, setnavCloseStatus] = useState('')
  useEffect(() => {
    setnavCloseStatus(props.navCloseStatus)

  }, [props.navCloseStatus])

  return (
    <>
      <div className="grid grid-cols-12 md:gap-4 mt-12 h-full relative -top-52">
        <div className="xs:col-span-12 md:col-start-3 md:col-span-10 md:pr-6 md:pl-2 ">
          <HomeCard />
        {/* <DataGrid2/> */}
        {/* <MiSidebar/> */}
        </div>
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
    NAV_OPEN: (data2) => dispatch({ type: "NAV_OPEN" }),
    NAV_CLOSE: (data3) => dispatch({ type: "NAV_CLOSE" })
  };
};
// export default Home // EXPORTING HOME COMPONENT
export default connect(mapStateToProps, mapDispatchToProps)(Home);

/**
 * Exported to :
 * 1. App 
 */