import React from "react"


export default function Form(){
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
        <input id="nameImport" type="text" name="name" placeholder="Name" />
      </label>
      <label htmlFor="email">
        Email
        <input id="emailImport" type="email" name="email" placeholder="Email Address" />
      </label>
      <label htmlFor="passwordInput">
        Password
        <input id="passwordInput" type="password" name="password" placeholder="Password" />
      </label>
      <label htmlFor="termsInput">
        Do you agree to the terms and conditions?
        <input id="termsInput" type="checkbox" name="terms" value= "false" />
      </label>
      <button>Submit!</button>
    </form>
    </div>
    )
}



