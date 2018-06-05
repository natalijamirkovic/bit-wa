import { User } from "../entities/User";


const fetchUsers = () => {
    return fetch("https://randomuser.me/api/?results=15")
        .then((responseBrowserObject) => {
            return responseBrowserObject.json() //raspakujem u json objekat
        })
        .then((responseJSONObject) => {
            const userData = responseJSONObject.results;
            return userData.map((user) => {
                return new User(user.name.first, user.email, user.picture.thumbnail, user.dob)
        
            })
        })
        .catch((error) => {
            console.log(error)
        })
}

export { fetchUsers }