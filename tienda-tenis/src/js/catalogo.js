// Este archivo contiene el código JavaScript que maneja la lógica del catálogo de productos.

document.addEventListener('DOMContentLoaded', () => {
    fetch('../data/productos.json')
        .then(response => response.json())
        .then(data => {
            const catalogoContainer = document.getElementById('catalogo');
            data.forEach(producto => {
                const productoDiv = document.createElement('div');
                productoDiv.classList.add('producto');

                productoDiv.innerHTML = `
                    <img src="${producto.imagen}" alt="${producto.nombre}">
                    <h2>${producto.nombre}</h2>
                    <p>${producto.descripcion}</p>
                    <p>Precio: $${producto.precio}</p>
                `;

                catalogoContainer.appendChild(productoDiv);
            });
        })
        .catch(error => console.error('Error al cargar los productos:', error));
});