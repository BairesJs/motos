export function barraNav1() {
    let hr1 = document.createElement('hr');

    var nav1 = document.createElement("div");
    nav1.id = "myDivNav";

    var navDiv1 = document.createElement("div");
    navDiv1.className = "mydivClass";
    navDiv1.id = "btnInicio";
    navDiv1.innerHTML = 'Honda';
    nav1.appendChild(navDiv1);

    var navDiv2 = document.createElement("div");
    navDiv2.className = "mydivClass";
    navDiv2.id = "btnQsomos";
    navDiv2.innerHTML = 'Yamaha';
    nav1.appendChild(navDiv2);

    var navDiv3 = document.createElement("div");
    navDiv3.className = "mydivClass";
    navDiv3.id = "btnDescargas";
    navDiv3.innerHTML = 'Suzuki';
    nav1.appendChild(navDiv3);

    var navDiv4 = document.createElement("div");
    navDiv4.className = "mydivClass";
    navDiv4.id = "btnContacto";
    navDiv4.innerHTML = 'Benelli';
    nav1.appendChild(navDiv4);

    // Return the outer HTML of nav1 without adding it to the DOM
    return nav1.outerHTML;
}
