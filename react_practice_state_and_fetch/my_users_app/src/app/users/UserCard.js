import React from "react"



export const UserCard = (props) => {
    const {name, picture, dob} = props.user;

   return (
  
    <div className="col s4">
        <div className="card">
            <div className="card-image">
              <img src={picture}></img>
              <span className="card-title">{name}</span>
            </div>
            <div className="card-content">
               <p><b>Email:</b>{props.user.hideEmail()}</p>
               <p><b>Date of Birth:</b>{dob}</p>
            </div>
        </div>
     </div>
    ) 
}