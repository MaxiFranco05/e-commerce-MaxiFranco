if (window.location.pathname.includes("producto.html")) {
  let idVent = window.location.search.split("=")[1];
  localStorage.setItem("idVent", idVent);
}

document.querySelector("header").innerHTML = `
<nav class="navbar fixed-top navbar-expand-lg text-light">
        <div class="container-fluid">
          <a class="navbar-brand" href="./index.html"><i class="bi bi-ev-front-fill"></i> ExpensiveCars</a>
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
              <div class="navbar-nav text-light" id="menuContainer"></div>
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
function ActContador(head) {
  const cantidad = localStorage.getItem("cantidad") || 0;
  head.push(
    `<div><a class="nav-link" href="./cart.html">
    <b id="contador-text">${cantidad}</b id="contador-text">
    <i class="bi bi-cart-fill"></i>
    Cart
    </a></div>`
  );
}

if (localStorage.getItem("login") === "true") {
  ActContador(head);
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
      </a><ul class="dropdown-menu bg-dark"><li><a class="dropdown-item" style="cursor: pointer;" onclick="sessionOut()"><i class="bi bi-person-fill-dash"></i> Cerrar sesión</a></li><li><a class="dropdown-item" style="cursor: pointer;" onclick="delAcc()"><i class="bi bi-person-fill-slash"></i> Eliminar cuenta</a></li></ul></div>`
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

document.querySelector("#menuContainer").innerHTML = head.join("");

function sessionOut() {
  Swal.fire({
    title: "¿Quiere cerrar sesión?",
    text: "Si cierra sesión, se borrará su carrito y tendra que volver a iniciar.",
    icon: "warning",
    showCancelButton: true,
    confirmButtonColor: "#3085d6",
    cancelButtonColor: "#d33",
    confirmButtonText: "Sí, cerrar sesión.",
  }).then((result) => {
    if (result.isConfirmed) {
      Swal.fire({
        title: "Cuenta cerrada exitosamente.",
        text: "¡Vuelva pronto!",
        icon: "success",
      });
      setTimeout(() => {
        localStorage.setItem("login", "false");
        window.location.href = "./login.html";
      }, 1500);
    }
  });
}

function delAcc() {
  Swal.fire({
    title: "¿Quiere eliminar su cuenta?",
    text: "⚠ Esta acción es irreversible ⚠",
    icon: "warning",
    showCancelButton: true,
    confirmButtonColor: "#3085d6",
    cancelButtonColor: "#d33",
    confirmButtonText: "Sí, eliminar cuenta.",
  }).then((result) => {
    if (result.isConfirmed) {
      Swal.fire({
        title: "Cuenta eliminada exitosamente.",
        text: "¡Vuelva pronto!",
        icon: "success",
      });
      localStorage.clear();
      setTimeout(() => {
        window.location.href = "./login.html";
      }, 1500);
    }
  });
}
