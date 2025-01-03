import React from "react";

class UserClass extends React.Component{
    constructor(props){
        super(props);

       this.state ={
        userInfo:{},
       }

        console.log("user class", props);
    }

    async componentDidMount(){
        console.log(this.props.name +"componentDidMount Method Called");
        const response = await fetch("https://api.github.com/users/dwipalp");
        const userData = await response.json();

        console.log("userData", userData);
        this.setState({
            userInfo : userData,
        });
    }

    componentDidUpdate(){
        console.log(this.props.name +"componentDidUpdate Method Called");
    }
    render(){
        const {  emailId, contact} = this.props;
        const {name, bio, avatar_url, location} = this.state.userInfo;
        return (
            <div className='user-card'>
               
                <h1>{name}</h1>
                <h3>bio: {bio}</h3>
                <img className="user-img" src={avatar_url}></img>
                <h3>Email: {emailId}</h3>
                <h3>Location: {location}</h3>
                <h4>Contact: {contact}</h4>
            </div>
          )
    }      
}

export default UserClass;