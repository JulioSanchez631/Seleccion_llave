const contenedorPadre = document.querySelector(".contenedor");

function crearLlave(nombre,modelo,precio,img){
  nombre = `<h2> ${nombre} </h2>`;
  modelo = `<h4 class="models"> ${modelo} </h2>`;
  precio = `<p> <b> ${precio} </b> </p`;
  img  = `<img class="img_key" src="${img}">`
  return {img: img,name: nombre, model: modelo, price: precio};
}

let creacionFragmentKey = document.createDocumentFragment();

for(let i = 0; i < 20; i++){
  let modelo = Math.round(Math.random() * (100 - 1 + 1) + 1);
  let precio = Math.round(Math.random() * (500 - 100 + 1) + 1);
  let llave = crearLlave(`Llave ${i+1}`,`Modelo: ${modelo}`,`Precio: ${precio}`,`https://michapa.com.mx/1971-large_default/forja-llave-virgen-r52l-phillips-original-larga-800-825-850-875.jpg`);
  let box = document.createElement("DIV");
  box.classList.add(`item${i}`,`box-item`);

  // De esta manera logramos colocar un color de fondo diferente(azul) al elemento seleccioado, y dejar en negro todos los demas.
  box.addEventListener("click",() => {
    document.querySelector(".seleccion_llave").value = modelo;
    let select = document.querySelector(`.item${i}`).innerHTML;
    let buscador = select.indexOf(`Modelo: ${modelo}`);
    let todos = document.querySelectorAll(".box-item");
    todos.forEach((elemento) => {
      elemento.style.backgroundColor = "black";
    })
    // console.log(todos);
    if(buscador != -1){
      box.style.backgroundColor = "rgb(0, 90, 0)";
    }
  });

  box.innerHTML = llave.img + llave.name + llave.model + llave.price;
  creacionFragmentKey.appendChild(box);
}

contenedorPadre.appendChild(creacionFragmentKey);