const input = $("input");
const errorElement = $(".alert");
const url = "https://api.github.com/search/users?q=";
const cardHolder = $(".cardHolder");


const collectDataHandler = event => {
    if (event.keyCode === 13) {
        const inputValue = input.val();
        input.blur();
        if (!inputValue) {
            errorElement.text("Input is required!");
            errorElement.toggle()
        }

        const requestUrl = `${url}${inputValue}`;
        fetch(requestUrl)
            .then(res => {
                return res.json();
            })
            .then(res => {
                cardHolder.html("");
                if (res.items.length === 0) {
                    errorElement.text("No results");
                    errorElement.toggle()
                }
                res.items.forEach(({
                    login,
                    avatar_url
                }) => {
                    const card = $(`<div class="col-4"><div class="card" style="width: 18rem;">
                        <img class="card-img-top" src="${avatar_url}" alt="Card image cap">
                        <div class="card-body">
                            <h5 class="card-title">${login}</h5>
                        </div>
                        </div>
                        </div>`);
                    cardHolder.append(card);

                })
            })
            .catch(() => {
                errorElement.text("Network error");
                errorElement.toggle()
            })


    }
}
const clearInputHandler = event => {
    input.val("");
    errorElement.text("");
    errorElement.css("display", "none");

}
input.on("keydown", collectDataHandler);
input.on("focus", clearInputHandler);