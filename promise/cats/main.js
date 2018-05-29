const imgHolder = $(".imgHolder");
const body = $("body");


const img1 = new Promise((resolve, reject) => {
    $.get("http://thecatapi.com/api/images/get?format=xml&results_per_page=1")
    .done(res => resolve(res))
    .fail(() => {
        reject("Network problem")
    })
});

const img2 = new Promise((resolve, reject) => {
    $.get("http://thecatapi.com/api/images/get?format=xml&results_per_page=1")
    .done(res => resolve(res))
    .fail(() => {
        reject("Network problem")
    })
});

const img3 = new Promise((resolve, reject) => {
    $.get("http://thecatapi.com/api/images/get?format=xml&results_per_page=1")
    .done(res => resolve(res))
    .fail(() => {
        reject("Network problem")
    })
});

Promise.all([img1, img2, img3])
    .then((res) => {
        res.forEach(element => {
            const url = $(element).find("url").text();
            const img = $(`<img src=${url}>`)
            imgHolder.append(img);
        });
    })
    .catch((msg) => console.log(msg))
    .finally(() => body.prepend("<h1>Mackeeee!</h1>")
    );