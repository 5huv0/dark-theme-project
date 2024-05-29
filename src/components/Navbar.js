import React from 'react'


export default function Navbar(props) {
  return (
  <nav className={`navbar bg-body-${props.showDark} container`}>
    <div className="container-fluid">
      <span className="navbar-brand mb-0 h1">{props.name}</span>
        <div className="form-check form-switch">
            <input className="form-check-input" onClick={props.showDark} type="checkbox" role="switch" id="flexSwitchCheckDefault"/>
            <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Dark</label>
        </div>
        {/* <div className="form-check form-switch">
            <input className="form-check-input" onClick={} type="checkbox" role="switch" id="flexSwitchCheckDefault"/>
            <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Light</label>
        </div> */}
        <div className="form-check form-switch">
            <input className="form-check-input" onClick={props.showGreen} type="checkbox" role="switch" id="flexSwitchCheckDefault"/>
            <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Green</label>
        </div>
        <div className="form-check form-switch">
            <input className="form-check-input" onClick={props.showBlue} type="checkbox" role="switch" id="flexSwitchCheckDefault"/>
            <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Blue</label>
        </div>
        <div className="form-check form-switch">
            <input className="form-check-input" onClick={props.showGrey} type="checkbox" role="switch" id="flexSwitchCheckDefault"/>
            <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Grey</label>
        </div>
    </div>
  </nav>
  )
}
