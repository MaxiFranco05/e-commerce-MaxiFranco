class prod {
    constructor(titulo, detalle, precio, stock, imagen){
    this.titulo = titulo;
    this.detalle = detalle;
    this.precio = precio;
    this.stock = stock;
    this.imagen = imagen
    }
}
// let numAuto = Number(window.prompt("¿Cual auto eligió? Ingrese el número del 1 al 9."))
// while (isNaN(numAuto)||numAuto < 1 || numAuto > 9){
//     numAuto = Number(window.prompt("Ingrese un número del 1 al 9"))
// } 

let numAuto = sessionStorage.getItem('numBtn')

let precio = Math.round(Math.random() * (100000 - 50000) + 50000);
let stock = Math.round(Math.random() * (10 - 1) + 1);
const auto = new prod(`Auto caro N°${numAuto}`, 'Vehiculo 0KM <br> 12 meses de garantia', precio, stock, `https://66d9ee6caa07a954166f10ed--gregarious-melba-cacdba.netlify.app/${numAuto}.jpg`);
let sect = document.querySelector('section');
let body = [];
body.push (`  <div class="container">
    <div class="col-12 row border border-dark">
        <div class="col-9 p-0 border border-dark">
            <img src="${auto.imagen}" alt="Auto" style="width: 100%;">
        </div>
        <div class="prod-data col-3 bg-light text-end border border-dark">
        <div>
        <h2>${auto.titulo}</h2>
        <h3>Precio: $${precio}</h3>
        <h5>${auto.detalle}</h5>
      </div>
        <div style="align-items: end;">
        <p class="cuotas">Hasta 18 cuotas sin interes.</p>
        <a href="#" class="btn btn-dark">Comprar</a>
        <p>Quedan: ${auto.stock} vehiculos.</p>
      </div>
    </div>
    </div>
</div>  `);

sect.innerHTML = body.join("");

console.log (numBtn);