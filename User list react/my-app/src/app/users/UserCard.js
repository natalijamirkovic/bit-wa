import React from "react";

import PropTypes from "prop-types";

const UserCard = (props) => {
    const { photo, name, email, dob } = props.user;
    const dateObj = dob.toDateString().split(" ");
    return (
        <div className="col s4 m4 l4">
            <div className="card">
                <div className="card-image">
                    <img src={photo}></img>
                    
                    <span className="card-title">{name}</span>
                 </div>   
                    <div className="card-content">
                        <p>Name:{props.user.hideEmail()}</p>
                        <p>Date of birth:{`${dateObj[1]} ${dateObj[2]}th ${dateObj[3].slice(2)}`}</p>
                    </div>
                
            </div>
        </div>
    )
}

UserCard.propTypes = {
    user: PropTypes.object.isRequired
}

UserCard.defaultProps = {
    user: {}
}
export { UserCard }