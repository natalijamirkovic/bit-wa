fetch("http://127.0.0.1:8000/")
.then(response => response.json())
.then(data => {
    const name = document.querySelector(".name").textContent = data.name;
    const server = document.querySelector(".way").textContent = data.way;
    const hobby = document.querySelector(".hobby").textContent = data.hobby;
})