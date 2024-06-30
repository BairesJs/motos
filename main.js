import { miBannerJs } from "./cabecera.js";
import { barraNav1 } from "./navegacion.js";
import { barraNav2 } from "./contenido.js";
import { mensula } from "./mensula.js";
import { escritorio } from "./escritorio.js";
import { ratona } from "./ratona.js";
import { varios } from "./varios.js";
import { pieDePaginaJs } from "./pie.js";


document.querySelector('#app').innerHTML = `
  ${miBannerJs()}
  ${barraNav1()}
  ${barraNav2()}
  ${pieDePaginaJs()}
  
`;
//Adding event listeners after the HTML is inserted into the DOM
document.getElementById("btnInicio").addEventListener("click", () => { mensula() });
document.getElementById("btnQsomos").addEventListener("click", () => { escritorio() });
document.getElementById("btnDescargas").addEventListener("click", () => { ratona() });
document.getElementById("btnContacto").addEventListener("click", () => { varios() });







