//////////////////////////////////////////////////////////////////////////////////////
//    Author - Talib Hussain
//    Date - 
//    Version - 1.0
//    Revison - 1
//    Project - rmcdmc
//    Component  - Sidebar
//    DESCRIPTION - This is toggle sidebar component.
//////////////////////////////////////////////////////////////////////////////////////
import React, { useEffect, useState } from 'react'
// import 'bootstrap/dist/css/bootstrap.min.css'
import ImageCard from './ImageCard';
import SidebarLink from './SidebarLink';
import { connect } from "react-redux";


function Sidebar(props) {

    const [navCloseStatus, setnavCloseStatus] = useState('')
    useEffect(() => {
      setnavCloseStatus(props.navCloseStatus)
  
    }, [props.navCloseStatus])

    return (
        <>
            <div className="shadow-lg px-0 bg-white h-full pb-12 overflow-hidden absolute top-16 left-0" style={navCloseStatus == true ? { 'width': '0', 'paddingRight': '0', 'transition': '0.4s','zIndex':'1000' } : { 'width': '250px', 'paddingRight': '2px', 'transition': '0.4s','zIndex':'1000' }}>
                <div className='py-4' >
                    <ImageCard />
                </div>
                <ul className="px-3 list-none" >
                   <SidebarLink title="Inbox" />
                   <SidebarLink title="Dashboard" />
                   <SidebarLink title="Prop-dtl" />
                   <SidebarLink title="Menu Permission" />
                   <SidebarLink title="User" />
                   <SidebarLink title="Master" />
                   <SidebarLink title="Property" />
                   <SidebarLink title="Water" />
                   <SidebarLink title="Trade" />
                   <SidebarLink title="Accounts" />
                   <SidebarLink title="All Module Report" />



                </ul>
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
  export default connect(mapStateToProps, mapDispatchToProps)(Sidebar);

/**
 * Exported to :
 * 1. Home Page
 * 
 */