const uiModule = (function ($) {

    const displayUsers = (userList) => {


        const $dataDiv = $(".data");


        userList.forEach(user => {

            const $userElement = createUserElement(user);
            $dataDiv.append($userElement);
        })
    }

    const createUserElement = (user) => {

        const{id, username, photo} = user;
        return $(`
        <div data-id="${id}">
        <p>${username}</p>
        <img src="${photo}>
        </div>`)
        console.log(userList);

    }

    const displayNoResults = () => {
        console.log("no results!");
    }

    return {
        displayUsers,
        displayNoResults
    }


})(jQuery)

//////////////////////////////




    export const displayUsers = (userList) => {

        const $dataDiv = $(".data");
        userList.forEach(user => {
            const $userElement = createUserElement(user);
            $dataDiv.append($userElement);
        })
    }

    const createUserElement = (user) => {

        const{id, username, photo} = user;
        return $(`
        <div data-id="${id}">
        <p>${username}</p>
        <img src="${photo}>
        </div>`)
        console.log(userList);
    }

    export const displayNoResults = () => {
        console.log("no results!");
    }

