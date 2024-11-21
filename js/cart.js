document.querySelector(".btn-primary").addEventListener("click", function () {
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
                        <h5 class="mb-0 mt-2">$${card.price.toLocaleString(
                          "es-ES"
                        )}</h5>
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
                        <h5>$${(card.price * card.cantidad).toLocaleString(
                          "es-ES"
                        )}</h5>
                      </div>
                    </div>
                    <div class="col-md-2">
                      <div class="mt-3">
                      <p class="text-muted mb-2" style="cursor: pointer;" onclick="removeItem(${
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
  const total = cards.reduce(
    (acum, card) => acum + card.price * card.cantidad,
    0
  );
  document.querySelector("#total-general").innerText = `$${total.toLocaleString(
    "es-ES"
  )}`;
  ActContador(head);
}

function borrarTodo() {
  localStorage.setItem("carrito", JSON.stringify([]));
  localStorage.setItem("cantidad", 0);
  cardsSect.innerHTML = "Carrito vacío.";
  document.querySelector("#contador-text").innerText = localStorage.cantidad;
  ActContador(head);
}

function removeItem(id) {
  const carrito = JSON.parse(localStorage.getItem("carrito")) || "[]";
  const nuevoCarrito = carrito.filter((card) => card.id !== id);
  localStorage.setItem("carrito", JSON.stringify(nuevoCarrito));
  const cantidadTotal = nuevoCarrito.reduce(
    (acc, card) => acc + card.cantidad,
    0
  );
  localStorage.setItem("cantidad", cantidadTotal);
  document.querySelector("#contador-text").innerText = cantidadTotal;
  cardCart(nuevoCarrito);
  const total = nuevoCarrito.reduce(
    (acc, card) => acc + card.price * card.cantidad,
    0
  );
  document.querySelector("#total-general").innerText = `$${total.toFixed(2)}`;
  if (nuevoCarrito.length == 0) {
    cardsSect.innerHTML = "Carrito vacío.";
  } else {
    cardCart(nuevoCarrito);
  }
  ActContador(head);
}

if (localStorage.getItem("cantidad") == 0) {
  cardsSect.innerHTML = "Carrito vacío.";
} else {
  cardCart(JSON.parse(localStorage.getItem("carrito")));
}
ActContador(head);

function checkout() {
  if (localStorage.getItem("cantidad") >= 1) {
    const datos = {
      email: localStorage.getItem("email"),
      user: localStorage.getItem("name"),
      items: JSON.parse(localStorage.getItem("carrito")),
    };
    fetch("https://673d09dd4db5a341d833d038.mockapi.io/orders", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(datos),
    })
      .then((resp) => resp.json())
      .then((data) => {
        console.log(data),
          Swal.fire({
            title: "¡Pedido exitoso!",
            text: `Gracias ${data.user}. Su pedido #${data.id} fue agregado con exito.`,
            icon: "success",
          }),
          borrarTodo();
      })
      .catch((data) => {
        Swal.fire({
          title: "Pedido fallido 🙁",
          text: `Lo sentimos ${data.user}. Su pedido no pudo ser procesado.`,
          icon: "error",
        });
      });
  } else {
    console.error(localStorage.getItem("cantidad") >= 1);
  }
}
