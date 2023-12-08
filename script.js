  document.addEventListener('DOMContentLoaded', function () {
            const productos = document.querySelectorAll('.producto-card');
            const carrito = document.getElementById('productos-en-carrito');
            const numProductos = document.getElementById('num-productos');
            
            

            productos.forEach(producto => {
                const btnAgregar = producto.querySelector('.agregar');
                btnAgregar.addEventListener('click', () => {
                    const nombre = producto.querySelector('h3').innerText;
                    const nuevoProducto = document.createElement('div');
                    nuevoProducto.innerHTML = `<p>${nombre} <button class="eliminar">Eliminar</button> 
                        <button class="aumentar">+</button> 
                        <span class="cantidad">1</span> 
                        <button class="disminuir">-</button></p>`;
                    carrito.appendChild(nuevoProducto);
                    const btnEliminar = nuevoProducto.querySelector('.eliminar');
                    btnEliminar.addEventListener('click', () => {
                        nuevoProducto.remove();
                        actualizarNumProductos();
                    });

                    const btnAumentar = nuevoProducto.querySelector('.aumentar');
                    btnAumentar.addEventListener('click', () => {
                        const cantidadSpan = nuevoProducto.querySelector('.cantidad');
                        let cantidad = parseInt(cantidadSpan.innerText);
                        cantidad++;
                        cantidadSpan.innerText = cantidad;
                    });

                    const btnDisminuir = nuevoProducto.querySelector('.disminuir');
                    btnDisminuir.addEventListener('click', () => {
                        const cantidadSpan = nuevoProducto.querySelector('.cantidad');
                        let cantidad = parseInt(cantidadSpan.innerText);
                        if (cantidad > 1) {
                            cantidad--;
                            cantidadSpan.innerText = cantidad;
                        }
                    });

                    actualizarNumProductos();
                });
            });
            const carritoImg = document.getElementById('carrito-img');
            carritoImg.addEventListener('click', () => {
                if (carrito.childElementCount > 0) {
                    if (carrito.style.display === 'none') {
                        carrito.style.display = 'block';
                    } else {
                        carrito.style.display = 'none';
                    }
                }
            });

            function actualizarNumProductos() {
                numProductos.innerText = carrito.childElementCount;
            }

        });
       
  function filtrarPorCategoria(categoria) {
    var tarjetas = document.getElementsByClassName('producto-card');
    
    for (var i = 0; i < tarjetas.length; i++) {
      tarjetas[i].style.display = 'none'; 
      
      if (tarjetas[i].querySelector('.producto-img').alt.toLowerCase().includes(categoria)) {
        tarjetas[i].style.display = 'block'; 
      }
    }
  }

 

