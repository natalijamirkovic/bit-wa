import React from "react";
import PostItem from "./UserItem";

const UserList = (props) => {
    const userList = props.myUsers;
    return (

        <ul>
            {userList.map((user) => {
                return <UserItem key={user.name.first} myUser={user} />
            })}
        </ul>
    )
}

export default UserList