import {useState} from 'react';
import axios from 'axios';
import {useDispatch} from 'react-redux'
import {login} from "../Redux/actions"
import {useNavigate} from 'react-router-dom'
export const Login = () => {
  const navigate = useNavigate();
  const [det, setDet] = useState({})
  const dispatch = useDispatch();
  const handleChange = (e) =>{
    const {value, className} = e.target;
    setDet({...det, [className] : value})
  }

  const handleSubmit = (e)=>{
    e.preventDefault();
    axios.get(`http://localhost:8080/users?username=${det.username}&pass=${det.password}`).then(({data})=>{
      dispatch(login(data[0].role))
      data[0].role==="admin"?navigate("/orders"):navigate("/neworders");
      // console.log(data[0])
    })
  }
  return (
    <div>
      <form onSubmit={(e)=>{handleSubmit(e)}}>
      <input
        className="username"
        type="text"
        name="username"
        placeholder="Enter Username"
        onChange={handleChange}
      />
      <input
        className="password"
        type="password"
        name="password"
        placeholder="Enter password"
        onChange = {handleChange}
      />
      {/* On this button click make network req to find user with same username and password */}
      {/* get his role, if role is `admin` take him to `/orders` page otherwise take him to `/neworder` */}
      <button className="submit">Login</button>
      </form>
    </div>
  );
};
