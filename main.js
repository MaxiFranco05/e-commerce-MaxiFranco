console.log("Hello World!")
document.querySelector("h1").innerText = 'Productos'
let array = []
let section = document.querySelector('section')

for (let i = 1; 1 <= 9; i++){
    array.push(`
         <div class="card"> <img src="https://66d9ee6caa07a954166f10ed--gregarious-melba-cacdba.netlify.app/${i}.jpg" class="card-img-top" alt="Auto"> <div class="card-body">
    <h5 class="card-title">Card ${i}</h5> </div>
`)

}

section.innerHTML = array.join("");