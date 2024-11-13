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
           <button class="btn btn-danger" type="button">-</button>
         </div>
         <input type="text" class="form-control text-center" value="0" readonly>
         <div class="input-group-append">
           <button class="btn btn-danger" type="button">+</button>
         </div>
       </div>
       <a href="#" class="btn btn-dark">Comprar</a>`;

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
        <h3>Precio: $${producto.price}</h3>
        <h5>${producto.details}</h5>
        <p class="cuotas">Hasta 18 cuotas sin interes.</p></div>
        ${compra.replace("`", "")}
        <p>Quedan: ${producto.stock} vehiculos.</p>
      </div>
    </div>
    </div>
</div>  `;
