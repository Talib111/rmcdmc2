//////////////////////////////////////////////////////////////////////////////////////
//    Author - Talib Hussain
//    Version - 1.0
//    Project - rmcdmc
//    Component  - TopHeaderNav
//    DESCRIPTION - TopHeaderNav Component of header 
//////////////////////////////////////////////////////////////////////////////////////
import React, { useState } from 'react'
import { GiHamburgerMenu } from 'react-icons/gi'
import { connect } from "react-redux";



function NavigationButton(props) {

    const [navClose, setnavClose] = useState(false)

    const navToggle = () => {
        // setnavClose(true)
       
        if(props.navCloseStatus==false){
            props.NAV_CLOSE()
        }else{
            props.NAV_OPEN()

        }
        console.log(props.navCloseStatus)
    }
    return (
        <>
            <div className="grid grid-cols-12 place-items-center h-full">
                <div className='cursor-pointer' onClick={navToggle}><GiHamburgerMenu color='white' size={16} /></div>
                <div className='col-span-10'><h4 className='text-white font-bold text-lg'>Ranchi Municipal Corporation</h4></div>
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


// export default NavigationButton
export default connect(mapStateToProps, mapDispatchToProps)(NavigationButton);
/**
 * Exported to :
 * 1. TopHeaderNav Component
 */