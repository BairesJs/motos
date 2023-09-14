(function(){const y=document.createElement("link").relList;if(y&&y.supports&&y.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))f(s);new MutationObserver(s=>{for(const m of s)if(m.type==="childList")for(const b of m.addedNodes)b.tagName==="LINK"&&b.rel==="modulepreload"&&f(b)}).observe(document,{childList:!0,subtree:!0});function C(s){const m={};return s.integrity&&(m.integrity=s.integrity),s.referrerPolicy&&(m.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?m.credentials="include":s.crossOrigin==="anonymous"?m.credentials="omit":m.credentials="same-origin",m}function f(s){if(s.ep)return;s.ep=!0;const m=C(s);fetch(s.href,m)}})();w();function w(){const E=()=>{let n=document.createElement("div");n.id="mydiv";let o=document.createElement("img");o.src="img/svg/logos/superBike-logo.svg",n.appendChild(o);let a=document.createElement("div");a.id="myDiv2",a.innerHTML=`
  
        &#160;&#160;&#160;&#160;
    <a id="whatsapp" style = "text-decoration: none;" href="https://api.whatsapp.com/send?phone=1134795400">
    <img  src="img/svg/contacto/whatsapp-80.svg" alt="whatsapp" style="width: 40px; height: auto;"></a>
    &#160;&#160;&#160;&#160;
    <a href="https://www.instagram.com/preciodeamigo.ar/" style="text-decoration: none;">
    <img src="img/svg/contacto/instagram-80.svg" alt="Instagram" width="100" style="width: 40px; height: auto;">
    </a>
    
`,n.appendChild(a),document.body.appendChild(n)},y=()=>{let n=document.createElement("hr");document.body.appendChild(n);var o=document.createElement("div");o.id="myDivNav",document.body.appendChild(o);var a=document.createElement("div");a.className="mydivClass",a.id="btnInicio",a.innerHTML="Honda",o.appendChild(a),document.getElementById("btnInicio").addEventListener("click",()=>{f()});var l=document.createElement("div");l.className="mydivClass",l.id="btnQsomos",l.innerHTML="Yamaha",o.appendChild(l),document.getElementById("btnQsomos").addEventListener("click",()=>{s()});var p=document.createElement("div");p.className="mydivClass",p.id="btnDescargas",p.innerHTML="Suzuki",o.appendChild(p),document.getElementById("btnDescargas").addEventListener("click",()=>{m()});var u=document.createElement("div");u.className="mydivClass",u.id="btnContacto",u.innerHTML="Benelli",o.appendChild(u),document.getElementById("btnContacto").addEventListener("click",()=>{b()})},C=()=>{let n=document.createElement("div");n.id="myDivNav2",n.innerHTML=`
    <div class = "marcoDivNav2">
    SportBike es una empresa líder multimarca en la venta de motocicletas.<br>
    Se distingue por su atención al cliente, servicio postventa excepcional y entregas a tiempo en todo el país.<br>
    Ofrecen una amplia gama de motos para satisfacer las necesidades, de principiantes y expertos.<br>
    Su compromiso es proporcionar una experiencia completa y satisfactoria, fomentando la pasión por el motociclismo
    y promoviendo la seguridad en la carretera.<br>
    Su visión es convertirse en la opción preferida para la compra de motocicletas en todo el país, manteniendo
    altos estándares de calidad y servicio al cliente.<br>
    </div>
  `,document.body.appendChild(n)},f=()=>{document.querySelector("#myDivNav2").innerHTML=`
    <div class = "marcoDivNav2">
                            <select id="contacto">
                            <option value="">Seleccionar Artículo</option>
                            </select>


                            <div id="resultado"></div>

                            <div id="idCatalogo"></div>
                            <div>
                            `,document.querySelector("#idCatalogo").innerHTML=`                    
                  
                    
                    <div class="container">
                    <div id="cards-container"></div>
                    <br>
                    <div class="row" id="items"></div>

                    <template id="template-card">
                        <div class="col-12 mb-2 col-md-4">
                            <div class="card">
                                    <img src="" alt="" class="img-card-top">
                                            <div class="card-body">
                                                <h5>Titulo</h5>
                                                <p>precio</p>
                                                <button class="btn btn-dark"><a href="https://listado.mercadolibre.com.ar/_CustId_87005029" class="btn btn-dark">Tienda</a></button>
                                            </div>
                            </div>
                        </div>
                    </template>
                    </div>
                   
  `;const n=document.getElementById("items"),o=document.getElementById("template-card").content,a=document.createDocumentFragment(),l=async()=>{try{const t=await(await fetch("catalogo/mensula.json")).json();p(t)}catch(e){console.log(e)}},p=e=>{e.forEach(t=>{o.querySelector("h5").textContent=t.title,o.querySelector("p").textContent=t.precio,o.querySelector("img").setAttribute("src",t.thumbnailUrl),o.querySelector(".btn-dark").dataset.id=t.id;const d=o.cloneNode(!0);a.appendChild(d)}),n.appendChild(a)};l();async function u(){const e=document.querySelector("#contacto"),t=document.querySelector("#idCatalogo");if(!e.value){t.textContent="";return}try{const r=await(await fetch("catalogo/mensula.json")).json(),g=e.value.toLowerCase(),v=r.filter(i=>i.title.toLowerCase()===g);v.length>0?(t.innerHTML="",v.forEach(i=>{t.innerHTML+=`
         <div style="display: grid; place-content: center;">
         <hr>
          <h5> Título: ${i.title}</h5>
          <p><h5> Precio: ${i.precio}</h5></p>
          <img src="${i.thumbnailUrl}">
          <hr>
          
          <button class="btn btn-dark"><a href="https://listado.mercadolibre.com.ar/_CustId_87005029" class="btn btn-dark">Tienda</a></button>
                                           
          <hr>
          </div>
        `})):t.textContent="No se encontraron resultados."}catch(c){console.error("Error al cargar el archivo JSON:",c)}}async function h(){const e=document.getElementById("contacto");try{(await(await fetch("catalogo/mensula.json")).json()).forEach(c=>{const r=document.createElement("option");r.value=c.title,r.textContent=c.title,e.appendChild(r)}),e.addEventListener("change",u)}catch(t){console.error("Error al cargar el archivo JSON:",t)}}h()},s=()=>{document.querySelector("#myDivNav2").innerHTML=`
    <div class = "marcoDivNav2">
                            <select id="contacto">
                            <option value="">Seleccionar Artículo</option>
                            </select>


                            <div id="resultado"></div>

                            <div id="idCatalogo"></div> 
                            </div>
                            `,document.querySelector("#idCatalogo").innerHTML=`                    
                                    
                    
                    <div class="container">
                    <div id="cards-container"></div>
                    <br>
                    <div class="row" id="items"></div>

                    <template id="template-card">
                        <div class="col-12 mb-2 col-md-4">
                            <div class="card">
                                    <img src="" alt="" class="img-card-top">
                                            <div class="card-body">
                                                <h5>Titulo</h5>
                                                <p>precio</p>
                                                <button class="btn btn-dark"><a href="https://listado.mercadolibre.com.ar/_CustId_87005029" class="btn btn-dark">Tienda</a></button>
                                           
                                            </div>
                            </div>
                        </div>
                    </template>
                    </div>
  `;const n=document.getElementById("items"),o=document.getElementById("template-card").content,a=document.createDocumentFragment(),l=async()=>{try{const t=await(await fetch("catalogo/escritorio.json")).json();p(t)}catch(e){console.log(e)}},p=e=>{e.forEach(t=>{o.querySelector("h5").textContent=t.title,o.querySelector("p").textContent=t.precio,o.querySelector("img").setAttribute("src",t.thumbnailUrl),o.querySelector(".btn-dark").dataset.id=t.id;const d=o.cloneNode(!0);a.appendChild(d)}),n.appendChild(a)};l();async function u(){const e=document.querySelector("#contacto"),t=document.querySelector("#idCatalogo");if(!e.value){t.textContent="";return}try{const r=await(await fetch("catalogo/escritorio.json")).json(),g=e.value.toLowerCase(),v=r.filter(i=>i.title.toLowerCase()===g);v.length>0?(t.innerHTML="",v.forEach(i=>{t.innerHTML+=`
         <div style="display: grid; place-content: center;">
         <hr>
          <h5> Título: ${i.title}</h5>
          <p><h5> Precio: ${i.precio}</h5></p>
          <img src="${i.thumbnailUrl}">
          <hr>
          <button class="btn btn-dark"><a href="https://listado.mercadolibre.com.ar/_CustId_87005029" class="btn btn-dark">Tienda</a></button>
          
          <hr>
          </div>
        `})):t.textContent="No se encontraron resultados."}catch(c){console.error("Error al cargar el archivo JSON:",c)}}async function h(){const e=document.getElementById("contacto");try{(await(await fetch("catalogo/escritorio.json")).json()).forEach(c=>{const r=document.createElement("option");r.value=c.title,r.textContent=c.title,e.appendChild(r)}),e.addEventListener("change",u)}catch(t){console.error("Error al cargar el archivo JSON:",t)}}h()},m=()=>{document.querySelector("#myDivNav2").innerHTML=`
    <div class = "marcoDivNav2">
                            <select id="contacto">
                            <option value="">Seleccionar Artículo</option>
                            </select>


                            <div id="resultado"></div>

                            <div id="idCatalogo"></div>
                            </div>
                            `,document.querySelector("#idCatalogo").innerHTML=`                    
                                    
                    
                    <div class="container">
                    <div id="cards-container"></div>
                    <br>
                    <div class="row" id="items"></div>

                    <template id="template-card">
                        <div class="col-12 mb-2 col-md-4">
                            <div class="card">
                                    <img src="" alt="" class="img-card-top">
                                            <div class="card-body">
                                                <h5>Titulo</h5>
                                                <p>precio</p>
                                                <button class="btn btn-dark"><a href="https://listado.mercadolibre.com.ar/_CustId_87005029" class="btn btn-dark">Tienda</a></button>
                                           
                                            </div>
                            </div>
                        </div>
                    </template>
                    </div>
  `;const n=document.getElementById("items"),o=document.getElementById("template-card").content,a=document.createDocumentFragment(),l=async()=>{try{const t=await(await fetch("catalogo/ratona.json")).json();p(t)}catch(e){console.log(e)}},p=e=>{e.forEach(t=>{o.querySelector("h5").textContent=t.title,o.querySelector("p").textContent=t.precio,o.querySelector("img").setAttribute("src",t.thumbnailUrl),o.querySelector(".btn-dark").dataset.id=t.id;const d=o.cloneNode(!0);a.appendChild(d)}),n.appendChild(a)};l();async function u(){const e=document.querySelector("#contacto"),t=document.querySelector("#idCatalogo");if(!e.value){t.textContent="";return}try{const r=await(await fetch("catalogo/ratona.json")).json(),g=e.value.toLowerCase(),v=r.filter(i=>i.title.toLowerCase()===g);v.length>0?(t.innerHTML="",v.forEach(i=>{t.innerHTML+=`
         <div style="display: grid; place-content: center;">
         <hr>
          <h5> Título: ${i.title}</h5>
          <p><h5> Precio: ${i.precio}</h5></p>
          <img src="${i.thumbnailUrl}">
          <hr>
          <button class="btn btn-dark"><a href="https://listado.mercadolibre.com.ar/_CustId_87005029" class="btn btn-dark">Tienda</a></button>
          
          <hr>
          </div>
        `})):t.textContent="No se encontraron resultados."}catch(c){console.error("Error al cargar el archivo JSON:",c)}}async function h(){const e=document.getElementById("contacto");try{(await(await fetch("catalogo/ratona.json")).json()).forEach(c=>{const r=document.createElement("option");r.value=c.title,r.textContent=c.title,e.appendChild(r)}),e.addEventListener("change",u)}catch(t){console.error("Error al cargar el archivo JSON:",t)}}h()},b=()=>{document.querySelector("#myDivNav2").innerHTML=`
    <div class = "marcoDivNav2">
                            <select id="contacto">
                            <option value="">Seleccionar Artículo</option>
                            </select>


                            <div id="resultado"></div>

                            <div id="idCatalogo"></div>
                            </div>
                            `,document.querySelector("#idCatalogo").innerHTML=`                    
                                    
                    
                    <div class="container">
                    <div id="cards-container"></div>
                    <br>
                    <div class="row" id="items"></div>

                    <template id="template-card">
                        <div class="col-12 mb-2 col-md-4">
                            <div class="card">
                                    <img src="" alt="" class="img-card-top">
                                            <div class="card-body">
                                                <h5>Titulo</h5>
                                                <p>precio</p>
                                                <button class="btn btn-dark"><a href="https://listado.mercadolibre.com.ar/_CustId_87005029" class="btn btn-dark">Tienda</a></button>
                                           
                                            </div>
                            </div>
                        </div>
                    </template>
                    </div>
  `;const n=document.getElementById("items"),o=document.getElementById("template-card").content,a=document.createDocumentFragment(),l=async()=>{try{const t=await(await fetch("catalogo/varios.json")).json();p(t)}catch(e){console.log(e)}},p=e=>{e.forEach(t=>{o.querySelector("h5").textContent=t.title,o.querySelector("p").textContent=t.precio,o.querySelector("img").setAttribute("src",t.thumbnailUrl),o.querySelector(".btn-dark").dataset.id=t.id;const d=o.cloneNode(!0);a.appendChild(d)}),n.appendChild(a)};l();async function u(){const e=document.querySelector("#contacto"),t=document.querySelector("#idCatalogo");if(!e.value){t.textContent="";return}try{const r=await(await fetch("catalogo/varios.json")).json(),g=e.value.toLowerCase(),v=r.filter(i=>i.title.toLowerCase()===g);v.length>0?(t.innerHTML="",v.forEach(i=>{t.innerHTML+=`
         <div style="display: grid; place-content: center;">
         <hr>
          <h5> Título: ${i.title}</h5>
          <p><h5> Precio: ${i.precio}</h5></p>
          <img src="${i.thumbnailUrl}">
          <hr>
          <button class="btn btn-dark"><a href="https://listado.mercadolibre.com.ar/_CustId_87005029" class="btn btn-dark">Tienda</a></button>
          
          <hr>
          </div>
        `})):t.textContent="No se encontraron resultados."}catch(c){console.error("Error al cargar el archivo JSON:",c)}}async function h(){const e=document.getElementById("contacto");try{(await(await fetch("catalogo/varios.json")).json()).forEach(c=>{const r=document.createElement("option");r.value=c.title,r.textContent=c.title,e.appendChild(r)}),e.addEventListener("change",u)}catch(t){console.error("Error al cargar el archivo JSON:",t)}}h()},S=()=>{let n=document.createElement("div"),o=document.createElement("div");o.id="divDatos1",o.innerHTML=`
    <a id="whatsapp" style = "text-decoration: none;" href="https://api.whatsapp.com/send?phone=1134795400">
    <img  src="img/svg/contacto/whatsapp-80.svg" alt="whatsapp" style="width: 40px; height: auto;"></a>
    &#160;&#160;
    <a href="https://www.instagram.com/preciodeamigo.ar/" style="text-decoration: none;">
    <img src="img/svg/contacto/instagram-80.svg" alt="Instagram" width="100" style="width: 40px; height: auto;">
    </a>
    <hr>
    `,n.appendChild(o),n.id="mydivPie";let a=document.createElement("img");a.id="img1",a.src="img/svg/logos/superBike-pie.svg";let l=document.createElement("hr");document.body.appendChild(l),n.appendChild(a),document.body.appendChild(n)};E(),y(),C(),S()}
