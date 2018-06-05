class Show {
    constructor(id, name, image) {
        this.name = name;
        this.image = image.medium;
        this.id = id;

    }
}
class singleShow extends Show {
    constructor(id, name, image, summary, seasons, cast) {
        super(id, name, image)
        this.original = image.original;
        this.summary = summary;
        this.seasons = seasons;
        this.cast = cast;
    }

}
class Season {
    constructor(beginDate, endDate) {
        this.beginDate = beginDate;
        this.endDate = endDate;
    }
}

export const loadData = () => {

    return fetch("http://api.tvmaze.com/shows")
        .then((response) => {
          
            return response.json()
        })
        .then((listShows) => {
            listShows.sort(function (curr, next) {
                const a = curr.rating.average;
                const b = next.rating.average;
                return b - a;
            });
            return listShows;
        })
        .then((sortedShows) => {
            const reformedList50 = sortedShows
                .slice(0, 50)
                .map(singleShowObj => {
                    const show = new Show(singleShowObj.id, singleShowObj.name, singleShowObj.image);
                    return show;
                })
               
                localStorage.setItem("top50shows", JSON.stringify(reformedList50));

            return reformedList50;
        })

};

export const fetchSingleShow = (id) => {
    return fetch(`http://api.tvmaze.com/shows/${id}?embed[]=seasons&embed[]=cast`)
        .then((response) => {
            return response.json()
        })
        .then((show) => {
            let id = show.id;
            let numOfSeasons = show._embedded.seasons.length;
            let seasons = show._embedded.seasons;
            let cast = show._embedded.cast;
            let castList = [];
            let reformSeason = seasons
                .map((singleObj) => {
                    const mySeason = new Season(singleObj.premiereDate, singleObj.endDate);
                    return mySeason;
                })
            console.log(reformSeason);
            for (let i = 0; i < 10; i++) {
                castList.push(cast[i].person.name);
            }
            const myShow = new singleShow(id, show.name, show.image, show.summary, reformSeason, castList);
            console.log(myShow);
    
            return myShow;
        })

}
    // const searchShow = function (input, doneHandler) {
    //     $.ajax({
    //         url: `http://api.tvmaze.com/search/shows?q=${input}`,
    //         method: "GET"
    //     }).done(function (searched) {
    //         shows = [];
    //         if (searched.length <= 10) {
    //             for (let i = 0; i < searched.length; i++) {
    //                 const searchedName = searched[i].show.name;
    //                 const searchedId = searched[i].show.id;
    //                 const searchedImg = "";
    //                 let show = new Show(showId, showName, showImg);
    //                 shows.push(show);
    //             }
    //         } else {
    //             for (let i = 0; i < 10; i++) {
    //                 const searchedName = searched[i].show.name;
    //                 const searchedId = searched[i].show.id;
    //                 const searchedImg = "";
    //                 let searchedObj = new Show(showId, showName, showImg);
    //                 shows.push(searchedObj);
    //             }
    //         }
    //         doneHandler(shows);
    //     })
    // }

