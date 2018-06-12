import { User } from "../entities/User";
import { EndPoint } from "../shared/constants";


class UserService {
    constructor() {
        this.state = {
            users: [],
            filteredUsers: [],
            males: 0,
            females: 0
        }
    }

    fetchUsers() {
        return fetch(EndPoint)
            .then((response) => {
                return response.json()
            })
            .then((data) => {
                let users = data.results.map((user) => {
                    return new User(user.name.first, user.name.last, user.email, user.picture.thumbnail, user.picture.large, user.dob, user.gender)
                });
                this.state.users = users;
                this.state.filteredUsers = users;
            })
        return users;
    }



}