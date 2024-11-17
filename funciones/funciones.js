/*Inicio la escritura del código para la primera página en la que 
validaremos los formularios ,checks,...para que no estén vacíos */

document.addEventListener("DOMContentLoaded", function() {
    const formulario = document.getElementById("formulario");
    formulario.addEventListener("submit", validacion);
});

function validacion(evento) {
    evento.preventDefault();

    // Validar nombre
    var nombre = document.getElementById("Nombre").value;
  if(nombre.length == 0) {
    alert("Nombre está vacío");
    return;
  }
  
    // Validar apellidos
    var apellidos = document.getElementById("Apellidos").value.trim();
    if (apellidos.lenght == 0) {
        alert("Apellidos están vacíos");
        return;
    }

    // Validar sexo
    const sexoM = document.getElementById("SexoM").checked;
    const sexoH = document.getElementById("SexoH").checked;
    if (!sexoM && !sexoH) {
        alert("Debe seleccionar un sexo");
        return;
    }

    // Validar fecha de nacimiento
    const dia = document.getElementById("dia").value;
    const mes = document.getElementById("mes").value;
    const ano = document.getElementById("año").value;
    if (dia == "dia" || mes == "mes" || ano == "año") {
        alert("Debe seleccionar una fecha de nacimiento completa");
        return;
    }

    // Validar checkbox
    const checkboxes = document.querySelectorAll(".checkbox");
    const isChecked = Array.from(checkboxes).some(checkbox => checkbox.checked);
    if (!isChecked) {
        alert("Debe seleccionar al menos una actividad");
        return;
    }

    // Si todo está correcto
    alert("Eskerrik asko");
    evento.target.submit();
}
/*Inicio la escritura del código para la segunda página (comer.html) en la medida que he ido añadiendo opciones, 
me he dado cuenta que hay que identificar las páginas en el body, para poder ejecutar el código solo en una página.
Esto me ha ido provocando que tenga que ir añadiendo cambios en las páginas */
document.addEventListener("DOMContentLoaded", function() {
    // Seleccionamos el elemento con la palabra "beber"
    const beberPalabra = document.getElementById("beber");

    // Agregamos un evento 'mouseover' para mostrar el mensaje cuando el cursor pase por encima
    beberPalabra.addEventListener("mouseover", function() {
        alert("Si bebes no conduzcas");
    });
	
});
/*Inicio la escritura del código para la página danza.html,donde cambiaré el color de fondo al pasar el ratón sobre cualquiera de las imágenes
de la página.Aquí me he dado cuenta que debía acotar la función a esta págino, sino, me pasaba en las demás */

document.addEventListener("DOMContentLoaded", function () {
    // Verificar si estamos en la página con el id "Danza"
    if (document.body.id === "Danza") {
        // Obtener referencias a las imágenes
        var imagenes = document.querySelectorAll("img"); // Selecciona todas las imágenes

        // Iterar sobre cada imagen para agregar los eventos
        imagenes.forEach(function (imagen) {
            // Evento para cuando el ratón pasa sobre la imagen
            imagen.addEventListener("mouseover", function () {
                document.body.style.backgroundColor = "lightblue"; // Cambiar el fondo del body
                imagen.style.backgroundColor = "lightgreen"; // Cambiar el fondo de la imagen
            });

            // Evento para cuando el ratón sale de la imagen
            imagen.addEventListener("mouseout", function () {
                document.body.style.backgroundColor = "lightgreen"; // Restaurar el fondo del body
                imagen.style.backgroundColor = "transparent"; // Restaurar el fondo de la imagen
            });
        });
    }
});
//Código para la página musika.html,donde para que al cargarla salte un mensaje

document.addEventListener("DOMContentLoaded", function () {
    // Verificar si el id del body es "Musika"
    if (document.body.id === "musika") {
        // Asigna un nombre a la ventana
        window.name = "LMSGI02_TareaEvaluativa2, página de Músika";

        // Muestra ese valor en un cuadro de alerta
        alert(window.name);
    }
});
/*Código para la página quedadas,donde al hacer click en cualquier parte de la página saltará un mensaje
Parta este mensaje, he modificado h5 en la página de estilos para darle un estilo diferente a la letra.más grande ,negra y con borde blanco*/

document.addEventListener("DOMContentLoaded", function () {
    // Verificar si estamos en la página quedadas
    if (document.body.id === "quedadas") {
        // Agregar el evento click
        document.addEventListener("click", MiFuncion);
    }
});

function MiFuncion() {
    // Cambia el contenido HTML del elemento con id "JavaQueBienLoPasamos"---OJO CON LOS ESPACIOS EN EL CODIGO!!!
    // Asigna el texto "¡Qué bien lo pasamos!" como nuevo contenido dentro del elemento
    document.getElementById("JavaQueBienLoPasamos").innerHTML = "¡Qué bien lo pasamos!";
}