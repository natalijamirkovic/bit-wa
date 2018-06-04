import React from "react";
import { UserCard } from "./UserCard";
import { getUsers } from "../../service/userService";

import PropTypes from "prop-types";

const UserGrid = (props) => {
    const { users } = props;

    return (
        <div className="container">
            <div className="row">

                {users.map((user) => {
                    return <UserCard key={user.email} user={user} />
                })}
            </div>
        </div>
    )
}

UserGrid.propTypes = {

    user: PropTypes.object.isRequired
}

UserGrid.defaultProps = {
    user: {}
}

export { UserGrid }