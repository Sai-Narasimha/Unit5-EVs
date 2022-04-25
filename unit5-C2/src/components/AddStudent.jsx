import { useState } from "react";
import axios from "axios";

export const AddStudent = () => {
  const [formData, setFormData] = useState({
    first_name : "",
    last_name : "",
    email : "",
    gender : "",
    age : "",
    tenth_score : "",
    twelth_score : "",
    branch : "",
  })
  const handleChange = (e)=>{
    setFormData({
      ...formData,
      [e.target.name] : e.target.value
    })
    // console.log(e.target.value)
  }
  const handleSubmit = (e)=>{
    e.preventDefault()
    // console.log(formData)
    

    axios.post("http://localhost:8080/students", formData).then(()=>{
      alert("Succesfully Added")
    })

    
  }

  return (
    <form className="addstudent" onSubmit={handleSubmit}>
      <div>
        <label>First Name :</label>
        <input
          onChange={handleChange}
          type="text"
          name="first_name"
          className="first_name"
          placeholder="enter first name"
        />
      </div>
      <div>
        {" "}
        <label>Last Name :</label>
        <input
          type="text"
          name="last_name"
          className="last_name"
          placeholder="enter last name"
          onChange={handleChange}
        />
      </div>
      <div>
        <label>Email :</label>
        <input
          type="email"
          name="email"
          className="email"
          placeholder="enter email"
          onChange={handleChange}
        />
      </div>

      <div>
       <label>Gender :</label> {/* NOTE: radio boxes only work when they have same `name`. */}
        <div>
          Male
          <input
            name="gender"
            className="male"
            type="radio"
            value={"male"}
            onChange={handleChange}
          />{" "}
          Female{" "}
          <input
            name="gender"
            className="female"
            type="radio"
            value={"female"}
          />
        </div>
      </div>
      <div>
        <label>Age :</label>
        <input
          type="number"
          name="age"
          className="age"
          placeholder="enter age"
          onChange={handleChange}
        />
      </div>
      <div>
        <label>Tenth Score :</label>
        <input
          type="number"
          name="tenth_score"
          className="tenth_score"
          placeholder="enter 10th score"
          onChange={handleChange}
        />{" "}
      </div>
      <div>
        <label>Twelth Score :</label>
        <input
          type="number"
          name="twelth_score"
          className="twelth_score"
          placeholder="enter 12th score"
          onChange={handleChange}
        />{" "}
      </div>
      <div>
        <select
          onChange={handleChange}
          value={""} // select dropdown needs both value and onChange attributes
          name="preferred_branch"
          className="preferred_branch"
        >
          <option value="law">law</option>
          <option value="commerce">commerce</option>
          <option value="science">science</option>
          <option value="sports">sports</option>
          <option value="arts">arts</option>
          <option value="acting">acting</option>
        </select>
      </div>

      <input className="submit" type="submit" value="Submit" />
      {
        // <div className="error"></div>
        // show this div with proper error before submitting form, if there's anything not provided
        // eg: first name missing, age cannot be greater than 100 etc
      }
    </form>
  );
};
