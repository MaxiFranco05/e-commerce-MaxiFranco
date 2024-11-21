document.querySelector("h1").innerText = "Productos";
const loading = new Promise((res, rej) => {
  setTimeout(() => {
    res("resuelto");
  }, 3000);
});

function cardsPromise() {
  let array = data.map((producto) => [
    `  
    <div class="card"> 
        <img src="${producto.img}" class="card-img-top" alt="Auto">
            <div class="card-body">
                <h5 class="card-title">${producto.title}</h5> 
                <h6 class="categoria">${producto.category}</h6>
                <h6>${producto.details}</h6> 
                <h5>Precio: $${producto.price.toLocaleString("es-ES")}</h5> 
                <h6>Disponibles: ${producto.stock}</h6>
                <a href="./producto.html?prod=${producto.id}">Ver más</a>
            </div>
    </div>  
    `,
  ]);
  let cards = document.querySelector(".container-cards");
  cards.innerHTML = array.join("");
}
loading.then(() => cardsPromise());
function filtrar(category) {
  if (category === "Todos") {
    let array = data.map((producto) => [
      `  
             <div class="card"> 
                 <img src="${producto.img}" class="card-img-top" alt="Auto">
                     <div class="card-body">
                         <h5 class="card-title">${producto.title}</h5> 
                         <h6 class="categoria">${producto.category}</h6>
                         <h6>${producto.details}</h6> 
                         <h5>Precio: $${producto.price.toLocaleString(
                           "es-ES"
                         )}</h5> 
                         <h6>Disponibles: ${producto.stock}</h6>
                         <a href="./producto.html?prod=${
                           producto.id
                         }">Ver más</a>
                     </div>
             </div>  
             `,
    ]);
    let cards = document.querySelector(".container-cards");
    cards.innerHTML = array.join("");
  } else {
    let filtrado = data.filter((filtro) => filtro.category === category);
    array = filtrado.map((mostrar) => [
      `  
        <div class="card"> 
            <img src="${mostrar.img}" class="card-img-top" alt="Auto">
                <div class="card-body">
                    <h5 class="card-title">${mostrar.title}</h5> 
                    <h6 class="categoria">${mostrar.category}</h6>
                    <h6>${mostrar.details}</h6> 
                    <h5>Precio: $${mostrar.price.toLocaleString("es-ES")}</h5> 
                    <h6>Disponibles: ${mostrar.stock}</h6>
                    <a href="./producto.html?prod=${mostrar.id}">Ver más</a>
                </div>
        </div>  
        `,
    ]);

    let cards = document.querySelector(".container-cards");
    cards.innerHTML = array.join("");
  }
}

document.querySelector("input").addEventListener("input", function () {
  const busqueda = this.value.toLowerCase();
  filtroBusqueda(busqueda);
});
function filtroBusqueda(busq) {
  const filtrado = data.filter((car) => car.title.toLowerCase().includes(busq));
  const array = filtrado.map(
    (mostrar) => `  
        <div class="card"> 
            <img src="${mostrar.img}" class="card-img-top" alt="Auto">
            <div class="card-body">
                <h5 class="card-title">${mostrar.title}</h5> 
                <h6 class="categoria">${mostrar.category}</h6>
                <h6>${mostrar.details}</h6> 
                <h5>Precio: $${mostrar.price.toLocaleString("es-ES")}</h5> 
                <h6>Disponibles: ${mostrar.stock}</h6>
                <a href="./producto.html?prod=${mostrar.id}">Ver más</a>
            </div>
        </div>  
    `
  );

  let cards = document.querySelector(".container-cards");
  cards.innerHTML = array.join("");
}
