export const pieDePaginaJs = () => {
    let divBanner1 = document.createElement("div");
    divBanner1.id = "mydivPie";

    let divDatos1 = document.createElement("div");
    divDatos1.id = "divDatos1";
    divDatos1.innerHTML = `
        <a id="whatsapp" style="text-decoration: none;" href="https://api.whatsapp.com/send?phone=1134795400">
            <img src="img/svg/contacto/whatsapp-80.svg" alt="whatsapp" style="width: 40px; height: auto;">
        </a>
        &#160;&#160;
        <a href="https://www.instagram.com/preciodeamigo.ar/" style="text-decoration: none;">
            <img src="img/svg/contacto/instagram-80.svg" alt="Instagram" width="100" style="width: 40px; height: auto;">
        </a>
        <hr>
    `;
    divBanner1.appendChild(divDatos1);

    let img = document.createElement("img");
    img.id = "img1";
    img.src = "img/svg/logos/superBike-pie.svg";
    divBanner1.appendChild(img);

    // Return divBanner1 outerHTML
    return divBanner1.outerHTML;
};
