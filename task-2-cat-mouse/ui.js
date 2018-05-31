const images = ["https://upload.wikimedia.org/wikipedia/en/thumb/5/5f/TomandJerryTitleCardc.jpg/250px-TomandJerryTitleCardc.jpg",
    "https://d1xfgk3mh635yx.cloudfront.net/sites/default/files/styles/original/public/image/featured/1027753-tom-and-jerry-blamed-mid-east-violence.jpg?itok=Hyqev1zp",
    "http://i0.kym-cdn.com/entries/icons/original/000/023/944/Screen_Shot_2017-09-20_at_10.40.14_AM.png"]


const photos = ["https://i.ytimg.com/vi/yO49S-u7_Dg/hqdefault.jpg", "https://cfvod.kaltura.com/p/1836881/sp/183688100/thumbnail/entry_id/0_3a095y5f/version/100000/width/600/height/400",
    "https://lonelytypewriter.files.wordpress.com/2013/09/screen-shot-2013-09-22-at-12-43-31-am.png"];


export const showImages = () => {
    const p = $("p");
    const button = $(".button");
    const pht = $(`<div><img src=${images[Math.floor(Math.random() *3)]}><button class="photos"> vote for Tom!</button></div>`);
    p.html(pht);    
}

export const showPhotos = () => {
    const p = $("p");
    const button = $(".button");
    const pht = $(`<div><img src=${photos[Math.floor(Math.random() * 3)]}><button class="images"> vote for Jerry!</button></div>`);
    p.html(pht);    
}