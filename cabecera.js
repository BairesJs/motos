export function miBannerJs() {

    const divBanner1 = document.createElement("div")
    divBanner1.id = "mydiv";
    const img = document.createElement("img")
    img.src = "img/svg/logos/superBike-logo.svg"
    divBanner1.appendChild(img)


    const divBanner2 = document.createElement("div")
    divBanner2.id = "myDiv2"
    divBanner2.innerHTML = `

    &#160;&#160;&#160;&#160;
<a id="whatsapp" style = "text-decoration: none;" href="https://api.whatsapp.com/send?phone=1134795400">
<img  src="img/svg/contacto/whatsapp-80.svg" alt="whatsapp" style="width: 40px; height: auto;"></a>
&#160;&#160;&#160;&#160;
<a href="https://www.instagram.com/baires.js/" style="text-decoration: none;">
<img src="img/svg/contacto/instagram-80.svg" alt="Instagram" width="100" style="width: 40px; height: auto;">
</a>

`

    divBanner1.appendChild(divBanner2)


    return divBanner1.outerHTML

}
