import React from "react"


export default function Form(props){
    const { values, submit, change, disabled, errors } = props;

    const onSubmit = (evt) => {
      evt.preventDefault();
      submit();
    };
  
    const onChange = (evt) => {
      const { name, value, type, checked } = evt.target;
      const valueToUse = type === "checkbox" ? checked : value;
      change(name, valueToUse);
    };

    return(
        <div className =" LoginForm">
        <form className= "form container" onSubmit ={onSubmit}>
        <label htmlFor="nameImport">
        Name
        <input value={values.name} type="text" name="name" placeholder="Name" onChange={onChange} />
      </label>
      <label htmlFor="email">
        Email
        <input value={values.email} type="email" name="email" placeholder="Email Address" onChange={onChange} />
      </label>
      <label htmlFor="passwordInput">
        Password
        <input value={values.password} type="password" name="password" placeholder="Password" onChange={onChange} />
      </label>
      <label htmlFor="termsInput">
        Do you agree to the terms and conditions?
        <input onChange={onChange} type="checkbox" name="terms" value={values.terms} />
      </label>
      <button disabled = {disabled}>Submit!</button>
      <div className ="errors">
          <div><h1>{errors.name}</h1></div>
          <div><h1>{errors.email}</h1></div>
          <div><h1>{errors.password}</h1></div>
          <div><h1>{errors.terms}</h1></div>
      </div>
    </form>
    </div>
    )
}



