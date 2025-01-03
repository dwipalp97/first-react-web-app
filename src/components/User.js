import React, { useState } from 'react'

const User = ({name, location, emailId, contact}) => {

    const [count, setCount] = useState(0);
  return (
    <div className='user-card'>
        <h1>Count : {count}</h1>
        <h1>{name}</h1>
        <h2>Email: {emailId}</h2>
        <h3>Location: {location}</h3>
        <h4>Contact: {contact}</h4>
    </div>
  )
}
export default User;

