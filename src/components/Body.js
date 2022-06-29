import React from 'react'
import Leftbody from './Leftbody'
import Rightbody from './Rightbody'

class Body extends React.Component{
render(){
  return (
    <div style={{display:'flex'}}>
        <Leftbody />
        <Rightbody />
    </div>
  )
}
}

export default Body