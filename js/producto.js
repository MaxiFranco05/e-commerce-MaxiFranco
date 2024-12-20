let id = window.location.search.split("=")[1];
let sect = document.querySelector("section");
let producto = data.find((producto) => producto.id == id);
function loginCompra() {
  document.querySelector(".text-redir").innerHTML =
    "Redireccionando a <i>Inicio Sesión</i>";
  setTimeout(function () {
    window.location.href = "./login.html";
  }, 500);
}
const compra =
  localStorage.getItem("login") === "false"
    ? `<a href="#" class="btn btn-dark" onclick="loginCompra()">Inicia sesión para comprar</a>
    <p class="text-redir fs-6 text-primary"></p>`
    : `<div class="input-group mb-3">
         <div class="input-group-prepend">
           <button class="btn btn-dark" type="button" onclick="decremento()">-</button>
         </div>
         <input type="number" class="form-control text-center bg-secondary" value="0" readonly>
         <div class="input-group-append">
           <button class="btn btn-dark" type="button" onclick="incremento()">+</button>
         </div>
       </div>
       <a href="#" class="btn btn-dark" onclick="addCart()">Comprar</a>`;

sect.innerHTML = `  <div class="container">
    <div class="col-12 row border border-dark">
        <div class="col-9 p-0 border border-dark">
            <img src="${
              producto.img
            }" alt="Auto" style="width: 100%; height: 100%;">
        </div>
        <div class="prod-data col-3 bg-light text-end border border-dark">
        <div>
        <h2>${producto.title}</h2>
        <h4 style="color: gray;">${producto.category}</h4>
        <h5>Precio: $${producto.price.toLocaleString("es-ES")}</h5>
        <h6>${producto.details}</h6>
        <p class="cuotas">Hasta 18 cuotas sin interes.</p></div>
        ${compra.replace("`", "")}
        <p>Quedan: ${producto.stock} vehiculos.</p>
      </div>
    </div>
    </div>
</div>  `;

const contador = document.querySelector("input");

function incremento() {
  contador.value = Number(contador.value) + 1;
}

function decremento() {
  if (contador.value >= 1) {
    contador.value = Number(contador.value) - 1;
  }
}

function addCart() {
  if (contador.value >= 1) {
    const carrito = JSON.parse(localStorage.getItem("carrito")) || [];
    const idProducto = Number(window.location.search.split("=")[1]);
    const autoCarrito = carrito.find((auto) => auto.id === idProducto);
    if (autoCarrito) {
      autoCarrito.cantidad += Number(contador.value);
    } else {
      carrito.push({
        id: idProducto,
        cantidad: Number(contador.value),
        title: producto.title,
        details: producto.details,
        price: producto.price,
        category: producto.category,
      });
    }
    localStorage.setItem("carrito", JSON.stringify(carrito));
    const cantidad = carrito.reduce(
      (acumulado, actual) => acumulado + actual.cantidad,
      0
    );
    if (contador.value > 1) {
      Toastify({
        text: `Se agregaron ${contador.value} de ${producto.title} al carrito.`,
        duration: 3000,
      }).showToast();
    } else {
      Toastify({
        text: `Se agregó un ${producto.title} al carrito.`,
        duration: 3000,
      }).showToast();
    }
    localStorage.setItem("cantidad", cantidad);
    document.querySelector("#contador-text").innerText = cantidad;
    contador.value = 0;
  }
  ActContador(head);
}
