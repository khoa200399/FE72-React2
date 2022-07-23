import React, { Component } from 'react'

export class Header extends Component {
  render() {
    return (
      <div >
        <h1 className='py-2' style={{color:'white', backgroundColor:'rgba(0,0,0,0.3)', position:'relative',zIndex:'100'}}>TRY GLASSES APP ONLINE</h1>
      </div>
    )
  }
}

export default Header