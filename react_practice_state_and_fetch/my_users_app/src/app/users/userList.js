import React, {Component} from "react";
import {fetchUsers} from "../../services/userService";   
import {UserItem} from "./UserItem";
import {UserCard} from "./UserCard";

export class UserList extends Component {
    constructor() {
        super() //pozovni njen konstruktor bazne klase sa nekim arg (mi nemamo arg)
        this.state = {        //setujemo state inicijalno 
           users: []
        };
    }

    loadData() {
        fetchUsers()
        .then(users => {
            this.setState({     //setujemo listu koju smo fetch
               users:users
            })
            console.log(this.state.users);
        })
    }

    componentDidMount() {
        this.loadData()
    }

    renderListItem (users)  {
        
        return(
            <div className="row">
            {users.map((user,index) => {
            return <UserItem key={index} user={user} />
            })}
            </div>
            )
    }

    renderListCard (users) {
        return (
            <div className="row">
             {users.map((user,index) => {
            return <UserCard key={index} user={user} />
             })}
            </div>
        )
    }


    render() {

        const userList = this.state.users;
        const {state} =this.props;
        return(
            <div className="container">
            <div className="row">
            {state
                ?this.renderListItem(userList)
                :this.renderListCard(userList)
            }
            </div>
        </div>
        )
    }
}