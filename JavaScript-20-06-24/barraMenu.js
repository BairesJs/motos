export const barraNav1 = () => {
    //let hr1 = document.createElement('hr')
    //document.body.appendChild(hr1)

    var nav1 = document.createElement("div");
    nav1.id = "myDivNav";
    document.body.appendChild(nav1);

    var navDiv1 = document.createElement("div");
    navDiv1.className = "mydivClass";
    navDiv1.id = "btnInicio";
    navDiv1.innerHTML = 'Honda'
    nav1.appendChild(navDiv1)
    document.getElementById("btnInicio").addEventListener("click", () => { mensula() });
    //document.body.appendChild(navDiv1);

    var navDiv2 = document.createElement("div");
    navDiv2.className = "mydivClass";
    navDiv2.id = "btnQsomos";
    navDiv2.innerHTML = 'Yamaha'
    nav1.appendChild(navDiv2)
    document.getElementById("btnQsomos").addEventListener("click", () => { escritorio() });
    //document.body.appendChild(navDiv2);

    var navDiv3 = document.createElement("div");
    navDiv3.className = "mydivClass";
    navDiv3.id = "btnDescargas";
    navDiv3.innerHTML = 'Suzuki'
    nav1.appendChild(navDiv3)
    document.getElementById("btnDescargas").addEventListener("click", () => { ratona() });
    //document.body.appendChild(navDiv3);

    var navDiv4 = document.createElement("div");
    navDiv4.className = "mydivClass";
    navDiv4.id = "btnContacto";
    navDiv4.innerHTML = 'Benelli'
    nav1.appendChild(navDiv4)
    document.getElementById("btnContacto").addEventListener("click", () => { varios() });


    var navDiv5 = document.createElement("div");
    navDiv5.className = "mydivClass";
    navDiv5.id = "btnCascos";
    navDiv5.innerHTML = 'cascos'
    nav1.appendChild(navDiv5)
    document.getElementById("btnCascos").addEventListener("click", () => { cascos() });

    var navDiv6 = document.createElement("div");
    navDiv6.className = "mydivClass";
    navDiv6.id = "btnAuricular";
    navDiv6.innerHTML = 'Auriculares'
    nav1.appendChild(navDiv6)
    document.getElementById("btnAuricular").addEventListener("click", () => { auricular() });
    //document.body.appendChild(navDiv4);


    /*   
    var myButton = document.createElement("button");
    myButton.id = "mybutton";
    myButton.textContent = "Click me!";
    nav1.appendChild(myButton);
    
    myButton.addEventListener("click", function() {
      nav1.innerHTML = `<h1>Hola Moone!!!!</h1>`;
   
    });
    */
}