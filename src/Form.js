import React from 'react';
import { Link } from 'react-router-dom';
import "./Form.css";
function Form() {
  return (
    <div className='form'>
      <h1 className='form-heading'>Form Page</h1>
      <form className='form-container'>
        <label htmlFor="name">Name:</label>
        <input type="text" id="name" name="name" /><br /><br />
        <label htmlFor="number">Number:</label>
        <input type="text" id="number" name="number" /><br /><br />
        <label htmlFor="email">Email:</label>
        <input type="email" id="email" name="email" /><br /><br />
        <label htmlFor="Password">Password:</label>
        <input type="password" id="password" name="password" /><br /><br />
        <Link to="/submit"><button className='submit'>Submit</button></Link>

      </form>
       
      <Link to="/">Back to Balloon Page</Link>
    </div>
  );
}

export default Form;