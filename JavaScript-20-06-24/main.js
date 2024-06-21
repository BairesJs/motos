import { miBannerJs} from "./cabecera";
import {barraNav1} from "./barraMenu";
import {barraNav2} from "./contenido";

main()
function main() {
    //Cabecera////////////////////////////////////////////////////////////////////////////
    miBannerJs()
    //Barra de Navegacion Menu////////////////////////////////////////////////////////////
    barraNav1()
    //Contenido///////////////////////////////////////////////////////////////////////////
    barraNav2()
    //Mensulas////////////////////////////////////////////////////////////////////////////
    const mensula = () => {

        document.querySelector('#myDivNav2').innerHTML = `
    <div class = "marcoDivNav2">
                            <select id="contacto">
                            <option value="">Seleccionar Artículo</option>
                            </select>


                            <div id="resultado"></div>

                            <div id="idCatalogo"></div>
                            <div>
                            `

        document.querySelector('#idCatalogo').innerHTML = `                    
                  
                    
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
                   
  `
        //Api//////////////////////////////////////////////////////////////
        //const input = document.querySelector('#inputBuscar')

        const items = document.getElementById('items')
        const templateCard = document.getElementById('template-card').content
        const fragment = document.createDocumentFragment()

        const fetchData = async () => {
            try {

                const res = await fetch('catalogo/mensula.json')
                const data = await res.json()


                pintarCards(data)
                //console.log(data)

            } catch (error) {
                console.log(error)

            }
        }

        const pintarCards = data => {
            data.forEach(producto => {
                templateCard.querySelector('h5').textContent = producto.title
                templateCard.querySelector('p').textContent = producto.precio
                templateCard.querySelector('img').setAttribute("src", producto.thumbnailUrl)
                templateCard.querySelector('.btn-dark').dataset.id = producto.id
                const clone = templateCard.cloneNode(true)
                fragment.appendChild(clone)


            })
            items.appendChild(fragment)
        }
        fetchData()
        //////////////////////////////////////////////////////////////////////////////
        async function mostrarNombreYTelefono() {
            const selectContacto = document.querySelector('#contacto');
            const resultado = document.querySelector('#idCatalogo');
            const contactoSeleccionado = selectContacto.value;

            if (!contactoSeleccionado) {
                resultado.textContent = "";
                return;
            }
            /*
            try {
                const response = await fetch('../catalogo/api.json');
                const contactos = await response.json();
        
                const contactoEncontrado = contactos.find(contacto =>
                    contacto.title.toLowerCase() === contactoSeleccionado.toLowerCase()
                );
        
        
        
                if (contactoEncontrado) {
                        resultado.innerHTML = `
                        <hr>
                        <h5> Titulo: ${contactoEncontrado.title}</h5>,
                        <P><h5> Precio: ${contactoEncontrado.precio}<h5></P>
                        <img src=" ${contactoEncontrado.thumbnailUrl}">
                        <hr>
                        <button style="btn-dark">Ver producto en Tienda</button>
                        <hr>
                        `;
                    
                } else {
                    resultado.textContent = "El contacto seleccionado no está en la lista de contactos.";
                }
            } catch (error) {
                console.error('Error al cargar el archivo JSON:', error);
            }
            */
            //-------------------------------------------------------------------------------------
            try {

                const response = await fetch('catalogo/mensula.json');
                const contactos = await response.json();
                const contactoSeleccionado = selectContacto.value.toLowerCase(); // Convertir a minúsculas

                const contactosEncontrados = contactos.filter(contacto =>
                    contacto.title.toLowerCase() === contactoSeleccionado
                );

                if (contactosEncontrados.length > 0) {

                    //  Limpiar el contenido anterior
                    resultado.innerHTML = "";
                    contactosEncontrados.forEach(contacto => {
                        resultado.innerHTML += `
         <div style="display: grid; place-content: center;">

         <h5> Título: ${contacto.title}</h5>
          <p><h5> Precio: ${contacto.precio}</h5></p>
          <img src="${contacto.thumbnailUrl}">
          <br>
          
          <button class="btn btn-dark"><a href="https://listado.mercadolibre.com.ar/_CustId_87005029" class="btn btn-dark">Tienda</a></button>
                                           
          
          </div>
        `;

                    });
                } else {
                    resultado.textContent = "No se encontraron resultados.";
                }
            } catch (error) {
                console.error('Error al cargar el archivo JSON:', error);
            }

            //-------------------------------------------------------------------------------------



        }

        // Cargar opciones del select desde el archivo JSON
        async function cargarOpcionesSelect() {
            const selectContacto = document.getElementById('contacto');

            try {
                const response = await fetch('catalogo/mensula.json');
                const contactos = await response.json();

                contactos.forEach(contacto => {
                    const option = document.createElement('option');
                    option.value = contacto.title;
                    option.textContent = contacto.title;
                    selectContacto.appendChild(option);
                });

                // Agregar un evento change al select para mostrar automáticamente al seleccionar
                selectContacto.addEventListener('change', mostrarNombreYTelefono);
            } catch (error) {
                console.error('Error al cargar el archivo JSON:', error);
            }
        }
        cargarOpcionesSelect()





    }
    //Escritorio/////////////////////////////////////////////////////////////////////////
    const escritorio = () => {

        document.querySelector('#myDivNav2').innerHTML = `
    <div class = "marcoDivNav2">
                            <select id="contacto">
                            <option value="">Seleccionar Artículo</option>
                            </select>


                            <div id="resultado"></div>

                            <div id="idCatalogo"></div> 
                            </div>
                            `

        document.querySelector('#idCatalogo').innerHTML = `                    
                                    
                    
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
  `
        //Api//////////////////////////////////////////////////////////////
        //const input = document.querySelector('#inputBuscar')

        const items = document.getElementById('items')
        const templateCard = document.getElementById('template-card').content
        const fragment = document.createDocumentFragment()

        const fetchData = async () => {
            try {

                const res = await fetch('catalogo/escritorio.json')
                const data = await res.json()


                pintarCards(data)
                //console.log(data)

            } catch (error) {
                console.log(error)

            }
        }

        const pintarCards = data => {
            data.forEach(producto => {
                templateCard.querySelector('h5').textContent = producto.title
                templateCard.querySelector('p').textContent = producto.precio
                templateCard.querySelector('img').setAttribute("src", producto.thumbnailUrl)
                templateCard.querySelector('.btn-dark').dataset.id = producto.id
                const clone = templateCard.cloneNode(true)
                fragment.appendChild(clone)


            })
            items.appendChild(fragment)
        }
        fetchData()
        //////////////////////////////////////////////////////////////////////////////
        async function mostrarNombreYTelefono() {
            const selectContacto = document.querySelector('#contacto');
            const resultado = document.querySelector('#idCatalogo');
            const contactoSeleccionado = selectContacto.value;

            if (!contactoSeleccionado) {
                resultado.textContent = "";
                return;
            }
            /*
            try {
                const response = await fetch('../catalogo/api.json');
                const contactos = await response.json();
        
                const contactoEncontrado = contactos.find(contacto =>
                    contacto.title.toLowerCase() === contactoSeleccionado.toLowerCase()
                );
        
        
        
                if (contactoEncontrado) {
                        resultado.innerHTML = `
                        <hr>
                        <h5> Titulo: ${contactoEncontrado.title}</h5>,
                        <P><h5> Precio: ${contactoEncontrado.precio}<h5></P>
                        <img src=" ${contactoEncontrado.thumbnailUrl}">
                        <hr>
                        <button style="btn-dark">Ver producto en Tienda</button>
                        <hr>
                        `;
                    
                } else {
                    resultado.textContent = "El contacto seleccionado no está en la lista de contactos.";
                }
            } catch (error) {
                console.error('Error al cargar el archivo JSON:', error);
            }
            */
            //-------------------------------------------------------------------------------------
            try {

                const response = await fetch('catalogo/escritorio.json');
                const contactos = await response.json();
                const contactoSeleccionado = selectContacto.value.toLowerCase(); // Convertir a minúsculas

                const contactosEncontrados = contactos.filter(contacto =>
                    contacto.title.toLowerCase() === contactoSeleccionado
                );

                if (contactosEncontrados.length > 0) {

                    //  Limpiar el contenido anterior
                    resultado.innerHTML = "";
                    contactosEncontrados.forEach(contacto => {
                        resultado.innerHTML += `
         <div style="display: grid; place-content: center;">
         
          <h5> Título: ${contacto.title}</h5>
          <p><h5> Precio: ${contacto.precio}</h5></p>
          <img src="${contacto.thumbnailUrl}">
          
          <button class="btn btn-dark"><a href="https://listado.mercadolibre.com.ar/_CustId_87005029" class="btn btn-dark">Tienda</a></button>
          
        
          </div>
        `;

                    });
                } else {
                    resultado.textContent = "No se encontraron resultados.";
                }
            } catch (error) {
                console.error('Error al cargar el archivo JSON:', error);
            }

            //-------------------------------------------------------------------------------------



        }

        // Cargar opciones del select desde el archivo JSON
        async function cargarOpcionesSelect() {
            const selectContacto = document.getElementById('contacto');

            try {
                const response = await fetch('catalogo/escritorio.json');
                const contactos = await response.json();

                contactos.forEach(contacto => {
                    const option = document.createElement('option');
                    option.value = contacto.title;
                    option.textContent = contacto.title;
                    selectContacto.appendChild(option);
                });

                // Agregar un evento change al select para mostrar automáticamente al seleccionar
                selectContacto.addEventListener('change', mostrarNombreYTelefono);
            } catch (error) {
                console.error('Error al cargar el archivo JSON:', error);
            }
        }
        cargarOpcionesSelect()





    }
    //Mesa Ratona/////////////////////////////////////////////////////////////////////////
    const ratona = () => {

        document.querySelector('#myDivNav2').innerHTML = `
    <div class = "marcoDivNav2">
                            <select id="contacto">
                            <option value="">Seleccionar Artículo</option>
                            </select>


                            <div id="resultado"></div>

                            <div id="idCatalogo"></div>
                            </div>
                            `

        document.querySelector('#idCatalogo').innerHTML = `                    
                                    
                    
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
  `
        //Api//////////////////////////////////////////////////////////////
        //const input = document.querySelector('#inputBuscar')

        const items = document.getElementById('items')
        const templateCard = document.getElementById('template-card').content
        const fragment = document.createDocumentFragment()

        const fetchData = async () => {
            try {

                const res = await fetch('catalogo/ratona.json')
                const data = await res.json()


                pintarCards(data)
                //console.log(data)

            } catch (error) {
                console.log(error)

            }
        }

        const pintarCards = data => {
            data.forEach(producto => {
                templateCard.querySelector('h5').textContent = producto.title
                templateCard.querySelector('p').textContent = producto.precio
                templateCard.querySelector('img').setAttribute("src", producto.thumbnailUrl)
                templateCard.querySelector('.btn-dark').dataset.id = producto.id
                const clone = templateCard.cloneNode(true)
                fragment.appendChild(clone)


            })
            items.appendChild(fragment)
        }
        fetchData()
        //////////////////////////////////////////////////////////////////////////////
        async function mostrarNombreYTelefono() {
            const selectContacto = document.querySelector('#contacto');
            const resultado = document.querySelector('#idCatalogo');
            const contactoSeleccionado = selectContacto.value;

            if (!contactoSeleccionado) {
                resultado.textContent = "";
                return;
            }
            /*
            try {
                const response = await fetch('../catalogo/api.json');
                const contactos = await response.json();
        
                const contactoEncontrado = contactos.find(contacto =>
                    contacto.title.toLowerCase() === contactoSeleccionado.toLowerCase()
                );
        
        
        
                if (contactoEncontrado) {
                        resultado.innerHTML = `
                        <hr>
                        <h5> Titulo: ${contactoEncontrado.title}</h5>,
                        <P><h5> Precio: ${contactoEncontrado.precio}<h5></P>
                        <img src=" ${contactoEncontrado.thumbnailUrl}">
                        <hr>
                        <button style="btn-dark">Ver producto en Tienda</button>
                        <hr>
                        `;
                    
                } else {
                    resultado.textContent = "El contacto seleccionado no está en la lista de contactos.";
                }
            } catch (error) {
                console.error('Error al cargar el archivo JSON:', error);
            }
            */
            //-------------------------------------------------------------------------------------
            try {

                const response = await fetch('catalogo/ratona.json');
                const contactos = await response.json();
                const contactoSeleccionado = selectContacto.value.toLowerCase(); // Convertir a minúsculas

                const contactosEncontrados = contactos.filter(contacto =>
                    contacto.title.toLowerCase() === contactoSeleccionado
                );

                if (contactosEncontrados.length > 0) {

                    //  Limpiar el contenido anterior
                    resultado.innerHTML = "";
                    contactosEncontrados.forEach(contacto => {
                        resultado.innerHTML += `
         <div style="display: grid; place-content: center;">
        
          <h5> Título: ${contacto.title}</h5>
          <p><h5> Precio: ${contacto.precio}</h5></p>
          <img src="${contacto.thumbnailUrl}">
          
          <button class="btn btn-dark"><a href="https://listado.mercadolibre.com.ar/_CustId_87005029" class="btn btn-dark">Tienda</a></button>
          
          
          </div>
        `;

                    });
                } else {
                    resultado.textContent = "No se encontraron resultados.";
                }
            } catch (error) {
                console.error('Error al cargar el archivo JSON:', error);
            }

            //-------------------------------------------------------------------------------------



        }

        // Cargar opciones del select desde el archivo JSON
        async function cargarOpcionesSelect() {
            const selectContacto = document.getElementById('contacto');

            try {
                const response = await fetch('catalogo/ratona.json');
                const contactos = await response.json();

                contactos.forEach(contacto => {
                    const option = document.createElement('option');
                    option.value = contacto.title;
                    option.textContent = contacto.title;
                    selectContacto.appendChild(option);
                });

                // Agregar un evento change al select para mostrar automáticamente al seleccionar
                selectContacto.addEventListener('change', mostrarNombreYTelefono);
            } catch (error) {
                console.error('Error al cargar el archivo JSON:', error);
            }
        }
        cargarOpcionesSelect()





    }
    //Varios//////////////////////////////////////////////////////////////////////////////
    const varios = () => {

        document.querySelector('#myDivNav2').innerHTML = `
    <div class = "marcoDivNav2">
                            <select id="contacto">
                            <option value="">Seleccionar Artículo</option>
                            </select>


                            <div id="resultado"></div>

                            <div id="idCatalogo"></div>
                            </div>
                            `

        document.querySelector('#idCatalogo').innerHTML = `                    
                                    
                    
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
  `
        //Api//////////////////////////////////////////////////////////////
        //const input = document.querySelector('#inputBuscar')

        const items = document.getElementById('items')
        const templateCard = document.getElementById('template-card').content
        const fragment = document.createDocumentFragment()

        const fetchData = async () => {
            try {

                const res = await fetch('catalogo/varios.json')
                const data = await res.json()


                pintarCards(data)
                //console.log(data)

            } catch (error) {
                console.log(error)

            }
        }

        const pintarCards = data => {
            data.forEach(producto => {
                templateCard.querySelector('h5').textContent = producto.title
                templateCard.querySelector('p').textContent = producto.precio
                templateCard.querySelector('img').setAttribute("src", producto.thumbnailUrl)
                templateCard.querySelector('.btn-dark').dataset.id = producto.id
                const clone = templateCard.cloneNode(true)
                fragment.appendChild(clone)


            })
            items.appendChild(fragment)
        }
        fetchData()
        //////////////////////////////////////////////////////////////////////////////
        async function mostrarNombreYTelefono() {
            const selectContacto = document.querySelector('#contacto');
            const resultado = document.querySelector('#idCatalogo');
            const contactoSeleccionado = selectContacto.value;

            if (!contactoSeleccionado) {
                resultado.textContent = "";
                return;
            }
            /*
            try {
                const response = await fetch('../catalogo/api.json');
                const contactos = await response.json();
        
                const contactoEncontrado = contactos.find(contacto =>
                    contacto.title.toLowerCase() === contactoSeleccionado.toLowerCase()
                );
        
        
        
                if (contactoEncontrado) {
                        resultado.innerHTML = `
                        <hr>
                        <h5> Titulo: ${contactoEncontrado.title}</h5>,
                        <P><h5> Precio: ${contactoEncontrado.precio}<h5></P>
                        <img src=" ${contactoEncontrado.thumbnailUrl}">
                        <hr>
                        <button style="btn-dark">Ver producto en Tienda</button>
                        <hr>
                        `;
                    
                } else {
                    resultado.textContent = "El contacto seleccionado no está en la lista de contactos.";
                }
            } catch (error) {
                console.error('Error al cargar el archivo JSON:', error);
            }
            */
            //-------------------------------------------------------------------------------------
            try {

                const response = await fetch('catalogo/varios.json');
                const contactos = await response.json();
                const contactoSeleccionado = selectContacto.value.toLowerCase(); // Convertir a minúsculas

                const contactosEncontrados = contactos.filter(contacto =>
                    contacto.title.toLowerCase() === contactoSeleccionado
                );

                if (contactosEncontrados.length > 0) {

                    //  Limpiar el contenido anterior
                    resultado.innerHTML = "";
                    contactosEncontrados.forEach(contacto => {
                        resultado.innerHTML += `
         <div style="display: grid; place-content: center;">
        
          <h5> Título: ${contacto.title}</h5>
          <p><h5> Precio: ${contacto.precio}</h5></p>
          <img src="${contacto.thumbnailUrl}">
          
          <button class="btn btn-dark"><a href="https://listado.mercadolibre.com.ar/_CustId_87005029" class="btn btn-dark">Tienda</a></button>
          
        
          </div>
        `;

                    });
                } else {
                    resultado.textContent = "No se encontraron resultados.";
                }
            } catch (error) {
                console.error('Error al cargar el archivo JSON:', error);
            }

            //-------------------------------------------------------------------------------------



        }

        // Cargar opciones del select desde el archivo JSON
        async function cargarOpcionesSelect() {
            const selectContacto = document.getElementById('contacto');

            try {
                const response = await fetch('catalogo/varios.json');
                const contactos = await response.json();

                contactos.forEach(contacto => {
                    const option = document.createElement('option');
                    option.value = contacto.title;
                    option.textContent = contacto.title;
                    selectContacto.appendChild(option);
                });

                // Agregar un evento change al select para mostrar automáticamente al seleccionar
                selectContacto.addEventListener('change', mostrarNombreYTelefono);
            } catch (error) {
                console.error('Error al cargar el archivo JSON:', error);
            }
        }
        cargarOpcionesSelect()





    }
    //cascos /////////////////////////////////////////////////////////////////////////////
    const cascos = () => {

        document.querySelector('#myDivNav2').innerHTML = `
    <div class = "marcoDivNav2">
                            <select id="contacto">
                            <option value="">Seleccionar Artículo</option>
                            </select>


                            <div id="resultado"></div>

                            <div id="idCatalogo"></div>
                            </div>
                            `

        document.querySelector('#idCatalogo').innerHTML = `                    
                                    
                    
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
  `
        //Api//////////////////////////////////////////////////////////////
        //const input = document.querySelector('#inputBuscar')

        const items = document.getElementById('items')
        const templateCard = document.getElementById('template-card').content
        const fragment = document.createDocumentFragment()

        const fetchData = async () => {
            try {

                const res = await fetch('catalogo/cascos.json')
                const data = await res.json()


                pintarCards(data)
                //console.log(data)

            } catch (error) {
                console.log(error)

            }
        }

        const pintarCards = data => {
            data.forEach(producto => {
                templateCard.querySelector('h5').textContent = producto.title
                templateCard.querySelector('p').textContent = producto.precio
                templateCard.querySelector('img').setAttribute("src", producto.thumbnailUrl)
                templateCard.querySelector('.btn-dark').dataset.id = producto.id
                const clone = templateCard.cloneNode(true)
                fragment.appendChild(clone)


            })
            items.appendChild(fragment)
        }
        fetchData()
        //////////////////////////////////////////////////////////////////////////////
        async function mostrarNombreYTelefono() {
            const selectContacto = document.querySelector('#contacto');
            const resultado = document.querySelector('#idCatalogo');
            const contactoSeleccionado = selectContacto.value;

            if (!contactoSeleccionado) {
                resultado.textContent = "";
                return;
            }
            /*
            try {
                const response = await fetch('../catalogo/api.json');
                const contactos = await response.json();
        
                const contactoEncontrado = contactos.find(contacto =>
                    contacto.title.toLowerCase() === contactoSeleccionado.toLowerCase()
                );
        
        
        
                if (contactoEncontrado) {
                        resultado.innerHTML = `
                        <hr>
                        <h5> Titulo: ${contactoEncontrado.title}</h5>,
                        <P><h5> Precio: ${contactoEncontrado.precio}<h5></P>
                        <img src=" ${contactoEncontrado.thumbnailUrl}">
                        <hr>
                        <button style="btn-dark">Ver producto en Tienda</button>
                        <hr>
                        `;
                    
                } else {
                    resultado.textContent = "El contacto seleccionado no está en la lista de contactos.";
                }
            } catch (error) {
                console.error('Error al cargar el archivo JSON:', error);
            }
            */
            //-------------------------------------------------------------------------------------
            try {

                const response = await fetch('catalogo/cascos.json');
                const contactos = await response.json();
                const contactoSeleccionado = selectContacto.value.toLowerCase(); // Convertir a minúsculas

                const contactosEncontrados = contactos.filter(contacto =>
                    contacto.title.toLowerCase() === contactoSeleccionado
                );

                if (contactosEncontrados.length > 0) {

                    //  Limpiar el contenido anterior
                    resultado.innerHTML = "";
                    contactosEncontrados.forEach(contacto => {
                        resultado.innerHTML += `
         <div style="display: grid; place-content: center;">
        
          <h5> Título: ${contacto.title}</h5>
          <p><h5> Precio: ${contacto.precio}</h5></p>
          <img src="${contacto.thumbnailUrl}">
          
          <button class="btn btn-dark"><a href="https://listado.mercadolibre.com.ar/_CustId_87005029" class="btn btn-dark">Tienda</a></button>
          
          
          </div>
        `;

                    });
                } else {
                    resultado.textContent = "No se encontraron resultados.";
                }
            } catch (error) {
                console.error('Error al cargar el archivo JSON:', error);
            }

            //-------------------------------------------------------------------------------------



        }

        // Cargar opciones del select desde el archivo JSON
        async function cargarOpcionesSelect() {
            const selectContacto = document.getElementById('contacto');

            try {
                const response = await fetch('catalogo/cascos.json');
                const contactos = await response.json();

                contactos.forEach(contacto => {
                    const option = document.createElement('option');
                    option.value = contacto.title;
                    option.textContent = contacto.title;
                    selectContacto.appendChild(option);
                });

                // Agregar un evento change al select para mostrar automáticamente al seleccionar
                selectContacto.addEventListener('change', mostrarNombreYTelefono);
            } catch (error) {
                console.error('Error al cargar el archivo JSON:', error);
            }
        }
        cargarOpcionesSelect()





    }
    //Auricular /////////////////////////////////////////////////////////////////////////////
    const auricular = () => {

        document.querySelector('#myDivNav2').innerHTML = `
    <div class = "marcoDivNav2">
                            <select id="contacto">
                            <option value="">Seleccionar Artículo</option>
                            </select>


                            <div id="resultado"></div>

                            <div id="idCatalogo"></div>
                            </div>
                            `

        document.querySelector('#idCatalogo').innerHTML = `                    
                                    
                    
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
  `
        //Api//////////////////////////////////////////////////////////////
        //const input = document.querySelector('#inputBuscar')

        const items = document.getElementById('items')
        const templateCard = document.getElementById('template-card').content
        const fragment = document.createDocumentFragment()

        const fetchData = async () => {
            try {

                const res = await fetch('catalogo/auricular.json')
                const data = await res.json()


                pintarCards(data)
                //console.log(data)

            } catch (error) {
                console.log(error)

            }
        }

        const pintarCards = data => {
            data.forEach(producto => {
                templateCard.querySelector('h5').textContent = producto.title
                templateCard.querySelector('p').textContent = producto.precio
                templateCard.querySelector('img').setAttribute("src", producto.thumbnailUrl)
                templateCard.querySelector('.btn-dark').dataset.id = producto.id
                const clone = templateCard.cloneNode(true)
                fragment.appendChild(clone)


            })
            items.appendChild(fragment)
        }
        fetchData()
        //////////////////////////////////////////////////////////////////////////////
        async function mostrarNombreYTelefono() {
            const selectContacto = document.querySelector('#contacto');
            const resultado = document.querySelector('#idCatalogo');
            const contactoSeleccionado = selectContacto.value;

            if (!contactoSeleccionado) {
                resultado.textContent = "";
                return;
            }
            /*
            try {
                const response = await fetch('../catalogo/api.json');
                const contactos = await response.json();
        
                const contactoEncontrado = contactos.find(contacto =>
                    contacto.title.toLowerCase() === contactoSeleccionado.toLowerCase()
                );
        
        
        
                if (contactoEncontrado) {
                        resultado.innerHTML = `
                        <hr>
                        <h5> Titulo: ${contactoEncontrado.title}</h5>,
                        <P><h5> Precio: ${contactoEncontrado.precio}<h5></P>
                        <img src=" ${contactoEncontrado.thumbnailUrl}">
                        <hr>
                        <button style="btn-dark">Ver producto en Tienda</button>
                        <hr>
                        `;
                    
                } else {
                    resultado.textContent = "El contacto seleccionado no está en la lista de contactos.";
                }
            } catch (error) {
                console.error('Error al cargar el archivo JSON:', error);
            }
            */
            //-------------------------------------------------------------------------------------
            try {

                const response = await fetch('catalogo/auricular.json');
                const contactos = await response.json();
                const contactoSeleccionado = selectContacto.value.toLowerCase(); // Convertir a minúsculas

                const contactosEncontrados = contactos.filter(contacto =>
                    contacto.title.toLowerCase() === contactoSeleccionado
                );

                if (contactosEncontrados.length > 0) {

                    //  Limpiar el contenido anterior
                    resultado.innerHTML = "";
                    contactosEncontrados.forEach(contacto => {
                        resultado.innerHTML += `
         <div style="display: grid; place-content: center;">

          <h5> Título: ${contacto.title}</h5>
          <p><h5> Precio: ${contacto.precio}</h5></p>
          <img src="${contacto.thumbnailUrl}">
          
          <button class="btn btn-dark"><a href="https://listado.mercadolibre.com.ar/_CustId_87005029" class="btn btn-dark">Tienda</a></button>
          
          
          </div>
        `;

                    });
                } else {
                    resultado.textContent = "No se encontraron resultados.";
                }
            } catch (error) {
                console.error('Error al cargar el archivo JSON:', error);
            }

            //-------------------------------------------------------------------------------------



        }

        // Cargar opciones del select desde el archivo JSON
        async function cargarOpcionesSelect() {
            const selectContacto = document.getElementById('contacto');

            try {
                const response = await fetch('catalogo/auricular.json');
                const contactos = await response.json();

                contactos.forEach(contacto => {
                    const option = document.createElement('option');
                    option.value = contacto.title;
                    option.textContent = contacto.title;
                    selectContacto.appendChild(option);
                });

                // Agregar un evento change al select para mostrar automáticamente al seleccionar
                selectContacto.addEventListener('change', mostrarNombreYTelefono);
            } catch (error) {
                console.error('Error al cargar el archivo JSON:', error);
            }
        }
        cargarOpcionesSelect()





    }











    //Pie de Pagina////////////////////////////////////////////////////////////////////////
    const pieDePaginaJs = () => {
        let divBanner1 = document.createElement("div");

        let divDatos1 = document.createElement("div")
        divDatos1.id = "divDatos1"
        divDatos1.innerHTML = `
    <a id="whatsapp" style = "text-decoration: none;" href="https://api.whatsapp.com/send?phone=1125804781">
    <img  src="img/svg/contacto/whatsapp-80.svg" alt="whatsapp" style="width: 40px; height: auto;"></a>
    &#160;&#160;
    <a href="https://www.instagram.com/joelfercab/" style="text-decoration: none;">
    <img src="img/svg/contacto/instagram-80.svg" alt="Instagram" width="100" style="width: 40px; height: auto;">
    </a>
   
    `

        divBanner1.appendChild(divDatos1)
        divBanner1.id = "mydivPie";
        let img = document.createElement("img");
        img.id = "img1"
        img.src = "img/svg/logos/logo-pie.svg";
        //    let hr1 = document.createElement("hr")
        //    document.body.appendChild(hr1)
        divBanner1.appendChild(img);
        document.body.appendChild(divBanner1);

    }


    miBannerJs();
    barraNav1();
    barraNav2();
    pieDePaginaJs();


}



















