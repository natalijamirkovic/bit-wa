
const dataModule = (function(request){

    const constants = { 
        userEndpoint : "http://api.github.com/search/users?q=cats"
    }

    class User {
        constructor(id, username, photo){
            this.id = id;
            this.username = username;
            this.photo = photo;
        }
    }

    const fetchUsers = (doneHandler, emptyHandler, errorHandler) => {
        
        request(constants.userEndpoint)
        .done(function (response) {

            const userListData = response.items; 
            console.log(response);

            const userList = userListData.map((userData) => {
                const { id, avatar_url, login} = userData;
                return new User(id, avatar_url, login);
            })

            if( userList.length === 0){
                emptyHandler()
            } else {

                doneHandler(userList);
            }

        })
        .fail((error) =>{
            errorHandler(error);

        })

    }

    return {
        fetchUsers
    }

})(jQuery.get)


////////////////////////////////////////////////


    const constants = { 
        userEndpoint : "http://api.github.com/search/users?q=cats"
    }

    class User {
        constructor(id, username, photo){
            this.id = id;
            this.username = username;
            this.photo = photo;
        }
    }

    export const fetchUsers = (doneHandler, emptyHandler, errorHandler) => {
        
        request.$get(constants.userEndpoint)
        .done(function (response) {

            const userListData = response.items; 
            console.log(response);

            const userList = userListData.map((userData) => {
                const { id, avatar_url, login} = userData;
                return new User(id, avatar_url, login);
            })

            if( userList.length === 0){
                emptyHandler()
            } else {

                doneHandler(userList);
            }
        })
        .fail((error) =>{
            errorHandler(error);
        })
    }

