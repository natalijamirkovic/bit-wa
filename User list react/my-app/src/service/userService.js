import User from "../entities/User";
import usersData from "../data/data";

const getUsers = () => {
    return usersData.map((user) => {
        return new User(user.name.first, user.email, user.picture.large, user.dob)
    })
}

export {getUsers};