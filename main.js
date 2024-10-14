function cards (contain, cont){
    let precio = Math.round(Math.random() * (100000 - 50000) + 50000);
    contain.push(`  <div class="card"> <img src="https://66d9ee6caa07a954166f10ed--gregarious-melba-cacdba.netlify.app/${cont}.jpg" class="card-img-top" alt="Auto"> <div class="card-body"><h5 class="card-title">Auto caro N° ${cont}</h5> <h4>Precio: $${precio}</h4> <a href="#" onClick="numAuto(${cont})">Ver más</a></div></div>  `)
}

function numAuto(numBtn){
    sessionStorage.setItem('numBtn', numBtn);
    console.log(numBtn);
    window.location.href = './Producto/producto.html';
}

console.log("Hello World!")
document.querySelector("h1").innerText = 'Productos'
let array = []
let section = document.querySelector('section')
let numBtn = 1
sessionStorage.setItem('numBtn', numBtn);
console.log(numBtn);

for (let i = 1; i <= 9; i++){
    cards(array, i)
}


section.innerHTML = array.join("");
