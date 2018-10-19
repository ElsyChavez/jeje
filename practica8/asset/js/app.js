var e = 1;
var bitacoras=[];
var formulario = document.getElementById("bitacora");

/*¿Qué contienen la variable formulario? R// El contenido del elemento que tiene id = bitacora.*/

formulario.addEventListener("submit", (evt) => {
    evt.preventDefault();
    let bitacora = { 
        cant:cont, 
        fecha: formulario[1].value, 
        descripcion: formulario[2].value, 
        cantidad: formulario[3].value 
    }
    bitacoras.push(bitacora);
    cont++;
    mostrar();
});

/*¿Qué hace el método evt.preventDefault()? R// Este metodo cancela el evento, 
si este es cancelable, en el caso de un boton de submmit, 
esta funcion previene que se suba el formulario.*/

/*¿Qué es lo que contiene formulario[x]? R// Si la x es 1, el primer elemento del formulario, y asi 
sucesivamente.*/

const crearElemento = (bitacora, tbody) =>{ 
    let tr = document.createElement("tr"); 
    Object.values(bitacora).forEach(item => { 
     let td = document.createElement("td"); 
     let content = document.createTextNode(item); 
     td.appendChild(content); 
     tr.setAttribute("class", "click"); 
     tr.appendChild(td); 
    }); 
    tbody.appendChild(tr); 
  } 

/*¿Qué contienen las variables tr y td? R// En tr se almaceno un nodo de tipo tr y el nodo y td, 
y en td se almaceno un nodo de tipo td y el nodo content.*/
/*¿Qué contienen la variable content? R// El contenido que tendra el nodo 
usando document.createTextNode(item) */
/*¿Qué valor tendra tbody al finalizar la iteración? R// */
/*Describa en pocas palabras lo que realizara esta función: */

const eliminar= (tbody)=>{
    while (tbody.firstChild) {
     tbody.removeChild(tbody.firstChild);
    }
}

/*¿Qué es lo que hace .firstChild? R// */
/*Después de realizar el while ¿Comó quedara el elemento tbody? R// */

const agregar= ()=>{ 
    var eventtr = document.querySelectorAll(".click"); 
      eventtr.forEach((item, index) => { 
      item.addEventListener("click", () => { 
      document.querySelector("#fecha").value = item.childNodes[1].textContent; 
      document.querySelector("#descp").value = item.childNodes[2].textContent; 
      document.querySelector("#cant").value = item.childNodes[3].textContent; 
    }); 
    }) 
} 

/*¿Qué es lo que obtenemos cuando se ejecuta item.childNodes[i].textContent? R// */

const mostrar = ()=>{ 
    if (document.querySelector(".tabla-btc tbody").childElementCount > 0) { 
     eliminar(document.querySelector(".tabla-btc tbody")); 
    } 
    bitacoras.forEach(item => { 
     crearElemento(item, document.querySelector(".tabla-btc tbody")); 
    }); 
    agregar(); 
} 

/*¿Qué es lo que obtenemos cuando se realiza document.querySelector(".tabla-btc tbody")? R// */
/*¿Qué hace el método childElementCount? R// */
/*¿Qué se mostrara en pantalla cuando se ejecute la función agregar()? R// */
/*¿Qué se mostrara en el navegador despues de ejecutar la función mostrar? R// */


const navSlide = ()=>{
    const burger = document.querySelector(".burger"); 
    const nav = document.querySelector(".nav-links");
    const navLinks = document.querySelectorAll('.nav-links li');

    burger.addEventListener("click", ()=>{
        nav.classList.toggle('nav-active');

        navLinks.forEach((link, index) =>{
            
            if(link.style.animation)
            {
                link.style.animation = '';
            }
            else{
                link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7+0.3}s`;
            }
            
        });
        burger.classList.toggle('toggle');
    });

}

navSlide();
/*********************************Colocar aca el desarrollo de su ejercicio***************************/

