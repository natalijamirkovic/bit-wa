const mainController = (function(data, ui){

    const onDoneHandler = (userList) => {

        ui.displayUsers(userList);
    }

    const onEmptyHandler = () => {

        ui.displayNoResults();
    }


     const init = () => {
        data.fetchUsers(onDoneHandler, onEmptyHandler)
    }


    return {
        init
    }


})(dataModule, uiModule)

////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////

    import { fetchUsers } from "./data.js";
    import { displayUsers, displayNoResults } from "./ui.js";

    const onDoneHandler = (userList) => {
        ui.displayUsers(userList);
    }

    const onEmptyHandler = () => {
        ui.displayNoResults();
    }

     export const init = () => {
        fetchUsers(onDoneHandler, onEmptyHandler)
    }


  


