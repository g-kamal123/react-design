import React from 'react'
import LeftbodyCompo1 from './LeftbodyCompo1'
import LeftbodyCompo2 from './LeftbodyCompo2'

function Leftbody() {
  return (
    <div style={{border:'1px solid red',width:'45%',position:'relative'}}>Left
    <LeftbodyCompo1 />
    <LeftbodyCompo2 />
    </div>
  )
}

export default Leftbody