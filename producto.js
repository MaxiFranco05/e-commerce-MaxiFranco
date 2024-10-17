let id = window.location.search.split("=")[1];
let sect = document.querySelector("section");
let producto = data.find((producto) => producto.id == id);

sect.innerHTML = `  <div class="container">
    <div class="col-12 row border border-dark">
        <div class="col-9 p-0 border border-dark">
            <img src="${producto.img}" alt="Auto" style="width: 100%; height: 100%;">
        </div>
        <div class="prod-data col-3 bg-light text-end border border-dark">
        <div>
        <h2>${producto.title}</h2>
        <h3>Precio: $${producto.price}</h3>
        <h5>${producto.details}</h5>
      </div>
        <div style="align-items: end;">
        <p class="cuotas">Hasta 18 cuotas sin interes.</p>
        <a href="#" class="btn btn-dark">Comprar</a>
        <p>Quedan: ${producto.stock} vehiculos.</p>
      </div>
    </div>
    </div>
</div>  `;