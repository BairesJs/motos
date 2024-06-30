export const varios = () => {

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

    const items = document.getElementById('items')
    const templateCard = document.getElementById('template-card').content
    const fragment = document.createDocumentFragment()

    const fetchData = async () => {
        try {

            const res = await fetch('catalogo/varios.json')
            const data = await res.json()


            pintarCards(data)

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
     <hr>
      <h5> Título: ${contacto.title}</h5>
      <p><h5> Precio: ${contacto.precio}</h5></p>
      <img src="${contacto.thumbnailUrl}">
      <hr>
      <button class="btn btn-dark"><a href="https://listado.mercadolibre.com.ar/_CustId_87005029" class="btn btn-dark">Tienda</a></button>
      
      <hr>
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

