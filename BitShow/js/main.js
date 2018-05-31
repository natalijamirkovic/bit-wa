import { loadData, fetchSingleShow } from "./data.js";
import { showData, showSingleItem } from "./ui.js";


export const initHomepage = () => {
    setupEventListener();

    const storageShows = localStorage.getItem("top50shows");
    if (storageShows) {
        showData(JSON.parse(storageShows))
    } else {
        loadData()
            .then((reformedList50) => {
                showData(reformedList50);
            })
    }

}

const setupEventListener = () => {
    $(document).on('click', ".show-card", function () {
        // get id
        let idValue = $(this).attr("data-id");
        // set to ls
        localStorage.setItem("id", idValue);
        // redirect to single page 
        location.href = "showInfoPage.html";
    });
}

let id = localStorage.getItem("id");

console.log(id);


export const initSingleShow = () => {
    console.log('second page');
    fetchSingleShow(id)
        .then(showSingleItem);
}

    // $("#search-field").on("keyup", function(event){
    //     let input = this.value;
    //     data.searchShow(input, function(str){
    //        ui.dropdownDisplay(str);
    //     });
    // });

