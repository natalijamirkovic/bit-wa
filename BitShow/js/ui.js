const uiModule = (() => {

    const renderShows = (data) => {
        const row = $(".row");
        for (let i = 0; i < data.length; i++) {
            const showCard = $(`
        <a href="show-info.html" data-id="${data[i].id}" class="landing-page-a"
            <div class="col-4">
                <div class="item">
                    <img src=${data[i].image}>
                        <p>${data[i].name}</p>
                </div>
            </div>
        </a>`);
            row.append(showCard);

        }
    }

    const renderError = (status) => {
        const row = $("row");
        const errorField = $(`<div class="col-8 offset-2">${status}</div>`)
        row.append(errorField);
    }


    const renderSingleShow = (data) => {

        //kreiramo h1 gdje cemo smestiti naslov serije
        const titleField = $(".title");
        const title = $(`<h1 id="show-title">${data.name}</h1>`);
        titleField.append(title);

        const imgField = $(".img");
        const img = $(`<img src="${data.image}" alt="${data.name} image" class="info-img">`);
        imgField.append(img);

        const seasonsList = $(".seasons-list");
        for (let i = 0; i < data.seasonsList.length; i++) {
            let liSeasonsItem = $(`<li>${data.seasonsList[i].premiereDate} - ${data.seasonsList[i].endDate}</li>`);
            seasonsList.append(liSeasonsItem);
        }

        const castList = $(".cast-list");
        for (let i = 0; i < data.castList.length; i++) {
            let liCastItem = $(`<li>${data.castList[i]}</li>`);
            castList.append(liCastItem);
        }

        const showDetailsField = $(".show-details");
        const showDetails = $(`<h3>Show Details</h3> <p>${data.summary}</p>`);
        showDetailsField.append(showDetails);

        
    }

    const renderDropdown = (data) => {
        let dropdown = $(".search-list");
        dropdown.empty();
        data.forEach((show) => {
            const item = $(`<a href="show-info.html" data-id=${show.id}>${show.name}</a>`);
            dropdown.append(item);
        })
    }
    return {
        renderShows,
        renderError,
        renderSingleShow,
        renderDropdown

    }
})()