// import {Navigate} from "react-router"
import {useState, useEffect} from "react"
import {useNavigate} from "react-router"
import axios from "axios";
import {Cards} from "./Styled"
export const EmployeeList = () => {
const navigate = useNavigate()
  const [employees,setEmployees] = useState([])

  useEffect(()=>{
    axios.get("http://localhost:8080/employee").then(({data}) =>{

      setEmployees(data);
      
    })
    
  },[])
  return (
    <Cards className="list_container">
      {/* On clicking this card anywhere, user goes to user details */}
     {employees.map(e => <div className="employee_card" key={e.id} onClick={()=>{navigate(`/employees/${e.id}`)}}>
        <img className="employee_image" src = {e.image} />
        <span className="employee_name">{e.employee_name}</span>
        <span className="employee_title">{e.title}</span>
      </div>
     )}
    </Cards>
  );
};
