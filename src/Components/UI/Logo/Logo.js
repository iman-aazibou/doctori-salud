import './Logo.scss'

import iSaludLogo from "../../Images/header-images/doctori-logo-white.svg";

const Logo = () => {
  return (
    <div className="logo-container">
      <img className="logo" src={iSaludLogo} alt="iSalud logo"></img>
    </div>
  );
};

export default Logo;