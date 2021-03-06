import {Link} from 'react-router-dom';
import {Routes, Route} from 'react-router-dom'
import {useSelector} from "react-redux";
import { Home } from "./components/Home";
import { Login } from "./components/Login";
import { Logout } from "./components/Logout";
import { NewOrder } from "./components/NewOrder";
import { Orders } from "./components/Orders";
import { ProtectedRoute } from "./components/ProtextedRoute";
import './App.css'

function App() {
  const status = useSelector(store=>store.isLoggedIn)

  return (
    <div className="App">
      <div>
        <Link className="nav-home" to="/">
          Home
        </Link>
        {/* Show either login or logout below */}
        {status? 
        <Link className="nav-logout" to = "/logout">Logout</Link>:
        <Link className="nav-login" to = "/login">Login</Link>
        }
      <Routes>
        <Route path = "/" element = {<Home/>}/>
        <Route path = "/login" element = {<Login/>}></Route>
        <Route path = "/logout" element = {<Logout/>}></Route>
        <Route path = "/orders" element = {<ProtectedRoute><Orders/></ProtectedRoute>}/>
        <Route path = "/neworder" element = {<ProtectedRoute><NewOrder/></ProtectedRoute>}/>

      </Routes> 
      </div>

    </div>
  );
}

export default App;
