import { Link } from "react-router-dom";


const Header = () =>{

    return (
    <div className="header">
        <div className ="logo-conatiner">
          <img className="logo" alt="logo"
          src="https://marketplace.canva.com/EAFszdYJfvM/1/0/1600w/canva-brown-simple-icon-food-logo-2M8uaWgGUPg.jpg"/>
        </div>
        <div className="nav-items">
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/about">About Us</Link></li>
              <li><Link to="/contact">Contact</Link></li>
              <li> <Link to="/cart">Cart</Link></li>
            </ul>
      </div>
      </div>
    );
  };
export default Header;  