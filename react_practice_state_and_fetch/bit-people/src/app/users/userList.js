import React from "react";
import { UserItem } from "./UserItem";
import { UserCard } from "./UserCard";

export const UserList = (props) => {

    const { state, users } = props;



    const renderListItem = (users) => {

        return (
            <div className="row">
                {users.map((user, index) => {
                    return <UserItem key={index} user={user} />
                })}
            </div>
        )
    }

    const renderListCard = (users) => {
        return (
            <div className="row">
                {users.map((user, index) => {
                    return <UserCard key={index} user={user} />
                })}
            </div>
        )
    }
    const displayLayout = (users) => {
        const showStorageView = localStorage.getItem("listView");


        return showStorageView === "true"
            ? renderListItem(users) :
            renderListCard(users)
    }

    return (
    <div className="container">
        <div className="row">
            {state
                ? renderListItem(users)
                : renderListCard(users)
            }
        </div>
    </div>
)
}
