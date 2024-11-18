if (window.location.pathname.includes("producto.html")) {
  let idVent = window.location.search.split("=")[1];
  localStorage.setItem("idVent", idVent);
}
document.querySelector("#modal").innerHTML = `
      <div class="modal fade" id="logOutQuestion" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h1 class="modal-title fs-5" id="exampleModalLabel">¿Seguro que quiere cerrar sesión?</h1>
              <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">
              Si cierra sesión, tendrá que volver a ingresar y perderá su registro de carrito.
            </div>
            <div class="modal-footer">
              <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Cancelar</button>
              <button type="button" id="cerrar-sesion" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#logOutQuestion2">Sí, quiero cerrar sesión.</button>
            </div>
          </div>
        </div>
      </div>
      <div class="modal fade" id="logOutQuestion2" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h1 class="modal-title fs-5" id="exampleModalLabel">¿Quiere eliminar su cuenta?</h1>
              <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">
              Si elimina su cuenta, se borrara todo su registro y no volverá a acceder a la misma. <br>
              Tendra que crear otra cuenta para acceder.
            </div>
            <div class="modal-footer">
              <a href="./login.html"<button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Solo cerrar sesión.</button></a>
              <button type="button" id="borrar-cuenta" class="btn btn-primary">Borrar cuenta.</button>
            </div>
          </div>
        </div>
      </div>
  `;

document.querySelector("header").innerHTML = `
<nav class="navbar fixed-top navbar-expand-lg navbar-light bg-light">
        <div class="container-fluid">
          <a class="navbar-brand" href="./index.html">ExpensiveCars</a>
          <div>
            <button
              class="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNav"
              aria-controls="navbarNav"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNav">
              <div class="navbar-nav" id="menuContainer"></div>
            </div>
          </div>
        </div>
      </nav>
`;

let head = [];
const nav = [
  {
    titulo: "Home",
    href: "./index.html",
    icon: '<i class="bi bi-house-door-fill"></i>',
  },
  {
    titulo: "About",
    href: "./index.html",
    icon: '<i class="bi bi-people-fill"></i>',
  },
  {
    titulo: "Cars",
    href: `./producto.html?prod=${localStorage.getItem("idVent")}`,
    icon: '<i class="bi bi-car-front-fill"></i>',
  },
  {
    titulo: "Log In",
    href: "./login.html",
    icon: '<i class="bi bi-person-circle"></i>',
  },
];

if (localStorage.getItem("login") === "true") {
  localStorage.setItem("cart", JSON.stringify([]));
  head.push(
    `<div><a class="nav-link" href="./cart.html">
    <b id="contador-text">${localStorage.getItem(
      "cantidad"
    )}</b id="contador-text">
    <i class="bi bi-cart-fill"></i>
    Cart
    </a></div>`
  );
}

for (let i = 0; i < 3; i++) {
  head.push(
    `<div class="${nav[
      i
    ].titulo.toLowerCase()}-div"><a class="nav-link" href="${nav[i].href}">${
      nav[i].icon
    } ${nav[i].titulo}</a></div>`
  );
}

if (localStorage.getItem("login") === "true") {
  head.push(
    `<div class="dropdown ${nav[3].titulo
      .replaceAll(/ /g, "")
      .toLowerCase()}-div"><a class="btn nav-link dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
      ${nav[3].icon} ¡Hola, ${localStorage.getItem("name")}!
      </a><ul class="dropdown-menu"><li><a class="dropdown-item" data-bs-toggle="modal" data-bs-target="#logOutQuestion"><i class="bi bi-person-fill-dash"></i> Log out</a></li></ul></div>`
  );
} else {
  head.push(
    `<div class="${nav[3].titulo
      .replaceAll(/ /g, "")
      .toLowerCase()}-div"><a class="nav-link" href="${nav[3].href}">
    ${nav[3].icon} 
    ${nav[3].titulo}
    </a></div>`
  );
}

let sessionOut = document.querySelector("#cerrar-sesion");
sessionOut.addEventListener("click", function () {
  localStorage.setItem("login", "false");
});

let deleteAcc = document.querySelector("#borrar-cuenta");
deleteAcc.addEventListener("click", function () {
  localStorage.clear();
  setTimeout(() => {
    window.location.href = "./login.html";
  }, 750);
});

document.querySelector("#menuContainer").innerHTML = head.join("");
