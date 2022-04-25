import {useContext} from "react"
import { Link } from "react-router-dom";
import { AuthContext } from "../Contexts/AuthContext";
import {Nav} from "./Styled"
export const Navbar = () => {
  const {auth} = useContext(AuthContext)
  return (
    <Nav className="navbar">
      <Link className="nav-home" to="/">
        Home
      </Link>
      <Link className="nav-list" to="/employees">
        Employee List
      </Link>
      <Link className="nav-admin" to="/admin">
        Admin
      </Link>
      {auth.authStatus ? 
        <Link className="nav-logout" to="/logout">Logout</Link>
          : 
        <Link className="nav-login" to ="/login">Login</Link>
      }
    </Nav>
  );
};
