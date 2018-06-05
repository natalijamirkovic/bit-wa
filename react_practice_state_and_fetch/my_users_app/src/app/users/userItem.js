import React from "react";
import UserList from"./UserList";

export const UserItem = (props) => {
    const {name, email, picture, dob} = props.user;
    return (
<div className="collection">
<div className="collection-item avatar">
    <img src={picture} alt="" className="circle"></img>
    <span className="title"><b>Name:</b>{name}</span>
    <p><i className="tiny material-icons">email</i><b>Email:</b>{props.user.hideEmail()}</p>
    <p><i className="tiny material-icons">cake</i><b>Date of Birth:</b>{dob}</p>
    </div>
</div>

    )
}