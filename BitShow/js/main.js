const mainModule = ((ui, data) => {
    const initHomepage = () => {

        data.fetchShows((showData) => {
            ui.renderShows(showData);
        },

            function (error) {
                ui.renderError(error);
            });

        $(document).on("click", "a", function (event) {
            event.preventDefault();
            let id = this.getAttribute("data-id");
            localStorage.setItem("id", id);
            location.assign("show-info.html");
        });

        $(".form-control").on("keyup", function (event) {
            let input = this.value;
            data.searchSuggestions(input, function (data) {
                ui.renderDropdown(data);
            });
        });



    }

    const initSinglePage = () => {
        const idInLocalStorage = localStorage.getItem("id");

        data.fetchSingleShow(idInLocalStorage, function (showData) {
            ui.renderSingleShow(showData);

        }, function (error) {
            ui.renderError(error);
        });

        $(document).on("click","a", function(event){
            event.preventDefault()
            const id = this.getAttribute("data-id");
            localStorage.setItem("id", id);
            location.assign("show-info.html");
        });

        $(".form-control").on("keyup", function(event){
            let input = this.value;
            data.searchSuggestions(input, function(data){
                ui.renderDropdown(data)
            });
        });
    }



    return {
        initHomepage,
        initSinglePage
    }
})(uiModule, dataModule);