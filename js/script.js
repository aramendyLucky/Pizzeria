// Botón de modo oscuro
const btnModoOscuro = document.getElementById('modo-oscuro');

btnModoOscuro.addEventListener('click', () => {
    document.body.classList.toggle('oscuro');
    if (btnModoOscuro.textContent === "Modo Oscuro") {
        btnModoOscuro.textContent = "Modo Claro";
    } else {
        btnModoOscuro.textContent = "Modo Oscuro";
    }
});

// Botón de cambio de idioma (español <-> inglés)
const btnCambiarIdioma = document.getElementById('cambiar-idioma');
let idiomaActual = 'es';

btnCambiarIdioma.addEventListener('click', () => {
    if (idiomaActual === 'es') {
        traducirAlIngles();
        btnCambiarIdioma.textContent = "ES";
        idiomaActual = 'en';
    } else {
        traducirAlEspanol();
        btnCambiarIdioma.textContent = "EN";
        idiomaActual = 'es';
    }
});

function traducirAlIngles() {
    document.querySelector('h1').textContent = 'Welcome to La Sabrosa Pizzeria';
    document.querySelector('#inicio p').textContent = 'The best artisanal pizzas just a click away.';
    document.querySelector('#catalogo h2').textContent = 'Our Pizza Catalog';
    document.querySelector('#contacto h2').textContent = 'Contact';
    document.querySelector('label[for="nombre"]').textContent = 'Name:';
    document.querySelector('label[for="email"]').textContent = 'Email:';
    document.querySelector('label[for="mensaje"]').textContent = 'Message:';
    document.querySelector('button[type="submit"]').textContent = 'Send';
    // Traducir los elementos del catálogo de pizzas
    document.querySelectorAll('.pizza h3').forEach((titulo, index) => {
        const titulosIngles = [
            'Margarita Pizza', 'Pepperoni Pizza', 'Four Cheese Pizza', 'Hawaiian Pizza'
            // Añade las traducciones para las demás pizzas
        ];
        titulo.textContent = titulosIngles[index];
    });
    document.querySelectorAll('.pizza p').forEach((desc, index) => {
        const descripcionesIngles = [
            'Tomato, fresh mozzarella, basil.', 'Pepperoni salami, mozzarella, tomato sauce.', 
            'Parmesan, mozzarella, gorgonzola, ricotta.', 'Ham, pineapple, mozzarella.'
            // Añade las descripciones en inglés
        ];
        desc.textContent = descripcionesIngles[index];
    });
}

function traducirAlEspanol() {
    document.querySelector('h1').textContent = 'Bienvenidos a Pizzería La Sabrosa';
    document.querySelector('#inicio p').textContent = 'Las mejores pizzas artesanales a solo un clic de distancia.';
    document.querySelector('#catalogo h2').textContent = 'Nuestro Catálogo de Pizzas';
    document.querySelector('#contacto h2').textContent = 'Contacto';
    document.querySelector('label[for="nombre"]').textContent = 'Nombre:';
    document.querySelector('label[for="email"]').textContent = 'Correo electrónico:';
    document.querySelector('label[for="mensaje"]').textContent = 'Mensaje:';
    document.querySelector('button[type="submit"]').textContent = 'Enviar';
    // Volver a las descripciones en español
    document.querySelectorAll('.pizza h3').forEach((titulo, index) => {
        const titulosEspanol = [
            'Pizza Margarita', 'Pizza Pepperoni', 'Pizza Cuatro Quesos', 'Pizza Hawaiana'
            // Añade los títulos en español
        ];
        titulo.textContent = titulosEspanol[index];
    });
    document.querySelectorAll('.pizza p').forEach((desc, index) => {
        const descripcionesEspanol = [
            'Tomate, mozzarella fresca, albahaca.', 'Salami pepperoni, mozzarella, salsa de tomate.',
            'Parmesano, mozzarella, gorgonzola, ricotta.', 'Jamón, piña, mozzarella.'
            // Añade las descripciones en español
        ];
        desc.textContent = descripcionesEspanol[index];
    });
}


//Boton Carrito de Compras
// Array para almacenar los productos del carrito
let carrito = [];

// Obtener botones de "Agregar al carrito"
const botonesAgregar = document.querySelectorAll('.pizza button');

// Contenedor del carrito
const contenedorCarrito = document.getElementById('lista-carrito');
const botonVaciarCarrito = document.getElementById('vaciar-carrito');

// Agregar evento a cada botón de "Agregar al carrito"
botonesAgregar.forEach((boton, index) => {
    boton.addEventListener('click', () => {
        agregarAlCarrito(index);
    });
});

function agregarAlCarrito(indice) {
    // Obtener la pizza seleccionada (nombre y descripción)
    const pizzaSeleccionada = document.querySelectorAll('.pizza')[indice];
    const nombrePizza = pizzaSeleccionada.querySelector('h3').textContent;
    const descripcionPizza = pizzaSeleccionada.querySelector('p').textContent;

    // Crear un objeto con la pizza y agregarla al carrito
    const pizza = {
        nombre: nombrePizza,
        descripcion: descripcionPizza
    };

    carrito.push(pizza);
    actualizarCarrito();
}

function actualizarCarrito() {
    // Limpiar el contenido del carrito
    contenedorCarrito.innerHTML = '';

    // Si el carrito está vacío, mostrar un mensaje
    if (carrito.length === 0) {
        contenedorCarrito.innerHTML = '<p>El carrito está vacío</p>';
    } else {
        // Mostrar los elementos del carrito
        carrito.forEach((pizza, index) => {
            const pizzaElemento = document.createElement('p');
            pizzaElemento.textContent = `${pizza.nombre} - ${pizza.descripcion}`;
            contenedorCarrito.appendChild(pizzaElemento);
        });
    }
}
//Carrito de Compras
// Vaciar el carrito
botonVaciarCarrito.addEventListener('click', () => {
    carrito = [];
    actualizarCarrito();
});

// Botón para proceder al pago
const botonPagar = document.getElementById('pagar');

// Enlace para enviar el pedido por WhatsApp
const botonWhatsApp = document.getElementById('whatsapp');

// Evento al hacer clic en el botón de "Proceder al Pago"
botonPagar.addEventListener('click', () => {
    procederAlPago();
});

// Evento al hacer clic en el enlace de "WhatsApp"
botonWhatsApp.addEventListener('click', () => {
    enviarPedidoPorWhatsApp();
});

function procederAlPago() {
    if (carrito.length === 0) {
        alert('El carrito está vacío. Agrega al menos una pizza para proceder al pago.');
        return;
    }
    
    // Aquí puedes redirigir a la página de pago
    alert('Redirigiendo a la página de pago... (Funcionalidad de pago pendiente)');
}

function enviarPedidoPorWhatsApp() {
    if (carrito.length === 0) {
        alert('El carrito está vacío. Agrega al menos una pizza para enviar el pedido por WhatsApp.');
        return;
    }

    // Obtener el contenido del pedido
    let mensaje = 'Hola, me gustaría hacer el siguiente pedido: \n\n';
    carrito.forEach((pizza, index) => {
        mensaje += `${index + 1}. ${pizza.nombre} - ${pizza.descripcion}\n`;
    });

    mensaje += '\nGracias.';

    // Codificar el mensaje en URL para WhatsApp
    const numeroWhatsApp = '+5491130722154'; // Aquí debes poner el número de WhatsApp del negocio
    const url = `https://wa.me/${numeroWhatsApp}?text=${encodeURIComponent(mensaje)}`;

    // Redirigir al enlace de WhatsApp con el mensaje del carrito
    botonWhatsApp.setAttribute('href', url);
}

