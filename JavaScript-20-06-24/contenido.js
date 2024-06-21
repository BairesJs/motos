export const barraNav2 = () => {

    let nav2 = document.createElement("div");
    nav2.id = "myDivNav2";
    nav2.innerHTML = `
<div class = "marcoDivNav2">
"Perry Accesorios y Repuestos, nació como un servicio de entrega de comidas rápidas y ha evolucionado
para atender las necesidades de nuestros compañeros motociclistas. <br>
Nos dedicamos a brindar una amplia gama de accesorios y repuestos para motos, comprometidos
en ofrecer soluciones que enriquezcan la experiencia de conducción y seguridad de quienes comparten
nuestra pasión por las dos ruedas."
</div>
`
    document.body.appendChild(nav2);

}