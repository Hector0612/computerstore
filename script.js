

// Obtener el carrito desde el localStorage o crear uno vacío
let carrito = JSON.parse(localStorage.getItem('carrito')) || [];

// Función para actualizar el carrito en el localStorage
function actualizarCarrito() {
    localStorage.setItem('carrito', JSON.stringify(carrito));
}

// Función para mostrar los productos en el carrito
function mostrarCarrito() {
    const listaCarrito = document.getElementById('lista-carrito');
    listaCarrito.innerHTML = ''; // Limpiar el contenido actual

    let total = 0; // Inicializar total

    // Iterar sobre el carrito y crear elementos para cada producto
    carrito.forEach((item, index) => {
        const itemDiv = document.createElement('div');
        itemDiv.textContent = `${item.nombre} - S/${item.precio} x ${item.cantidad}`;
        
        // Crear un botón para eliminar el producto
        const removeButton = document.createElement('button');
        removeButton.textContent = 'Eliminar';
        removeButton.onclick = () => {
            eliminarDelCarrito(index);
        };

        itemDiv.appendChild(removeButton); // Agregar el botón al div del producto
        listaCarrito.appendChild(itemDiv); // Agregar el div al contenedor

        // Sumar al total
        total += item.precio * item.cantidad;
    });

    // Mostrar el total
    document.getElementById('total').textContent = `Total: S/${total.toFixed(2)}`;
}

// Función para eliminar un producto del carrito
function eliminarDelCarrito(index) {
    carrito.splice(index, 1); // Eliminar el producto del carrito
    actualizarCarrito(); // Actualizar el localStorage
    mostrarCarrito(); // Volver a mostrar el carrito
}

// Función para añadir un producto al carrito
function agregarAlCarrito(nombreProducto, precioProducto) {
    const producto = {
        nombre: nombreProducto,
        precio: precioProducto,
        cantidad: 1
    };

    // Verificar si el producto ya está en el carrito
    const productoExistente = carrito.find(item => item.nombre === producto.nombre);

    if (productoExistente) {
        // Si ya está, aumentamos la cantidad
        productoExistente.cantidad++;
    } else {
        // Si no está, lo agregamos al carrito
        carrito.push(producto);
    }

    // Actualizar el carrito en el almacenamiento local
    actualizarCarrito();

    // Mostrar los productos en el carrito
    mostrarCarrito();

    alert('Producto agregado al carrito');
}

// Funcionalidad para los botones de "Añadir al carrito"
document.querySelectorAll('.add-to-cart').forEach(button => {
    button.addEventListener('click', (e) => {
        // Encontrar la tarjeta del producto
        const productCard = e.target.closest('.product'); // Cambiar 'producto' a 'product'
        const nombreProducto = productCard.querySelector('h3').textContent;
        const precioProducto = parseFloat(productCard.getAttribute('data-precio'));

        // Llamar a la función para agregar el producto al carrito
        agregarAlCarrito(nombreProducto, precioProducto);
    });
});

// Función para vaciar el carrito
function vaciarCarrito() {
    carrito = []; // Limpia el carrito
    actualizarCarrito(); // Actualiza el localStorage
    mostrarCarrito(); // Vuelve a mostrar el carrito vacío
}

// Añadir evento al botón de "Vaciar Carrito"
document.querySelector('.empty-cart-btn').addEventListener('click', vaciarCarrito);

// Mostrar el carrito al cargar la página
document.addEventListener('DOMContentLoaded', mostrarCarrito);

