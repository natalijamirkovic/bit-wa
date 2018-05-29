import * as data from "./data.js";
import * as ui from "./ui.js";

    const setEventListener = () => {
        const $cardHolderElement = $(ui.DOMSelectors.divShowHolder);
        const $inputElement = $(ui.DOMSelectors.inputSearch);
        const $logoElement = $(ui.DOMSelectors.aLogo);
        const $searchResultElement = $(ui.DOMSelectors.divSearchResult);
        $cardHolderElement.on("click", cardHandler);
        $inputElement.on("keyup", searchHandler);
        $logoElement.on("click", homeButtonHandler);
        $searchResultElement.on("click", cardHandler);
    }

    const loadShows = () => {
        data.fetchShows()
            .then(myListShow => {
                ui.displayShows(myListShow)
            })
            .catch(ui.displayError)
    }

    const loadFetchSearchedShows = (searchValue) => {
        console.log(searchValue);
        data.fetchSearchedShows(searchValue)
        .then(myListShow => {
            ui.displayShows(myListShow)
        })
        .catch(ui.displayError);
    }

    const homeButtonHandler = event => {
        loadShows()
    }

    const cardHandler = event => {
        if (event.target.tagName === "A") {
            event.preventDefault();
            const id = ui.getShowId(event);
            data.fetchShowInfo(id)
                .then(show => {
                    ui.displayShowInfo(show)
                })
                .catch(ui.displayError)
        }
    }

    const searchHandler = event => {
        const searchValue = ui.collectInputData();
        if (event.key === "Enter") {
            if (searchValue === "") {
                return;
            }
        loadFetchSearchedShows(searchValue);
        return ui.displaySearchedList([]);
        }
        if (searchValue === "") {
            return ui.displaySearchedList([]);
        }

        data.fetchSearchedShows(searchValue)
        .then(myListShow => {
            ui.displaySearchedList(myListShow);
        })
        .catch(ui.displayError);
    }


    export const initHomepage = () => {
        ui.formPreventDefault();
        setEventListener();
        loadShows();
    }


