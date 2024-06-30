export function barraNav2() {

    let nav2 = document.createElement("div");
    nav2.id = "myDivNav2";
    nav2.innerHTML = `
<div class = "marcoDivNav2">
SportBike es una empresa líder multimarca en la venta de motocicletas.<br>
Se distingue por su atención al cliente, servicio postventa excepcional y entregas a tiempo en todo el país.<br>
Ofrecen una amplia gama de motos para satisfacer las necesidades, de principiantes y expertos.<br>
Su compromiso es proporcionar una experiencia completa y satisfactoria, fomentando la pasión por el motociclismo
y promoviendo la seguridad en la carretera.<br>
Su visión es convertirse en la opción preferida para la compra de motocicletas en todo el país, manteniendo
altos estándares de calidad y servicio al cliente.<br>
</div>
`

    return nav2.outerHTML

}

