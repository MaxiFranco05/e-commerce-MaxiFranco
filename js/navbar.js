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
    href: "./producto.html?prod=1",
    icon: '<i class="bi bi-car-front-fill"></i>',
  },
  {
    titulo: "Log In",
    href: "./login.html",
    icon: '<i class="bi bi-person-circle"></i>',
  },
];

if (localStorage.getItem("login") === "true") {
  head.push(
    `<div><a class="nav-link" href="">
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

if (localStorage.getItem("login") === "false") {
  head.push(
    `<div class="${nav[3].titulo
      .replaceAll(/ /g, "")
      .toLowerCase()}-div"><a class="nav-link" href="${nav[3].href}">
    ${nav[3].icon} 
    ${nav[3].titulo}
    </a></div>`
  );
} else {
  head.push(
    `<div class="dropdown ${nav[3].titulo
      .replaceAll(/ /g, "")
      .toLowerCase()}-div"><a class="btn nav-link dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
      ${nav[3].icon} ¡Hola, ${localStorage.getItem("name")}!
      </a><ul class="dropdown-menu"><li><a class="dropdown-item" data-bs-toggle="modal" data-bs-target="#logOutQuestion"><i class="bi bi-person-fill-dash"></i> Log out</a></li></ul></div>`
  );
}

let sessionOut = document.querySelector("#cerrar-sesion");
sessionOut.addEventListener("click", function () {
  localStorage.setItem("login", false);
});

let deleteAcc = document.querySelector("#borrar-cuenta");
deleteAcc.addEventListener("click", function () {
  localStorage.clear();
  setTimeout(() => {
    window.location.href = "./login.html";
  }, 750);
});

document.querySelector("#menuContainer").innerHTML = head.join("");
