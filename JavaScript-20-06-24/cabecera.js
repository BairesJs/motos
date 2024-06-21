export const miBannerJs = () => {
    let divBanner1 = document.createElement("div");
    divBanner1.id = "mydiv";
    let img = document.createElement("img");
    img.id = "img-logo"; 
    img.src = "img/svg/logos/logo-perro.svg";
    divBanner1.appendChild(img)


    let divBanner2 = document.createElement("div");
    divBanner2.id = "myDiv2";
    divBanner2.innerHTML = `
    
<br>&#160;&#160;&#160;&#160;
<a id="whatsapp" style = "text-decoration: none;" href="https://api.whatsapp.com/send?phone=1125804781">
<img  src="img/svg/contacto/whatsapp-80.svg" alt="whatsapp" style="width: 40px; height: auto;"></a>
&#160;&#160;&#160;&#160;
<a href="https://www.instagram.com/joelfercab/" style="text-decoration: none;">
<img src="img/svg/contacto/instagram-80.svg" alt="Instagram" width="100" style="width: 40px; height: auto;">
</a>

`;

    divBanner1.appendChild(divBanner2);
    document.body.appendChild(divBanner1);

}