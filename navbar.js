let head = []
const nav = [
    {
        titulo : "Home",
        href : "./index.html"
    },
    {
        titulo : "Cars",
        href : "./producto.html?prod=1"
    }
];

for (let menu of nav){
    head.push(`
        <a class="nav-link" href="${menu.href}">${menu.titulo}</a>`
    )
};

document.querySelector("#menuContainer").innerHTML = head.join("");
