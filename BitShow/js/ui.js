



export const showData = function (showList) {
    const $display = $(".display");
    let showListOnPage = "";
    for (let i = 0; i < showList.length; i++) {
        showListOnPage += (`<div class="show-card col-4" data-id='${showList[i].id}'>
                                <img src='${showList[i].image}'><p>${showList[i].name}<p></div>`);

    }
    $display.html(showListOnPage);
}

export const showSingleItem = function (showItem) {
    const $mainTitle = $(".show-title");
    let showTitle = showItem.name;
    $mainTitle.html(`<h3>${showTitle}<h3>`);

    const $detailImage = $(".show-image");
    let showImageOnPage = showItem.original;
    $detailImage.html(`<img src="${showImageOnPage}">`);

    const $summary = $(".summary");
    let summaryText = showItem.summary;
    $summary.html(`${summaryText}`);

    const $season = $(".season");
    const $seasonTitle = $(".seasonTitle");
    const showSeasonTitle = `Seasons (${showItem.seasons.length})`;
    $seasonTitle.html(showSeasonTitle);
    let showListOfSeasons = "";
    for (let i = 0; i < showItem.seasons.length; i++) {
        if (showItem.seasons[i].beginDate !== null) {
            showListOfSeasons += (`
                    <li>${showItem.seasons[i].beginDate} - ${showItem.seasons[i].endDate}</li>
                `)
        } else {
            showListOfSeasons += `<li>TBA</li>`;
        }
    }
    $season.html(showListOfSeasons);
    const $cast = $(".cast");
    let showCastOnPage = "";
    for (let i = 0; i < showItem.cast.length; i++) {
        showCastOnPage += (`
            <li>${showItem.cast[i]}</li>
            `)
    }
    $cast.html(showCastOnPage);
}
