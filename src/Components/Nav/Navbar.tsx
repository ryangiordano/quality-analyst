import React from 'react';
import { NavLink, BrowserRouter as Router } from 'react-router-dom';

export default (props: any) => {
  return (
    <>
        <nav className="navbar navbar-expand-lg navbar-dark bg-blue">
          <a className="navbar-brand" href="#">Quality Analyst</a>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarColor03" aria-controls="navbarColor03" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarColor03">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item active">
                <NavLink activeClassName="active" className="nav-link" to="/">Home</NavLink>

              </li>
              <li className="nav-item">
                <NavLink activeClassName="active" className="nav-link" to="/menu-1">Menu1</NavLink>

              </li>
              <li className="nav-item">
                <NavLink activeClassName="active" className="nav-link" to="/menu-2">Menu 1</NavLink>

              </li>
              <li className="nav-item">
                <NavLink activeClassName="active" className="nav-link" to="/about">About</NavLink>

              </li>
              <li className="nav-item">
                <NavLink activeClassName="active" className="nav-link" to="/debug">Debug</NavLink>

              </li>

            </ul>
          </div>
        </nav>

    </>)
}