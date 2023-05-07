const carrito = []

const carritoLS = JSON.parse(localStorage.getItem('carrito'))

for (const prod of carritoLS) {    
    carrito.push(prod)
}

// sumar compra

const sumarCompra = () => {   
     const totalCarro = document.getElementById('totalCarro')

     let valorInicial = 0  
     const sumaCompra = carrito.reduce((acumulador, compra) => acumulador + compra.precio, valorInicial, 0)     
      totalCarro.innerText = `$${sumaCompra}`}

 const hacerCarrito = () => {
    const contenedor = document.getElementById('carrito')

    carrito.forEach((compra) => {      
          const div = document.createElement('div')    
            div.classList.add('card__carro')     
            div.innerHTML += `      
                              <img src="../${compra.img}" alt="" class="card__carro-img">        
                              <p class="card__carro-p">${compra.nombre}</p>                    
                              <p class="card__carro-p">$${compra.precio}</p>          
                              <button class="btn__tacho">    
                              <img src="../img/tachoBasura.webp" alt="Basura" class="btn__tacho-img" id="${compra.id}">            
                                 </button>       
                                 
        `            
            contenedor.prepend(div)  
          }); 
          sumarCompra()}


     hacerCarrito()

 // obtengo botones para eliminar uno por uno los elementos
    const btnTacho = document.getElementById('carrito')

    btnTacho.addEventListener('click', (e) => {   
         sacarDelCarrito(e.target, e.target.id)
        })

const sacarDelCarrito = (productoIndex, productoID) => { 
       let index = carrito.findIndex(producto => producto == productoIndex) 
       let id = carrito.find(producto => producto.id == productoID)    
    
       if (index && id) {    
        carrito.splice(index, 1)  
        const carritoJSON = JSON.stringify(carrito)        
        localStorage.setItem('carrito', carritoJSON)               
        const contenedor = document.getElementById('carrito')   
        contenedor.innerHTML = ""
         }
 }

// para vaciar todo el carrito
let vaciarCarro = document.getElementById('vaciarCarro')

vaciarCarro.addEventListener('click', () => {   
         
// vacio el array y lo paso a LS para salvar los datos 

 while (carrito.length > 0){     
       carrito.pop()  
      }   
       const carritoJSON = JSON.stringify(carrito)  
       localStorage.setItem('carrito', carritoJSON)

    const contenedor = document.getElementById('carrito')
    contenedor.innerHTML = ""
    sumarCompra()
})