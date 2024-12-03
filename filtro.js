document.addEventListener('DOMContentLoaded', () => {

// Datos de productos
const productos = [
    { id: 1, nombre: "Monitor Curvo Teros", categoria: "monitores", precio: 425, imagen: "https://rimage.ripley.com.pe/home.ripley/Attachment/MKP/3993/PMP20000168649/imagen2-1.png", link: "producto1.html" },
    { id: 2, nombre: "MONITOR TEROS 2763G", categoria: "monitores", precio: 462, imagen: "https://totemhardware.com.pe/wp-content/uploads/2023/11/itemth7ROGLA4070-2.jpg" , link: "producto2.html"},
    { id: 3, nombre: "Monitor Teros Gaming", categoria: "monitores", precio: 540, imagen: "https://rimage.ripley.com.pe/home.ripley/Attachment/MKP/3609/PMP20000023130/full_image-1.jpeg", link: "producto3.html" },
    { id: 4, nombre: "MONITOR ASUS TUF Gaming", categoria: "monitores", precio: 890, imagen: "https://cdn.memorykings.pe/files/2023/06/13/347439-MK034823C.jpg", link: "producto14.html" },
    { id: 5, nombre: "MONITOR MSI Gaming Curvo", categoria: "monitores", precio: 980, imagen: "https://www.infotec.com.pe/66582-large_default/monitor-msi-236-optix-g24c4-gaming-curvo-hdmi-dp-144hz-1ms.jpg", link: "producto15.html" },
    { id: 6, nombre: "Teclado Red Dragon Kumara", categoria: "teclados", precio: 226.20, imagen: "https://i.zst.com.br/thumbs/12/f/0/-47808762.jpg", link: "producto13.html" },
    { id: 7, nombre: "Teclado Gamer Teros TE-4180", categoria: "teclados", precio: 209, imagen: "https://www.cybermarket.pe/wp-content/uploads/2020/07/teros-te-4180.jpg", link: "producto16.html" },
    { id: 8, nombre: "Teclado Gamer Teros TE-4152", categoria: "teclados", precio: 189, imagen: "https://imagenes.deltron.com.pe/images/productos/on-line/items/large/kb/te/kbte4152n.jpg", link: "producto17.html" },
    { id: 9, nombre: "Teclado Logitech G Pro", categoria: "teclados", precio: 211, imagen: "https://www.infotec.com.pe/13836-large_default/teclado-gamer-logitech-g213-prodigy-rgb-920-008084.jpg", link: "producto18.html" },
    { id: 10, nombre: "Mouse Logitech G203", categoria: "ratones", precio: 136.74, imagen: "https://phantom.pe/media/catalog/product/cache/c58c05327f55128aefac5642661cf3d1/1/_/1_33_35.jpg", link: "producto11.html" },
    { id: 11, nombre: "Mouse Teros TE-5171N", categoria: "ratones", precio: 49, imagen: "https://promart.vteximg.com.br/arquivos/ids/3849151-1000-1000/image-1b2bbfb13c934904abcb450698b61a40.jpg?v=637774366839970000", link: "producto19.html" },
    { id: 12, nombre: "Mouse Logitech G 502", categoria: "ratones", precio: 289, imagen: "https://coolboxpe.vtexassets.com/arquivos/ids/326499/Logitech-G502-Xplus-negro_1.jpg?v=638350746020570000", link: "monitor-curvo.html" },
    { id: 13, nombre: "GIGABYTE GEFORCE RTX 4090", categoria: "graficas", precio: 7800, imagen: "https://mipclista.com/7421-large_default/tarjeta-de-video-rtx3060ti-8gb-msi-ventus-3x-.jpg", link: "producto20.html" },
    { id: 14, nombre: "NVIDIA RTX 4080 super", categoria: "graficas", precio: 4600, imagen: "https://mipclista.com/5910-large_default/tarjeta-de-video-rtx3060ti-8gb-msi-ventus-3x-.jpg", link: "producto21.html" },
    { id: 15, nombre: "MSI GeForce GTX 1050 TI ", categoria: "graficas", precio: 825, imagen: "https://m.media-amazon.com/images/I/81VBPk5pnLL._AC_SL1500_.jpg", link: "monitor-curvo.html" },
    { id: 16, nombre: "PC Gamer Haku Ryzen 5 4600G ", categoria: "pc-completa", precio: 1495.12, imagen: "https://mipclista.com/7333-large_default/pc-gamer-haku-ryzen-5-4600g.jpg", link: "producto4.html" },
    { id: 17, nombre: "PC Gamer Haku Ryzen 5 8500G ", categoria: "pc-completa", precio: 2851.08, imagen: "https://mipclista.com/7350-large_default/pc-gamer-haku-blue-ryzen-5-5600g.jpg", link: "producto7.html" },
    { id: 18, nombre: "PC Gamer Draco RGB Ryzen 5 3600 ", categoria: "pc-completa", precio: 2999, imagen: "https://mipclista.com/7353-large_default/pc-gamer-haku-rgb-ryzen-5-3600.jpg", link: "monitor-curvo.html" },
]

// Elementos del DOM
const categorySelect = document.getElementById("category");
const priceRange = document.getElementById("price-range");
const priceValue = document.getElementById("price-value");
const productContainer = document.getElementById("product-container");
const applyFiltersButton = document.getElementById("apply-filters");

// Actualizar el valor dinámico del rango de precios
priceRange.addEventListener("input", () => {
    priceValue.textContent = `S/ ${priceRange.value}`;
});

// Función para filtrar productos
function filtrarProductos() {
    const categoriaSeleccionada = categorySelect.value;
    const precioMaximo = parseInt(priceRange.value);

    // Filtrar productos por categoría y precio
    const productosFiltrados = productos.filter(producto => {
        const coincideCategoria = !categoriaSeleccionada || producto.categoria === categoriaSeleccionada;
        const coincidePrecio = producto.precio <= precioMaximo;
        return coincideCategoria && coincidePrecio;
    });

    // Mostrar productos filtrados
    mostrarProductos(productosFiltrados);
}

// Función para mostrar productos
function mostrarProductos(listaProductos) {
    productContainer.innerHTML = ""; // Limpiar contenedor

    if (listaProductos.length === 0) {
        productContainer.innerHTML = "<p>No se encontraron productos.</p>";
        return;
    }

    listaProductos.forEach(producto => {
        const productDiv = document.createElement("div");
        productDiv.classList.add("product");

        productDiv.innerHTML = `
            <a href="${producto.link}">
                <img src="${producto.imagen}" alt="${producto.nombre}">
                <h3>${producto.nombre}</h3>
                <p>Precio: S/ ${producto.precio}</p>
            </a>
        `;

        productContainer.appendChild(productDiv);
    });
}

// Añadir evento al botón de aplicar filtros
applyFiltersButton.addEventListener("click", filtrarProductos);

// Ocultar productos al inicio
document.addEventListener("DOMContentLoaded", () => {
    mostrarProductos([]);
});
});