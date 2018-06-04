import React from "react";

const UserItem = (props) => {
    const singleUser = props.myUser;
    const {picture, name,email,dob} = props.myUser;
    return (
        <div>
            <li>
                <div className="col s12 ">
                    <div className="card blue-grey darken-1">
                        <div className="card-content white-text">
                        <img src={picture.thumbnail}></img>
                            <span className="card-title"> {name.first}</span>
                            <p> {email}</p>
                            <p> {dob}</p>
                        </div>
                        
                    </div>
                </div>
            </li>
        </div>
    )
}

export default UserItem