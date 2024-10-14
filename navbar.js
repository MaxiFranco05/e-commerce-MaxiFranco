let head = []
const nav = [
    {
        titulo : "ExpensiveCars",
        href : "./index.html"
    },
    {
        titulo : "Home",
        href : "./index.html"
    },
    {
        titulo : "Cars",
        href : "./Producto/producto.html"
    }
];

for (let menu of nav){
    head.push(`
        <a class="nav-link" href="${menu.href}">${menu.titulo}</a>`
    )
};
console.log(head)

document.querySelector("#menuContainer").innerHTML = head.join("");
