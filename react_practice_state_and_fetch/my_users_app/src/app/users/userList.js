import React, {Component} from "react";
import {fetchUsers} from "../../services/userService";   
import {UserItem} from "./UserItem";


export class UserList extends Component {
    constructor() {
        super()
        this.state = {
           users: []
        };
    }

    componentDidMount() {
        fetchUsers()
        .then(users => {
            this.setState({
             users:users
            })
            console.log(this.state.users);
        })
    }

    render() {

        const userList = this.state.users;

        return (
            <div className="container">
            <div className="row">

                {userList.map((user,index) => {
                    return <UserItem key={index} user={user} />
                })}
            </div>
        </div>
        )
    }
}