import React from 'react';
import { NavLink, BrowserRouter as Router } from 'react-router-dom';

export default (props: any) => {
  return (
    <>
      <nav style={{ height: "100%", flexBasis: "300px" }}>
        <div className="list-group">
          <NavLink exact activeClassName="active" className="list-group-item list-group-item-action" to="/licensing">Licensing</NavLink>
          <NavLink exact activeClassName="active" className="list-group-item list-group-item-action" to="/users">Users</NavLink>
          <NavLink exact activeClassName="active" className="list-group-item list-group-item-action" to="/project">Project</NavLink>
          <NavLink exact activeClassName="active" className="list-group-item list-group-item-action" to="/automation">Automation</NavLink>
          <NavLink exact activeClassName="active" className="list-group-item list-group-item-action" to="/help">Help</NavLink>
          <a href="#" className="list-group-item list-group-item-action">Logout</a>
        </div>
      </nav>

    </>)
}