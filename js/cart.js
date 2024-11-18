if (localStorage.getItem("login") != "true") {
  window.location.href = "./index.html";
}

document.querySelector(".btn-success").addEventListener("click", function () {
  window.location.href = `./producto.html?prod=${localStorage.getItem(
    "idVent"
  )}`;
});
const cardsSect = document.querySelector("#cards");
const url =
  "https://66d9ee6caa07a954166f10ed--gregarious-melba-cacdba.netlify.app/";
function cardCart(cards) {
  const list = cards.map(
    (card) => `<div
                class="d-flex align-items-start border-bottom pb-3">
                <div class="me-4">
                <img
                    src="${url}${card.id}.jpg"
                    alt="${card.title}"
                    class="avatar-lg rounded"
                  />
                </div>
                <div class="flex-grow-1 overflow-hidden">
                  <h5 class="text-truncate font-size-18">
                    ${card.title}
                  </h5>
                  <div class="row">
                    <div class="col-md-4">
                      <div class="mt-3">
                        <p class="text-muted mb-2">Precio</p>
                        <h5 class="mb-0 mt-2">$${card.price}</h5>
                      </div>
                    </div>
                    <div class="col-md-5">
                      <div class="mt-3">
                        <p class="text-muted mb-2">Cantidad</p>
                        <h5 class="mb-0 mt-2">${card.cantidad}</h5>
                      </div>
                    </div>
                    <div class="col-md-3">
                      <div class="mt-3">
                        <p class="text-muted mb-2">Total</p>
                        <h5>$${card.price * card.cantidad}</h5>
                      </div>
                    </div>
                    <div class="col-md-2">
                      <div class="mt-3">
                      <p class="text-muted mb-2" onclick="removeItem(${
                        card.id
                      })">Eliminar</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
    `
  );
  cardsSect.innerHTML = list.join("");

  // Calcular el total general
  const total = cards.reduce(
    (acum, card) => acum + card.price * card.cantidad,
    0
  );

  document.querySelector(
    "#total-general"
  ).innerText = `Total: $${total.toLocaleString("es-ES")}`;
}

function borrarTodo() {
  localStorage.removeItem("carrito");
  cardCart();
}

function removeItem(id) {
  const carrito = JSON.parse(localStorage.getItem("carrito")) || [];
  const nuevoCarrito = carrito.filter((card) => card.id !== id);
  localStorage.setItem("carrito", JSON.stringify(nuevoCarrito));
  cardCart(nuevoCarrito);
  const total = nuevoCarrito.reduce(
    (acc, card) => acc + card.price * card.cantidad,
    0
  );
  document.querySelector("#total-general").innerText = `Total: $${total.toFixed(
    2
  )}`;
}

cardCart(JSON.parse(localStorage.getItem("carrito")));
