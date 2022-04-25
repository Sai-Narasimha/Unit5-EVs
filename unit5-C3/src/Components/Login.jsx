import axios from 'axios';
import {useContext, useState} from 'react';
import {useNavigate} from 'react-router';
import {AuthContext} from "../Contexts/AuthContext";


export const Login = () => {
  //  use reqres to log user in.
  const [details,setDetails] = useState({});
  const navigate = useNavigate();

  const {handleAuth} = useContext(AuthContext);
  const handleChange = (e)=>{
    const {id,value} = e.target;
    setDetails({...details,[id] : value});

  }
  const handleSubmit = (e)=>{
    e.preventDefault();
    console.log(details);
    axios.post("https://reqres.in/api/login", details).then(({data})=>{
      if(data.token) handleAuth(true);
      navigate(-2)
    })
  }

  return (
    <form className="loginform" onSubmit={(e)=>handleSubmit(e)}>
      <input
        id = 'email'
        onChange={handleChange}
        name="username"
        type="text"
        placeholder="Enter username"
        className="login_username"
      />
      <input
        id = 'password'
        onChange={handleChange}
        name="password"
        type="text"
        placeholder="Enter password"
        className="login_password"
      />
      <input type="submit" value="SIGN IN" className="login_submit" />
    </form>
  );
};
