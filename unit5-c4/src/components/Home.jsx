import {Link} from 'react-router-dom'
// import {Login} from "./Login"
export const Home = () => {
  return (
    <div className="homepage">
      <div
        style = {{
          display : "flex",
          gap : "5px"
        }}
      >
       <Link to = "/">Home</Link>
        <Link to = "/login">Login</Link></div>
      Welcome to Laptop service center. Please <span>Login</span> to continue
    </div>
  );
};
