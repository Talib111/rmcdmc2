//////////////////////////////////////////////////////////////////////////////////////
//    Author - Talib Hussain
//    Version - 1.0
//    Project - rmcdmc
//    Component  - RawLink
//    DESCRIPTION - RawLink Component
//////////////////////////////////////////////////////////////////////////////////////

import { Link } from 'react-router-dom'

function RawLink(props) {
  return (
   <>
   {/* <Link to={props.path}>{props.title}</Link> */}
  <Link to={{pathname:'#'}}><li style={{'textDecoration':'none','color':'white','fontSize':'13px','fontWeight':'400','paddingLeft':'10px'}} href={props.path}>{props.title}</li></Link>
   
   </>
  )
}

export default RawLink
/**
 * Exported to :
 * 1. SidebarLink Component
 */