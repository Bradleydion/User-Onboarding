import Form from "./Form"
import './App.css';
import React, {useState, useEffect} from "react"
import * as yup from "yup"
import schema from "./formSchema"
import axios from "axios"
import Users from "./Users"


// Set your intial states of endpoints
// Set your intisal state for the errors
// 
const initialFormValues ={
  name:"",
  email:"",
  password:"",
  Terms: false,
};
const intialFormErros ={
  name:"",
  email:"",
  password:"",
  Terms: false,
}
const initialUsers = [];
const initialDisabled = true;

function App() {
  const [user, setUser]= useState(initialUsers)
  const [formValues, setFormValues]=useState (initialFormValues)
  const [formErrors, setFormErrors]= useState (intialFormErros)
  const [disabled, setDisabled]=useState (initialDisabled)
  const postNewUser = (newUser) => {
    axios 
      .post ("https://reqres.in/api/users", newUser)
      .then ((res)=> {
        console.log (res)
        setUser([res.data],...user);
        setFormValues(initialFormValues);
      } )
      .catch((err)=>{console.log(err)})

  }
  const inputChange = (name,value) => {
      yup
        .reach(schema, name)
        .validate(value)
        .then(()=> {
          setFormErrors({
            ...formErrors,
            [name]:"",
          })
        })
        .catch((err)=>{
          setFormErrors({
            ...formErrors,
            [name]:err.errors[0],
          })
        })
        setFormValues({
          ...formValues,
          [name]:value,
        })
  }
  const formSubmit = () => {
const newUser ={
  name: formValues.name.trim(),
  email: formValues.email.trim(),
  password: formValues.password.trim(),
}
postNewUser(newUser)
  }

  useEffect(() => {
    schema.isValid(formValues).then((valid) => {
      setDisabled(!valid);
    });
  }, [formValues]);

  return (
    <div className="App">
      
       <Form 
       values ={formValues}
       change ={inputChange}
       submit={formSubmit}
       disabled ={disabled}
       errors ={formErrors}
       />
     {user.map((users) => {
        return <Users key={users.id} details={users} />;})
      }
    </div>
  );
}

export default App;