import React, { useState } from "react";
import { LOGO_URL } from "../utils/constants";
import  UserClass from "./UserClass";
import  User  from "./User";


class About extends React.Component{

  componentDidMount(){
    console.log("Parent componentDidMount called");

  }
  componentDidUpdate(){
    console.log("Parent componentDidUpdate called");
  }

  render(){
    return (
       <div >
        <h1>About US Page</h1>
        <h2>Please welcome to the React Web App</h2>
        {/**
         <User name={"Dwipal Parmar(functional)"} contact={"dopalCoder"} emailId={"dwipalp97@gmail.com"} location={"Gandhinagar"} />
         */}
        <UserClass name={"Child1"} contact={"dopalCoder"} emailId={"dwipalp97@gmail.com"} location={"Gandhinagar"} />
        <UserClass name={"Child2"} contact={"dopalCoder"} emailId={"dwipalp97@gmail.com"} location={"Gandhinagar"} />
       </div>
     );
  }
}

// const About = () => {

//   const [btnLoginTxt,setBtnLoginTxt] = useState("Login");
//     return (
//       <div >
//        <h1>About US Page</h1>
//        <h2>Please welcome to the React Web App</h2>
//        {/**
//         <User name={"Dwipal Parmar(functional)"} contact={"dopalCoder"} emailId={"dwipalp97@gmail.com"} location={"Gandhinagar"} />
//         */}
//        <UserClass name={"Dwipal Parmar(class)"} contact={"dopalCoder"} emailId={"dwipalp97@gmail.com"} location={"Gandhinagar"} />
//       </div>
//     );
//   };
  
export default About;
  