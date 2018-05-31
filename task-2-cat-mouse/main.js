import {showImages, showPhotos} from "./ui.js";


export const init = () => {
    showImages();
    $(document).on("click", "button", function(){
        if(this.className == "images") {
            showImages();
        } else {
            showPhotos()
        }
    })  
}

