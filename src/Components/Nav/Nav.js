import React from "react";

import './Nav.scss'

const Nav = () => {
  return (
    <React.Fragment>
      <div className="nav">
        <ul>
          <li>Seguros</li>
          <li>Móvil e Internet</li>
          <li>Luz y Gas</li>
        </ul>
      </div>
    </React.Fragment>
  );
};

export default Nav;
