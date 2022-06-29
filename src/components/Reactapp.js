import React from 'react'
import './Reactapp.css';
import ComponentHeader from './ComponentHeader';
import Body from './Body';
class Reactapp extends React.Component{
  render(){
  return (
    <div id='app'>
      <span>React-app</span>
      <br />
      <div id='content'>
        <div id='header'>
      <ComponentHeader />
      </div>
      <div id='body'>
      <Body />
      </div>
      </div>
    </div>
  )
  }
}

export default Reactapp