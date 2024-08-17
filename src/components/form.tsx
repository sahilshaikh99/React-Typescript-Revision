import React from "react";


interface val {
    uname: string,
    pin: number
  }

function Form({uname, pin}: val){

    const submitForm = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        
    }

    return (
        <>
        <center>
        <h1>User Form</h1>
        <form onSubmit={submitForm}>
            <input type="text" value={uname ? uname : ""} placeholder="Enter Name..."/>
            <input type="number" value={pin ? pin : ""} placeholder="Enter Pin..."/>
            <button type="submit"></button>
        </form>
        </center>
        
        </>
    )
}

export default Form;