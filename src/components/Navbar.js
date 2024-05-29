import React from 'react'

export default function Navbar(props) {
  return (
  <nav className="navbar bg-body-tertiary container">
    <div className="container-fluid">
      <span className="navbar-brand mb-0 h1">{props.name}</span>
        <div className="form-check form-switch">
            <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault"/>
            <label className="form-check-label" for="flexSwitchCheckDefault">Toggle Switch</label>
        </div>
    </div>
  </nav>
  )
}
