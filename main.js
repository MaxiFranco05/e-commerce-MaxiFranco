console.log("Hello World!")
document.querySelector("h1").innerText = 'Productos'
let array = []
let section = document.querySelector('section')

for (let i = 1; i <= 9; i++){
    let precio = Math.round(Math.random() * (100000 - 50000) + 50000);
    array.push(`
         <div class="card"> <img src="https://66d9ee6caa07a954166f10ed--gregarious-melba-cacdba.netlify.app/${i}.jpg" class="card-img-top" alt="Auto"> <div class="card-body">
    <h5 class="card-title">Auto caro N° ${i}</h5> <h4>Precio: $${precio}</h4> <a href="https://66d9ee6caa07a954166f10ed--gregarious-melba-cacdba.netlify.app/${i}.jpg" target="_blank">Ver Auto caro</a></div> </div>
`)
}

section.innerHTML = array.join("");