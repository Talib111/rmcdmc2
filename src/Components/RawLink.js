//////////////////////////////////////////////////////////////////////////////////////
//    Author - Talib Hussain
//    Version - 1.0
//    Project - rmcdmc
//    Component  - RawLink
//    DESCRIPTION - RawLink Component
//////////////////////////////////////////////////////////////////////////////////////

import { Link, NavLink } from 'react-router-dom'

function RawLink(props) {
  return (
    <>
      {/* <Link to={props.path}>{props.title}</Link> */}
      <NavLink to={{ pathname: props.path }}><li style={{ 'textDecoration': 'none', 'fontSize': '13px', 'fontWeight': '400', 'paddingLeft': '10px' }} href={props.path}>{props.title}</li></NavLink>
     
    </>
  )
}

export default RawLink
/**
 * Exported to :
 * 1. SidebarLink Component
 */