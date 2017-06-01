
	// Envío de To - Do
	var toDoForm = document.getElementById("twitt-text");
	toDoForm.addEventListener("submit", function (e) {
		e.preventDefault();
		// Obtenemos datos
		var contenedor = document.getElementById("posts");
		var mensajeContenedor = document.getElementById("text-typo");
		var mensaje = mensajeContenedor.value;

		// Creamos elementos
		var postContenedor = document.createElement("article");
		var post = document.createElement("p");

		// Personalizamos elementos
		postContenedor.className = "comment";
		post.textContent = mensaje;

		// Agregarlos al DOM
		postContenedor.appendChild(post);

		// Agregarlo a un elemento existente para visualizarlo
		contenedor.appendChild(postContenedor);

		// Borrar contenido de textarea
		mensajeContenedor.value = "";
	});


$(document).ready(cargarPagina);