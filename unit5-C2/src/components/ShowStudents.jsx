import {useState, useEffect} from 'react';
// import "./App.css"
import axios from 'axios';
export const ShowStudents = () => {
  const [stdData,setStdData] = useState([]);


  useEffect(() => {
    getStdData();
  },[]);


  const handleChange = (e) => {
    setStdData({
      ...stdData,
      [e.target.name] : e.target.value
    })
  }
  const getStdData = () =>{
    axios.get("http://localhost:8080/students").then((res) =>{
      setStdData(res.data);
      console.log(res.data);
    })
  }
  const handleSort = ({sortby,sortorder}) =>{
    if(sortby == "gender"){
      if(sortorder == "asc")setStdData([...stdData.sort((a,b)=>a.gender>b.gender?1:-1)])
      else setStdData([...stdData.sort((a,b)=>a.first_name<b.first_name?1:-1)])
    }
    else if(sortby === "first_name"){
      if(sortorder == "asc")setStdData([...stdData.sort((a,b)=>a.first_name>b.first_name?1:-1)])
      else setStdData([...stdData.sort((a,b)=>a.first_name<b.first_name?1 :-1)])
    }
    else if(sortby === "age"){
      if(sortorder == "asc")setStdData([...stdData.sort((a,b)=>a.age>b.age?1:-1)])
      else(setStdData([...stdData.sort((a,b)=>b.age-a.age)]))
    }
    else if(sortby === "tenth_score"){
      if(sortorder == "asc")setStdData([...stdData.sort((a,b)=>a.tenth_score-b.tenth_score)])
      else(setStdData([...stdData.sort((a,b)=>b.tenth_score-a.tenth_score)]))
    }
    else if(sortby === "twelth_score"){
      if(sortorder == "asc")setStdData([...stdData.sort((a,b)=>a.twelth_score-b.twelth_score)])
      else(setStdData([...stdData.sort((a,b)=>b.twelth_score-a.twelth_score)]))
    }
  }
  return (
    <div>
      <div className="controls">
        <div>
          Sort By:{" "}
          <select
            className="sortby"
            // select dropdown needs both value and onChange
            onchange={handleChange}
          >
            <option name = "first_name" value="first_name">First Name</option>
            <option name = "gender" value="gender">Gender</option>
            <option name = "age" value="age">Age</option>
            <option name = "tenth_score" value="tenth_score">10th Score</option>
            <option name = "twelth_score" value="twelth_score">12th Score</option>~
          </select>
        </div>
        <div>
          Order:
          <select
            // select dropdown needs both value and onChange
            className="sortorder"
          >
            <option value="asc">Ascending</option>
            <option value="desc">Descending</option>
          </select>
        </div>
        <button className="sort">sort</button>
      </div>
      <table className="table" border="1">
        <thead>
          <tr>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Email</th>
            <th>Gender</th>
            <th>Age</th>
            <th>10th Score</th>
            <th>12th Score</th>
            <th>Branch</th>
          </tr>
        </thead>
        <tbody className="tbody">
          {/* populate all rows like below: */}
          {stdData.map((ele)=>{
            
         return (
            <tr className="row">
              <td className="first_name">{ele.first_name}</td>
              <td className="last_name">{ele.last_name}</td>
              <td className="email">{ele.email}</td>
              <td className="gender">{ele.gender}</td>
              <td className="age">{ele.age}</td>
              <td className="tenth_score">{ele.tenth_score}</td>
              <td className="twelth_score">{ele.twelth_score}</td>
              <td className="preferred_branch">{ele.preferred_branch}</td>
            </tr>
          )
          })}
        </tbody>
      </table>
    </div>
  );
};
