// obtenemos los valores del ancho y largo del dispositivo
let heigth = window.innerHeight;
let width = window.innerWidth;

const reyesGodos = [
  "https://www.html6.es/img/rey_atanagildo.png",
  "https://www.html6.es/img/rey_sisebuto.png",
  "https://www.html6.es/img/rey_leovigildo.png",
  "https://www.html6.es/img/rey_recesvinto.png",
  "https://www.html6.es/img/rey_teodorico.png",
];
let contador = 0;

setInterval(() => {
  // creamos numeros aleatorios con el tamaño del dispositivo 
  let pHeigth = Math.floor(Math.random() * heigth);
  let pWidth = Math.floor(Math.random() * width);
  // pasamos los parametros de la posicion de la imagen
  crearImagen(pHeigth , pWidth)

  contador++; // incrementamos contador para recorrer el array de img
  contador === reyesGodos.length - 1 ? contador=0 : null // comparamos asi el contador no sea mayor de longitud que el array 
}, 1000);

function crearImagen(heigth , width){// recibo los parametros 
  // creo la imagen 
  const imagen = document.createElement("img");
  imagen.src = reyesGodos[contador];
  imagen.style.top = `${heigth}px`;// le pasamos las posiciones aleatorias
  imagen.style.left = `${width}px`;
  document.body.append(imagen); // lo agrego al body

  setTimeout(() => { // despues de 600ms borro imagen
    imagen.remove();
  }, 800);
}