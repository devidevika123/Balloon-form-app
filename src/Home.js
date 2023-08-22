import React from 'react'
import {Link} from 'react-router-dom'
import "./Home.css";
const Home = () => {
  return (
    <div>
        <Link to='/Balloon'>
        <button  className="btn" type="button">Balloon</button></Link>
        <Link to='/Form'>
        <button className="btn" type="button">Form</button></Link>
       
         
    </div>
  )
}

export default Home