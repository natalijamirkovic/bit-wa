const dataModule = (() => {
    class Show {
        constructor(id, name, image) {
            this.id = id;
            this.name = name;
            this.image = image;
        }
    }


    class SingleShow extends Show {
        constructor(id, name, image, castList, seasonsList, summary) {
            super(id, name, image)
            this.castList = castList;
            this.seasonsList = seasonsList;
            this.summary = summary;

        }
    }


    const fetchShows = (successHandler, errorHandler) => {
        const request = $.ajax({
            url: `http://api.tvmaze.com/shows`,
            method: "GET"
        });

        request.done((response) => {
            const showList = []

            for (let i = 0; i < 50; i++) {
                const id = response[i].id;
                const name = response[i].name;
                const image = response[i].image.medium;
                const show = new Show(id, name, image);
                showList.push(show);
            }

            successHandler(showList);
        });

        request.fail((jqXHR, textStatus) => {
            errorHandler(textStatus)
        });
    }

    const fetchSingleShow = (id, successHandler, errorHandler) => {
        const request = $.ajax({
            url: `http://api.tvmaze.com/shows/${id}?embed[]=seasons&embed[]=cast`,
            method: "GET"
        });
        request.done((response) => {
            const id = response.id;
            const name = response.name;
            const image = response.image.original;
            const summary = response.summary;
            const castList = [];
            const cast = response._embedded.cast;

            for (let i = 0; i < cast.length; i++) {
                castList.push(cast[i].person.name)
            }

            const seasonsList = [];
            const seasons = response._embedded.seasons;

            for (let i = 0; i < seasons.length; i++) {
                const premiereDate = seasons[i].premiereDate;
                const endDate = seasons[i].endDate;
                const dateObject = {
                    premiereDate,
                    endDate
                }
                seasonsList.push(dateObject)
            }

            const singleShow = new SingleShow(id, name, image, castList, seasonsList, summary);

            successHandler(singleShow);
        })
        request.fail((jqXHR, textStatus) => {
            errorHandler(textStatus)
        });
    }

    const searchSuggestions = (input, successHandler, errorHandler) => {
        const request = $.ajax({
            url: `http://api.tvmaze.com/search/shows?q=${input}`,
            method: "GET"
        });
        request.done((response) => {
            const suggestedShows = [];
            if (response.length <= 10) {
                for (let i = 0; i < response.length; i++) {
                    const showId = response[i].show.id;
                    const showName = response[i].show.name;
                    let showImage = "";
                    const suggestedSingleShow = new Show(showId, showName, showImage);
                    suggestedShows.push(suggestedSingleShow);
                }
            } else {
                for (let i = 0; i < response.length; i++) {
                    const showId = response[i].show.id;
                    const showName = response[i].show.name;
                    let showImage = "";
                    const suggestedSingleShow = new Show(showId, showName, showImage);
                    suggestedShows.push(suggestedSingleShow);
                }

            }
            successHandler(suggestedShows);
        });

        request.fail((jqXHR, textStatus) => {
            errorHandler(textStatus)
        });
    }


    return {
        fetchShows,
        fetchSingleShow,
        searchSuggestions

    }
})();