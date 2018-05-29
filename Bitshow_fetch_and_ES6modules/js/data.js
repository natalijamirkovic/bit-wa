import Show from "./entities/show.js";



    export const fetchShows = () => {
        const url = 'http://api.tvmaze.com/shows';
        return fetch(url)
            .then(res => {
                return res.json()
            })
            .then(res => {
                const listShow = res.slice(0, 50)
                    .map(({
                        id,
                        name,
                        image
                    }) => {
                        return new Show(id, name, image.original);
                    });

                return listShow;
            })

    }

    export const fetchShowInfo = (id) => {
        const url = `http://api.tvmaze.com/shows/${id}?embed[]=seasons&embed[]=cast`;
        return fetch(url)
            .then(res => {
                return res.json();
            })
            .then(res => {
                const imageSrc = res.image ?
                    res.image.original :
                    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSjmhOQIdkehQclCNlvATZe4QCQoaBPRVftOSbW0E4xxnWmvc4r8Q";
                const show = new Show(res.id, res.name, imageSrc);
                show.summary = res.summary;
                res._embedded.seasons.forEach(({
                    premiereDate,
                    endDate
                }) => {
                    const seasonString = (premiereDate && endDate) ?
                        `${premiereDate} - ${endDate}` :
                        "Data Not Available";
                    show.seasons.push(seasonString);
                });
                res._embedded.cast.forEach(({
                    person
                }) => {
                    show.cast.push(person.name);
                });
                return show;
            })
    }

    export const fetchSearchedShows = (searchValue) => {
        const url = `http://api.tvmaze.com/search/shows?q=${searchValue}`;
        return fetch(url)
            .then(res => {
                return res.json();
            })
            .then(res => {
                const listShow = res.map(({
                    show
                }) => {
                    const imageSrc = show.image ?
                        show.image.original :
                        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSjmhOQIdkehQclCNlvATZe4QCQoaBPRVftOSbW0E4xxnWmvc4r8Q";

                    return new Show(show.id, show.name, imageSrc);
                });

                return listShow;
            })

    }



