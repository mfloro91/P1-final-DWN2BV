/*
- Productos:
  - Armar el listado de productos obteniendo la información de cada uno de un Array de objectos. Como mínimo 6 productos.
  - Se deben contemplar como mínimo 3 categorías de productos.
  - Cada producto debe tener como mínimo: Nombre, descripción, precio, una imagen y categoría. Toda esta información se debe mostrar por cada ítem.
  - Debe tener un botón que permita agregar el ítem al carrito.
*/



/*********************** ARRAYS ***********************/

// 1 - Array de productos

let productos = [
    {
        nombre: "Chaqueta chocolate",
        descripcion: "De corderoy, cruelty free . Lista para acompañarte a todos lados.",
        detalle: "La chaqueta chocolate es cruelty free. Abrigada y cómoda, ¡lista para acompañarte a todos lados",
        precio: 18000,
        img: "./imagenes/Productos/Abrigos/chaquetaMarron.jpg",
        categoria: "abrigos",
        alt: "Mujer posa con una chaqueta marrón",
        cantidad: 0,
        codigo: 0,
    },
    {
        nombre: "Campera naranja",
        descripcion: "Rellena de pluma, lista para afrontar el verano.",
        detalle: "Rellena de plumas, ideal para enfrentar el invierno ¡No te olvides de chequear la tabla de talles antes de comprar!",
        precio: 30000,
        img: "./imagenes/Productos/Abrigos/campera.jpg",
        categoria: "abrigos",
        alt: "Mujer posa con una campera abrigada naranja",
        cantidad: 0,
        codigo: 1,
    },
    {
      nombre: "Chaqueta rocococó",
      descripcion: "De gabardina, ideal para un look casual o una tarde de paseo.",
      detalle: "Si hay un elemento que no puede faltar a tu outfit de este verano, es la chaqueta Rococó. ¡Vuela!",
      precio: 20000,
      img: "./imagenes/Productos/Abrigos/chaquetaRosaproducto.jpg",
      categoria: "abrigos",
      alt: "Mujer posa con una chaqueta rosa",
      cantidad: 0,
      codigo: 2,
  },
  {
    nombre: "Remera Basic",
    descripcion: "De algodón, un básico infaltable. Tiene un bolsillo delantero.",
    detalle: "Volvamos a los clásicos. La remera basic va a adaptarse a cualquier look que armes. ¡No podés no tenerla!",
    precio: 8000,
    img: "./imagenes/Productos/ParteArriba/remeraBlancaproducto.jpg",
    categoria: "remeras",
    alt: "Mujer posa con una remera blanca con bolsillo delantero",
    cantidad: 0,
    codigo: 3,
  },
  {
    nombre: "Remera Celeste",
    descripcion: "Estampado batic, lista para agregar un poco de color.",
    detalle: "Larga vida al batic. Cómoda y lista para acompañarte en esas tardes de verano. ¡Super fresca!",
    precio: 5000,
    img: "./imagenes/Productos/ParteArriba/remeracelesteproducto.jpg",
    categoria: "remeras",
    alt: "Mujer posa con una remera celeste con manchitas blancas",
    cantidad: 0,
    codigo: 4,
  },
  {
    nombre: "Vestido amarillo",
    descripcion: "Agregale color a tu look, con tu vestido amarillo.",
    detalle: "Este vestido de lino es super fresco. ¡Resalta tu look con el amarillo!",
    precio: 10500,
    img: "./imagenes/Productos/ParteAbajo/polleraamarilla.jpg",
    categoria: "vestidos",
    alt: "Mujer posa con pollera amarilla con flores blanca",
    cantidad: 0,
    codigo: 5,
  },
  {
    nombre: "Pollera Blue Jean",
    descripcion: "De Jean, pero con onda. Te acompaña en esas tardes de verano.",
    detalle: "Las mejores polleras de Jean están en flamenca. Cómodas, lindas y ¡se adaptan a todo terreno!",
    precio: 15000,
    img: "./imagenes/Productos/ParteAbajo/polleraJean.jpg",
    categoria: "vestidos",
    alt: "Mujer posa con pollera de Jean",
    cantidad: 0,
    codigo: 6,
  },

];

// 2- Array de productos en el carrito

let productosCarrito = [];


/*********************** LOCAL STORAGE ***********************/

let localS = localStorage.getItem("productosCarrito");

document.addEventListener("DOMContentLoaded", () => {

    // LOCAL STORAGE - creo un LS y si tiene contenido, lo pusheo al array de productosCarrito

    if (localS !== null) {

      // Si habìa algo en LS lo guardo en carrito
      productosCarrito = JSON.parse(localS);

    };

    // Calculo la cantidad pedida entre todos los productos 

      let totalPedidos = 0;
      for (productoCarrito of productosCarrito) {
        totalPedidos += parseInt(productoCarrito.cantidadPedida);
      }

      // Busco el span del icono carrito

      if (totalPedidos > 0) {
      let spanCarrito = document.querySelector(".badge");
      spanCarrito.innerText = totalPedidos;

      let spanLG = document.querySelector(".badgeLG");
      spanLG.innerText = totalPedidos;
      }; 

});


/*********************** FILTROS Y CARDS SHOP ONLINE ***********************/


// Busco el div donde van los productos

let divProductos = document.querySelector(".divProductos");

// PARA OPTIMIZAR EL CÓDIGO TRABAJARÉ CREANDO FILTROS - cada filtro recorre el array productos, cada producto será clasificado según su categoría con el método filter. 
// El método filter permitirá crear un array para vestidos, otro para abrigos, etc (repitiendose para cada categoría este proceso). Así los productos quedarán clasificados de manera separada y podrán ser diferenciados al hacer click en el filtro correspondiente.


// Creo los filtros por categoría:

const vestidos = productos.filter ((producto) => producto.categoria == "vestidos");
const abrigos = productos.filter ((producto) => producto.categoria == "abrigos");
const remeras = productos.filter ((producto) => producto.categoria == "remeras");

// Tengo tener una opción de "todos" los productos

const todos = productos;

// Con query selector asocio el método filter con los botones de html (cuando el usuario haga click, se va a ejecutar el filtro)

let btnvestidos = document.querySelector(".btnVestidos");
let btnremeras = document.querySelector(".btnRemeras"); 
let btnabrigos = document.querySelector(".btnAbrigos");
let btntodos = document.querySelector(".btnTodos");


// CARDS PRODUCTOS 

// Necesito que las primeras cards se impriman ni bien se carga la página

document.addEventListener("DOMContentLoaded", () => {
  divProductos.innerText = "";
  filtros (todos);
});


// Luego convocaré la función filtros (declarada más adelante) para repetir el proceso por cada categoría

btnremeras.addEventListener("click", () => {
  divProductos.innerText = "";
  filtros (remeras);
});

btnabrigos.addEventListener("click", () => {
  divProductos.innerText = "";
  filtros (abrigos);
});

btntodos.addEventListener("click", () => {
  divProductos.innerText = "";
  filtros (todos);
});

// Boton vestidos contiene el banner al azar

btnvestidos.addEventListener("click", () => {
  divProductos.innerText = "";
  filtros (vestidos);

 
  // BANNERS 

  // Elijo el banner al azar

  let bannerRandom = Math.floor(Math.random() * 2);

  // Selecciono body del banner para imprimir imagen al azar

  let bodyBanner = document.querySelector(".bodyBanner");
  let modalBanner = document.querySelector(`#modalBanner`);
  let body = document.querySelector("body");

  // Reseteo el body

  bodyBanner.innerText = "";
  bodyBanner.setAttribute("style", "display: block");

  // Selecciono backdrop para cerrar modal y reseteo

  let modalBackdrop = document.querySelector(".modal-backdrop");
  modalBackdrop.setAttribute("class", "modal-backdrop fade show");

  if (bannerRandom == 1) {
  
    let imgBanner = document.createElement("img");
    imgBanner.setAttribute("src", "./imagenes/SobreNosotras/banner1.png");
    imgBanner.setAttribute("alt", "Promoción 40% en remeras");
    imgBanner.setAttribute("class", "img-fluid");
    imgBanner.setAttribute("id", "banner1");
    imgBanner.setAttribute("data-bs-dismiss", "modal");
    bodyBanner.append(imgBanner);

    // Cada banner tiene una accion distinta

    // Banner promo remeras, filtra las remeras

    let banner1 = document.querySelector("#banner1");

    banner1.addEventListener("click", () => {
    divProductos.innerText = "";
    filtros (remeras);

    });

  } else {
    let imgBanner = document.createElement("img");
    imgBanner.setAttribute("src", "./imagenes/SobreNosotras/banner2.png");
    imgBanner.setAttribute("alt", "Promoción por cybermonday 50% off en todos los productos");
    imgBanner.setAttribute("class", "img-fluid");
    imgBanner.setAttribute("id", "banner2");
    imgBanner.setAttribute("data-bs-dismiss", "modal");
    bodyBanner.append(imgBanner);

    // Banner cybermonday, filtra productos del cyber

    let banner2 = document.querySelector("#banner2");

    banner2.addEventListener("click", () => {
      divProductos.innerText = "";
      filtros (abrigos);

    });

  }; 

  
  setTimeout(() => {
    
    bodyBanner.setAttribute("style", "display: none");
    modalBackdrop.remove();
    modalBanner.classList.remove("show");
    body.removeAttribute("class");
    body.removeAttribute("style");

  }, 5000);

});

/*********************** FUNCION FILTROS ***********************/

// CREA E IMPRIME CARDS DE PRODUCTOS DE MANERA DINÁMICA EN LA SECCIÓN SHOP ONLINE

// Para optimizar el código, creo una funcion que filtra por categorias (es decir, toma las categorías como parámetro) y prepara cards para imprimir cada producto en el html

function filtros (categorias) {

  categorias.forEach((categoria) => {

    // Creo la card para cada producto
    
    let contenedorCard = document.createElement("div");
    contenedorCard.setAttribute("class", "col-12 col-md-6 col-lg-3 p-1");

    let card = document.createElement("div");
    card.setAttribute("class", "card");
    card.setAttribute("data-codigo", categoria.codigo);

    let img = document.createElement("img");
    img.setAttribute("src", categoria.img);
    img.setAttribute("class", "card-img-top rounded");
    img.setAttribute("alt", categoria.alt);

    let cardBody = document.createElement("div");
    cardBody.setAttribute("class", "card-body");

    let tituloCard = document.createElement("h3");
    tituloCard.setAttribute("class", "card-title");
    tituloCard.innerText = categoria.nombre;

    let parrafoCard = document.createElement("p");
    parrafoCard.setAttribute("class", "card-text");
    parrafoCard.innerText = categoria.descripcion;

    let precioCard = document.createElement("p");
    precioCard.setAttribute("class", "card-text fw-bolder fs-5");
    precioCard.setAttribute("data-precio", categoria.precio);
    precioCard.innerText = `$${categoria.precio.toLocaleString()}`;

    let detalleProducto = document.createElement("p");
    detalleProducto.setAttribute("class", "d-none");
    detalleProducto.innerText = categoria.detalle;

    let contenedorBotones = document.createElement("div")

    let btnDetalles = document.createElement("button");
    btnDetalles.setAttribute("class", "btn btn-primary btn-productos mt-2 col-10 btn-detalles");
    btnDetalles.innerText = "Ver producto";
    btnDetalles.setAttribute("data-bs-toggle", "modal");
    btnDetalles.setAttribute("data-bs-target", "#modalDetalle");

    let btnCarrito = document.createElement("button");
    btnCarrito.setAttribute("class", "btn btn-primary btn-acento mt-2 col-10");
    btnCarrito.innerText = "Agregar al carrito";

    contenedorBotones.append(btnDetalles, btnCarrito);
    cardBody.append(tituloCard, parrafoCard, precioCard, detalleProducto, contenedorBotones);
    card.append(img, cardBody);
    contenedorCard.append(card); 
    
    // Imprimo las cards
    
    divProductos.append(contenedorCard);

    /*********************** BTN AGREGAR AL CARRITO ***********************/


    btnCarrito.addEventListener("click", (e) => {

    // Objeto producto para pushear al array del carrito
    let productoCarrito = {};
    
    //Llamo a los elementos HTML

    let target = e.target;
    let producto = target.parentElement;
    let contenedorCard = producto.parentElement;
    let card = contenedorCard.parentElement;
    let img = card.firstChild;
    let imgSrc = img.src;
    let imgAlt = img.alt;
    let codigoProducto = card.dataset.codigo;
    let nombreProducto = contenedorCard.firstChild;
    let descripcionProducto = nombreProducto.nextElementSibling;
    let contenedorPrecioProducto = descripcionProducto.nextElementSibling;
    let precioProducto = parseInt(contenedorPrecioProducto.dataset.precio);
    let cantidadPedida = 1;

    // Uso cada propiedad del producto seleccionado para crear el objeto productoCarrito

    productoCarrito.nombre = nombreProducto.innerText;
    productoCarrito.precio = precioProducto;
    productoCarrito.codigo = codigoProducto;
    productoCarrito.cantidadPedida = cantidadPedida;
    productoCarrito.src = imgSrc;
    productoCarrito.alt = imgAlt;

    // Pusheo el objeto al array solamente en el primer click. Luego voy a evaluar si el producto ya existe antes de pushear. Si existe, lo elimino y pusheo de nuevo (evita productos duplicados)

    let productoExistente = productosCarrito.filter((productoCarrito) => productoCarrito.codigo == codigoProducto);

    if (productoExistente == false) {
      productosCarrito.push(productoCarrito);  
    } else {
      let eliminarProducto = productosCarrito.filter((productoCarrito) => productoCarrito.codigo == codigoProducto)[0];
      let i = productosCarrito.indexOf(eliminarProducto);
      productosCarrito.splice(i, 1);
      productosCarrito.push(productoCarrito);
    };

    // Guardo el carrito en LocalStorage

    localStorage.setItem("productosCarrito", JSON.stringify(productosCarrito));

    
    // Calculo la cantidad pedida entre todos los productos 

    let totalPedidos = 0;
    for (productoCarrito of productosCarrito) {
      totalPedidos += parseInt(productoCarrito.cantidadPedida);
    }

    // Busco el span del icono carrito


    let spanCarrito = document.querySelector(".badge");
    spanCarrito.innerText = totalPedidos;

    let spanLG = document.querySelector(".badgeLG");
    spanLG.innerText = totalPedidos;

  });

  /*********************** BTN DETALLES DEL PRODUCTO ***********************/

    // Busco el div donde van las imagenes del detalle

    let detalleImagenes = document.querySelector(".imagenesDetalle");

    // Agarro contenedor para los detalles del producto

    let detalleDatos = document.querySelector(".contenedorDetalles");


    // Cada vez que aprieto boton modal "detalles", traigo los datos de ese producto

    btnDetalles.addEventListener("click", (e) => {

    // Limpio la modal

    detalleImagenes.innerHTML = "";
    detalleDatos.innerHTML = "";

    // Objeto detalle para imprimir modal
    let detalleProducto = {};

    // Detecto los detalles del producto cuando la persona apreta el botón

    let target = e.target;
    let botones = target.parentNode;
    let producto = botones.parentNode;
    let cardProducto = producto.parentNode;
    let codigoProducto = cardProducto.dataset.codigo;
    let imgDetalle = cardProducto.firstChild;
    let imgSrc = imgDetalle.src;
    let imgAlt = imgDetalle.alt;
    let detalleBody = imgDetalle.nextSibling;
    let tituloProductoDetalle = detalleBody.firstChild;
    let infoDetalle = tituloProductoDetalle.nextSibling;
    let contenedorPrecioDetalle = infoDetalle.nextSibling;
    let precioDetalle = parseInt(contenedorPrecioDetalle.dataset.precio);
    let descripcionDetalle = contenedorPrecioDetalle.nextElementSibling;

    // Uso cada propiedad del producto seleccionado para crear el objeto detalleProducto que irá en la modal

    detalleProducto.src = imgSrc;
    detalleProducto.alt = imgAlt;
    detalleProducto.titulo = tituloProductoDetalle.innerText;
    detalleProducto.detalle = descripcionDetalle.innerText;
    detalleProducto.precio = precioDetalle;

    // Creo card modal de detalles del producto

    let img = document.createElement("img");
    img.setAttribute("src", detalleProducto.src);  
    img.setAttribute("class", "card-img-top rounded");
    img.setAttribute("alt", detalleProducto.alt);

    //Datos
    
    let tituloCard = document.createElement("h2");
    tituloCard.setAttribute("class", "h3 fw-bolder");
    tituloCard.innerText =  detalleProducto.titulo;

    let detalle = document.createElement("p");
    detalle.setAttribute("class", "w-75 m-auto m-lg-0");
    detalle.innerText = detalleProducto.detalle;

    let precioCard = document.createElement("p");
    precioCard.setAttribute("class", "h4 mt-4");
    precioCard.innerText = `$${detalleProducto.precio.toLocaleString()}`;

    let contenedorCredito = document.createElement("div");
    contenedorCredito.setAttribute("class", "mt-3");

    let logoCredito = document.createElement("img");
    logoCredito.setAttribute("src", "./imagenes/Productos/Iconos/paymentsmall.png");
    logoCredito.setAttribute("alt", "Icono tarjeta de credito");

    let parrafoCredito = document.createElement("p");
    parrafoCredito.setAttribute("class", "d-inline");
    parrafoCredito.innerText = `Paga con tarjeta de crédito`;

    let contenedorEnvio = document.createElement("div");
    contenedorEnvio.setAttribute("class", "mt-3");

    let logoEnvio = document.createElement("img");
    logoEnvio.setAttribute("src", "./imagenes/Productos/Iconos/shippingsmall.png");
    logoEnvio.setAttribute("alt", "Icono tarjeta de camión de envíos");

    let parrafoEnvio = document.createElement("p");
    parrafoEnvio.setAttribute("class", "d-inline");
    parrafoEnvio.innerText = `Envíos gratis a CABA`;
  
    contenedorCredito.append(logoCredito, parrafoCredito);
    contenedorEnvio.append(logoEnvio, parrafoEnvio);
    

    // Reseteo e Imprimo las cards en el contenedor HTML

    detalleImagenes.append(img);
    detalleDatos.append(tituloCard, detalle, precioCard, contenedorCredito, contenedorEnvio);

  });
  });
};



/*********************** CARRITO ***********************/

// Busco el boton del carrito/modal

let btnModal = document.querySelector(".btnModal");
let btnModalSM = document.querySelector(".btnModalSM");

// Busco el div donde va el carrito

let divCarrito = document.querySelector(".modal-body");

// Agarro contenedor para el precio

let contenedorPrecio = document.querySelector(".contenedorPrecio");


// Cada vez que aprieto boton modal, recorro array de carrito e imprimo cards

btnModal.addEventListener("click", () => {

divCarrito.innerHTML = "";
contenedorPrecio.innerHTML = "";

let btnPagar = document.querySelector("#btnPagar");
btnPagar.setAttribute("data-bs-target", ""); 
btnPagar.setAttribute("data-bs-toggle", "");
btnPagar.removeAttribute("disabled");


productosCarrito.forEach((productoCarrito) => {

    if (productoCarrito.cantidadPedida > 0) {
    // Creo la card para cada producto - la card de carrito es distinta a la de productos en la sección SHOP ONLINE


    let contenedorCardCarrito = document.createElement("div");
    contenedorCardCarrito.setAttribute("class", "card mb-3");
    contenedorCardCarrito.setAttribute("style", "max-width: 540px;");
    contenedorCardCarrito.setAttribute("data-codigo", productoCarrito.codigo);

    let cardCarritoRow = document.createElement("div");
    cardCarritoRow.setAttribute("class", "row g-0");

    let cardCarritoCol = document.createElement("div");
    cardCarritoCol.setAttribute("class", "col-md-8");

    let cardCarritoBody = document.createElement("div");
    cardCarritoBody.setAttribute("class", "card-body body-carrito");

    let tituloCardCarrito = document.createElement("h3");
    tituloCardCarrito.setAttribute("class", "card-title");
    tituloCardCarrito.innerText = productoCarrito.nombre;

    let precioCardCarrito = document.createElement("p");
    precioCardCarrito.setAttribute("class", "card-text fw-bolder");
    precioCardCarrito.setAttribute("data", productoCarrito.precio);
    precioCardCarrito.innerText = `$${productoCarrito.precio.toLocaleString()}`; 

    let contenedorStock = document.createElement("div");
    contenedorStock.setAttribute("class", "row d-flex");

    let contenedorRestar = document.createElement("div");
    contenedorRestar.setAttribute("class", "col-2");

    let btnRestar = document.createElement("button");
    btnRestar.setAttribute("class", "restar btn btn-primary btn-productos");
    btnRestar.innerText = "-";

    let stock = document.createElement("p");
    stock.setAttribute("class", "stock col-1");
    stock.innerText = productoCarrito.cantidadPedida;

    let contenedorSumar = document.createElement("div");
    contenedorSumar.setAttribute("class", "col-2");

    let btnSumar = document.createElement("button");
    btnSumar.setAttribute("class", "sumar btn btn-primary btn-productos");
    btnSumar.innerText = "+";

    let btnEliminar = document.createElement("button");
    btnEliminar.setAttribute("class", "btn btn-primary btn-acento mt-2");
    btnEliminar.innerText = "Eliminar producto";

    let contenedorImg = document.createElement("div");
    contenedorImg.setAttribute("class", "col-md-4");

    let imgCardCarrito = document.createElement("img");
    imgCardCarrito.setAttribute("src", productoCarrito.src);
    imgCardCarrito.setAttribute("class", "img-fluid rounded-start");
    imgCardCarrito.setAttribute("style", "width: 100%");
    imgCardCarrito.setAttribute("alt", productoCarrito.alt);


    contenedorImg.append(imgCardCarrito);
    contenedorSumar.append(btnSumar);
    contenedorRestar.append(btnRestar);
    contenedorStock.append(contenedorRestar, stock, contenedorSumar);
    cardCarritoBody.append(tituloCardCarrito, precioCardCarrito, contenedorStock, btnEliminar);
    cardCarritoCol.append(cardCarritoBody); 
    cardCarritoRow.append(cardCarritoCol, contenedorImg);
    contenedorCardCarrito.append(cardCarritoRow);

    // Imprimo las cards en el contenedor HTML

    divCarrito.append(contenedorCardCarrito);

  /*********************** SUMA UN ARTICULO AL PRODUCTO ***********************/

    // permite detectar cuál es la card del carrito sobre la cuál estamos sumando un producto

    let contador = productoCarrito.cantidadPedida;

    btnSumar.addEventListener("click", (e) => {

      contador ++;

      let target = e.target;
      let contenedorSuma = target.parentElement;
      let contenedorStock = contenedorSuma.parentElement;  
      let contenedorBody = contenedorStock.parentElement;
      let contenedorPadreBody = contenedorBody.parentElement;
      let contenedorRow = contenedorPadreBody.parentElement;
      let contenedorCard = contenedorRow.parentElement;
      let codigoProducto = contenedorCard.dataset.codigo;    
      let resta = contenedorStock.firstChild;
      let cantidadASumar = resta.nextSibling;
      cantidadASumar.innerText = contador;
      productoCarrito.cantidadPedida = contador;

      // Modifica el array - es decir, si tenía un artículo pedido, filtra, elimina y coloca la nueva cantidad pedida para cada producto

      let eliminarProducto = productosCarrito.filter((productoCarrito) => productoCarrito.codigo == codigoProducto)[0];
      let i = productosCarrito.indexOf(eliminarProducto);
      productosCarrito.splice(i, 1);
      productosCarrito.push(productoCarrito); 
      

      // Si tengo al menos un producto, se activa el botón de resta

      if (contador > 0) {
        btnPagar.removeAttribute("disabled");
        btnRestar.removeAttribute("disabled");
        btnEliminar.removeAttribute("disabled");
        }   

      // Calculo la cantidad pedida
      let totalPedidos = 0;
      for (productoCarrito of productosCarrito) {
        totalPedidos += parseInt(productoCarrito.cantidadPedida);
      };

      // Busco el span del icono carrito
      let spanCarrito = document.querySelector(".badge");
      spanCarrito.innerText = totalPedidos;

      let spanLG = document.querySelector(".badgeLG");
      spanLG.innerText = totalPedidos;


      // Calculo el total a pagar

      let calculoTotalAPagar = 0;
      for (let productoCarrito of productosCarrito) {
        calculoTotalAPagar += parseInt(productoCarrito.cantidadPedida) * parseInt(productoCarrito.precio);
      };

      // Busco contador precio

      let sumaDelTotal = document.querySelector(".sumaDelTotal");
      sumaDelTotal.innerText = `$${calculoTotalAPagar.toLocaleString()}`;

      // Guardo el carrito en LocalStorage

      localStorage.setItem("productosCarrito", JSON.stringify(productosCarrito));

      });

    /*********************** RESTA UN ARTICULO AL PRODUCTO ***********************/

    // La resta se hace SOLO si hay al menos un producto ordenado

    btnRestar.addEventListener("click", (e) => {

      contador --;
    
      let target = e.target;
      let contenedorResta = target.parentElement;
      let cantidadARestar = contenedorResta.nextSibling;
      let contenedorStock = contenedorResta.parentElement;  
      let contenedorBody = contenedorStock.parentElement;
      let contenedorPadreBody = contenedorBody.parentElement;
      let contenedorRow = contenedorPadreBody.parentElement;
      let contenedorCard = contenedorRow.parentElement;
      let codigoProducto = contenedorCard.dataset.codigo;  
      productoCarrito.cantidadPedida = contador;  
      console.log(cantidadARestar);

      if (contador >= 0) {
      cantidadARestar.innerText = contador;
      } else {
        contador = 0;
      }

      // Modificar el array

      if (contador <= 0) {
      let eliminarProducto = productosCarrito.filter((productoCarrito) => productoCarrito.codigo == codigoProducto)[0];
      let i = productosCarrito.indexOf(eliminarProducto);
      productosCarrito.splice(i, 1);
      btnRestar.setAttribute("disabled", "`true`");
      btnEliminar.setAttribute("disabled", "`true`");
      productosCarrito.push(productoCarrito);
      } else {
      let eliminarProducto = productosCarrito.filter((productoCarrito) => productoCarrito.codigo == codigoProducto)[0];
      let i = productosCarrito.indexOf(eliminarProducto);
      productosCarrito.splice(i, 1);
      productosCarrito.push(productoCarrito);
      };

      // Calculo la cantidad pedida
      let totalPedidos = 0;
      for (productoCarrito of productosCarrito) {
        totalPedidos += parseInt(productoCarrito.cantidadPedida);
      }

      // Busco el span del icono carrito
      let spanCarrito = document.querySelector(".badge");
      spanCarrito.innerText = totalPedidos;

      let spanLG = document.querySelector(".badgeLG");
      spanLG.innerText = totalPedidos;

      // Calculo el total a pagar

      let calculoTotalAPagar = 0;
      for (let productoCarrito of productosCarrito) {
        calculoTotalAPagar += parseInt(productoCarrito.cantidadPedida) * parseInt(productoCarrito.precio);
      };

      // Busco contador precio

      let sumaDelTotal = document.querySelector(".sumaDelTotal");
      sumaDelTotal.innerText = `$${calculoTotalAPagar.toLocaleString()}`;

      // Guardo el carrito en LocalStorage

      localStorage.setItem("productosCarrito", JSON.stringify(productosCarrito));

    
      });

    /*********************** ELIMINAR PRODUCTOS ***********************/

    // Boton eliminar producto del carrito

    btnEliminar.addEventListener("click", (e) => {

      let target = e.target;
      let contenedorBody = target.parentElement;
      let contenedorPadreBody = contenedorBody.parentElement;
      let contenedorRow = contenedorPadreBody.parentElement;
      let contenedorCard = contenedorRow.parentElement;
      let codigoProducto = contenedorCard.dataset.codigo;
      
      // Lo dejo de mostrar en HTML
      contenedorCard.remove();

      // Lo borro del array 

      let eliminarProducto = productosCarrito.filter((productoCarrito) => productoCarrito.codigo == codigoProducto)[0];
      let i = productosCarrito.indexOf(eliminarProducto);
      productosCarrito.splice(i, 1);
      contenedorCard.setAttribute("class", "card mb-3 opacity-25");
      btnPagar.setAttribute("disabled", "`true`");

     // Calculo la cantidad pedida
     let totalPedidos = 0;
     for (productoCarrito of productosCarrito) {
       totalPedidos += parseInt(productoCarrito.cantidadPedida);
     }

      // Busco el span del icono carrito

      let spanCarrito = document.querySelector(".badge");
      spanCarrito.innerText = totalPedidos;

      let spanLG = document.querySelector(".badgeLG");
      spanLG.innerText = totalPedidos;
             
      // Calculo el total a pagar

      let calculoTotalAPagar = 0;
      for (let productoCarrito of productosCarrito) {
        calculoTotalAPagar += parseInt(productoCarrito.cantidadPedida) * parseInt(productoCarrito.precio);
      };

      // Busco contador precio

      let sumaDelTotal = document.querySelector(".sumaDelTotal");
      sumaDelTotal.innerText = `$${calculoTotalAPagar.toLocaleString()}`;

    // Guardo el carrito en LocalStorage

    localStorage.setItem("productosCarrito", JSON.stringify(productosCarrito));

    });
  }
});

  /*********************** TOTAL A PAGAR AL FINAL DEL CARRITO ***********************/

    // Calculo el total a pagar

    let calculoTotalAPagar = 0;
    for (let productoCarrito of productosCarrito) {
      calculoTotalAPagar += parseInt(productoCarrito.cantidadPedida) * parseInt(productoCarrito.precio);
    };

    // Creo el total del pedido $$

    let totalAPagar = document.createElement("p");
    totalAPagar.setAttribute("class", "text-start col-6 px-4");
    totalAPagar.innerText = "Total a pagar";

    let sumaDelTotal = document.createElement("p");
    sumaDelTotal.setAttribute("class", "sumaDelTotal text-end col-6 px-4");
    sumaDelTotal.innerText = `$${calculoTotalAPagar.toLocaleString()}`;

        
    // Imprimo el precio

    contenedorPrecio.append(totalAPagar, sumaDelTotal);

    // Si hay productos, activo el boton pagar

    if (calculoTotalAPagar > 0) {
      btnPagar.setAttribute("data-bs-target", "#modalDatosCompra"); 
      btnPagar.setAttribute("data-bs-toggle", "modal");
    } else {
      btnPagar.setAttribute("disabled", "=`true`");
    };

    
    
});   

/*********************** FORMULARIOS ***********************/

// PARTE 1 - FORM DATOS COMPRADOR: Si la persona elige domicilio, se despliega el campo a completar

let formDatos = document.querySelector("#formDatos");

// Nombre

let contenedorNombre = document.createElement("div");
contenedorNombre.setAttribute("class", "form-floating mb-3 .radio");


let inputNombre = document.createElement("input");
inputNombre.setAttribute("class", "form-control");
inputNombre.setAttribute("type", "text");
inputNombre.setAttribute("id", "nombre");
inputNombre.setAttribute("placeholder", "Florencia");
inputNombre.setAttribute("required", "=`true`");

let labelNombre = document.createElement("label");
labelNombre.setAttribute("for", "nombre");
labelNombre.setAttribute("class", "form-label");
labelNombre.innerText = "Nombre";

// Email

let contenedorEmail = document.createElement("div");
contenedorEmail.setAttribute("class", "form-floating mb-3");

let inputEmail = document.createElement("input");
inputEmail.setAttribute("type", "email");
inputEmail.setAttribute("id", "email");
inputEmail.setAttribute("placeholder", "name@example.com");
inputEmail.setAttribute("required", "=`true`");
inputEmail.setAttribute("class", "form-control");

let labelEmail= document.createElement("label");
labelEmail.setAttribute("for", "email");
labelEmail.setAttribute("class", "form-label");
labelEmail.innerText = "Email";


// Teléfono

let contenedorTelefono = document.createElement("div");
contenedorTelefono.setAttribute("class", "form-floating mb-3");

let inputTelefono = document.createElement("input");
inputTelefono.setAttribute("type", "tel");
inputTelefono.setAttribute("id", "telefono");
inputTelefono.setAttribute("placeholder", "154 566 3938");
inputTelefono.setAttribute("class", "form-control");

let labelTelefono= document.createElement("label");
labelTelefono.setAttribute("for", "telefono");
labelTelefono.setAttribute("class", "form-label");
labelTelefono.innerText = "Teléfono";

// Domicilio

let contenedorDomicilio = document.createElement("div");
contenedorDomicilio.setAttribute("class", "form-floating mb-3");

let inputDomicilio = document.createElement("input");
inputDomicilio.setAttribute("type", "text");
inputDomicilio.setAttribute("id", "domicilio");
inputDomicilio.setAttribute("placeholder", "Acevedo 689 5B");
inputDomicilio.setAttribute("required", "=`true`");
inputDomicilio.setAttribute("class", "form-control");

let labelDomicilio = document.createElement("label");
labelDomicilio.setAttribute("for", "domicilio");
labelDomicilio.setAttribute("class", "form-label");
labelDomicilio.innerText = "Domicilio";

// Radio button 1

let contenedorRadio1 = document.createElement("div");
contenedorRadio1.setAttribute("class", "radio mb-1");

let radioButton1 = document.createElement("div");
radioButton1.setAttribute("class", "form-check");

let inputRadio1 = document.createElement("input");
inputRadio1.setAttribute("type", "radio");
inputRadio1.setAttribute("id", "retiro");
inputRadio1.setAttribute("checked", "=`true`");
inputRadio1.setAttribute("name", "envio");
inputRadio1.setAttribute("class", "form-check-input");

let labelRadio1= document.createElement("label");
labelRadio1.setAttribute("for", "retiro");
labelRadio1.setAttribute("class", "form-check-label");
labelRadio1.innerText = "Retiro en local (Aguirre 677, CABA)";

// Radio button 2

let contenedorRadio2 = document.createElement("div");
contenedorRadio2.setAttribute("class", "radio mb-1");

let radioButton2 = document.createElement("div");
radioButton2.setAttribute("class", "form-check");

let inputRadio2 = document.createElement("input");
inputRadio2.setAttribute("type", "radio");
inputRadio2.setAttribute("id", "envio");
inputRadio2.setAttribute("name", "envio");
inputRadio2.setAttribute("class", "form-check-input");

let labelRadio2= document.createElement("label");
labelRadio2.setAttribute("for", "envio");
labelRadio2.setAttribute("class", "form-check-label");
labelRadio2.innerText = "Enviar a mi domicilio";

// Botones

let contenedorBotones = document.createElement("div");
contenedorBotones.setAttribute("class", "mt-7 d-grid");

let botonConfirmarDatos = document.createElement("button");
botonConfirmarDatos.setAttribute("type", "submit");
botonConfirmarDatos.setAttribute("class", "btn btn-acento mt-3 btnSubmit");
botonConfirmarDatos.innerText = "Confirmar datos";

let botonIrAlPago = document.createElement("button");
botonIrAlPago.setAttribute("class", "btn btn-acento mt-1 btnAbrirPago");
botonIrAlPago.setAttribute("data-bs-target", "#modalPago");
botonIrAlPago.setAttribute("data-bs-toggle", "modal");
botonIrAlPago.setAttribute("disabled", "=`true`");
botonIrAlPago.innerText = "Ir al pago";


// Imprimo el form

contenedorNombre.append(inputNombre, labelNombre);
contenedorEmail.append(inputEmail, labelEmail);
contenedorTelefono.append(inputTelefono, labelTelefono);
contenedorDomicilio.append(inputDomicilio, labelDomicilio);
radioButton1.append(inputRadio1, labelRadio1);
contenedorRadio1.append(radioButton1);
radioButton2.append(inputRadio2, labelRadio2);
contenedorRadio2.append(radioButton2);
contenedorBotones.append(botonConfirmarDatos, botonIrAlPago);
formDatos.append(contenedorNombre, contenedorEmail, contenedorTelefono, contenedorDomicilio, contenedorRadio1, contenedorRadio2, contenedorBotones);


// El boton submit contiene los validadores. Una vez que los datos estan ok se puede acceder al boton "Pagar"

document.querySelector("#formDatos").addEventListener("submit", (e) => {

  
  // evitar que se refresque la pagina
  e.preventDefault();

  let btnAbrirPago = document.querySelector(".btnAbrirPago");
  btnAbrirPago.removeAttribute("disabled");
  
});



// PARTE 2 FORM PAGO COMPRA

// Medios de pago, opciones desplegables de acuerdo a lo que usuario selecciona

let formPago = document.querySelector("#formPago");

// Radio button transferencia

let contenedorRadioTransferencia = document.createElement("div");
contenedorRadioTransferencia.setAttribute("class", "radio mb-1");

let radioTransferencia = document.createElement("div");
radioTransferencia.setAttribute("class", "form-check");

let inputRadioTransferencia = document.createElement("input");
inputRadioTransferencia.setAttribute("type", "radio");
inputRadioTransferencia.setAttribute("id", "transferencia");
inputRadioTransferencia.setAttribute("name", "pago");
inputRadioTransferencia.setAttribute("class", "form-check-input");
inputRadioTransferencia.setAttribute("checked", "=`true`");

let labelRadioTransferencia = document.createElement("label");
labelRadioTransferencia.setAttribute("for", "transferencia");
labelRadioTransferencia.setAttribute("class", "form-check-label");
labelRadioTransferencia.innerText = "Transferencia bancaria";

let divTransferencia = document.createElement("div");
divTransferencia.setAttribute("class", "divTransferencia");

// Radio button tarjeta

let contenedorRadioTarjeta = document.createElement("div");
contenedorRadioTarjeta.setAttribute("class", "radio mb-1");

let radioTarjeta = document.createElement("div");
radioTarjeta.setAttribute("class", "form-check");

let inputRadioTarjeta = document.createElement("input");
inputRadioTarjeta.setAttribute("type", "radio");
inputRadioTarjeta.setAttribute("id", "tarjeta");
inputRadioTarjeta.setAttribute("name", "pago");
inputRadioTarjeta.setAttribute("class", "form-check-input");

let labelRadioTarjeta = document.createElement("label");
labelRadioTarjeta.setAttribute("for", "tarjeta");
labelRadioTarjeta.setAttribute("class", "form-check-label");
labelRadioTarjeta.innerText = "Tarjeta de crédito";

let divTarjeta = document.createElement("div");
divTarjeta.setAttribute("class", "divTarjeta");

// Botones

let contenedorBotonesPago = document.createElement("div");
contenedorBotonesPago.setAttribute("class", "mt-7 d-grid");

let botonConfirmarDatosPago = document.createElement("button");
botonConfirmarDatosPago.setAttribute("type", "submit");
botonConfirmarDatosPago.setAttribute("class", "btn btn-acento mt-3 btnSubmitPago");
botonConfirmarDatosPago.innerText = "Confirmar datos";

let botonPagar = document.createElement("button");
botonPagar.setAttribute("class", "btn btn-acento mt-1 btnPago");
botonPagar.setAttribute("data-bs-target", "#modalExitosa");
botonPagar.setAttribute("data-bs-toggle", "modal");
botonPagar.setAttribute("disabled", "=`true`");
botonPagar.innerText = "Pagar";

// Imprimo el form

radioTransferencia.append(inputRadioTransferencia, labelRadioTransferencia, divTransferencia);
contenedorRadioTransferencia.append(radioTransferencia);
radioTarjeta.append(inputRadioTarjeta, labelRadioTarjeta, divTarjeta);
contenedorRadioTarjeta.append(radioTarjeta);
contenedorBotonesPago.append(botonConfirmarDatosPago, botonPagar);
formPago.append(contenedorRadioTransferencia, contenedorRadioTarjeta, contenedorBotonesPago);

// Desplegable info transferencia

let botonTransferencia = document.getElementById("transferencia");
let parrafoTransferencia = document.createElement("p");
parrafoTransferencia.setAttribute("class", "mt-2 radio");
parrafoTransferencia.innerText = "Te enviaremos a tu mail los datos necesarios para la transferencia. Una vez comprobado el pago, se activará la preparación del producto";


// Por default viene info transferencia 

if (botonTransferencia.checked) {
  let divTransferencia = document.querySelector(".divTransferencia");
  divTransferencia.append(parrafoTransferencia);
};


// Click en la opcion transferencia

botonTransferencia.addEventListener("click", () => {

  let divTransferencia = document.querySelector(".divTransferencia");
  divTransferencia.append(parrafoTransferencia);
  divTarjeta.innerText = "";

});


// Clcik en la opcion tarjeta

let botonTarjeta = document.getElementById("tarjeta");

botonTarjeta.addEventListener("click", () => {

divTransferencia.innerText = "";
  
// Creo imagen tarjeta

let tarjetaCredito = document.createElement("div");
  tarjetaCredito.setAttribute("class", "tarjetaCredito");

  let fondoTarjeta = document.createElement("div");
  fondoTarjeta.setAttribute("class", "fondoTarjeta");

  let contenedorCredito = document.createElement("div");
  contenedorCredito.setAttribute("class", "contenedorCredito");

  let headerTarjeta = document.createElement("div");
  headerTarjeta.setAttribute("class", "headerTarjeta");

  let imagenTarjeta = document.createElement("img");
  imagenTarjeta.setAttribute("class", "imagenTarjeta");
  imagenTarjeta.setAttribute("src", "./imagenes/Productos/Iconos/visa.png");

  let aclaracionCredito = document.createElement("p");
  aclaracionCredito.setAttribute("class", "credito");
  aclaracionCredito.innerText = "crédito";

  let numeroCredito = document.createElement("div");
  numeroCredito.setAttribute("class", "numero");
  numeroCredito.innerText = "**** **** **** ****";

  let nombreCredito = document.createElement("div");
  nombreCredito.setAttribute("class", "nombre");
  nombreCredito.innerText = "Nombre titular";

  let fechaCredito = document.createElement("div");
  fechaCredito.setAttribute("class", "fecha");
  fechaCredito.innerText = "Venc."

  headerTarjeta.append(imagenTarjeta, aclaracionCredito);
  contenedorCredito.append(headerTarjeta, numeroCredito, nombreCredito, fechaCredito);
  fondoTarjeta.append(contenedorCredito);
  tarjetaCredito.append(fondoTarjeta);

  // Creo form datos tarjeta

  let contenedorTarjeta = document.createElement("div");
  contenedorTarjeta.setAttribute("class", "form-floating mt-3");

  let inputTarjeta = document.createElement("input");
  inputTarjeta.setAttribute("type", "text");
  inputTarjeta.setAttribute("minlength","16");
  inputTarjeta.setAttribute("maxlength","16");
  inputTarjeta.setAttribute("class", "form-control");
  inputTarjeta.setAttribute("id", "inputNumero");
  inputTarjeta.setAttribute("placeholder", "**** **** **** 5621");
  inputTarjeta.setAttribute("required", "=`true`");

  let labelTarjeta = document.createElement("label");
  labelTarjeta.setAttribute("for", "inputNumero");
  labelTarjeta.setAttribute("class", "form-label");
  labelTarjeta.innerText = "Número de tarjeta";

  let contenedorNombreTarjeta = document.createElement("div");
  contenedorNombreTarjeta.setAttribute("class", "form-floating mt-3");

  let inputNombreTarjeta = document.createElement("input");
  inputNombreTarjeta.setAttribute("type", "text");
  inputNombreTarjeta.setAttribute("class", "form-control");
  inputNombreTarjeta.setAttribute("id", "inputNombre");
  inputNombreTarjeta.setAttribute("placeholder", "Candela Martinez");
  inputNombreTarjeta.setAttribute("required", "=`true`");

  let labelNombreTarjeta = document.createElement("label");
  labelNombreTarjeta.setAttribute("for", "inputNombre");
  labelNombreTarjeta.setAttribute("class", "form-label");
  labelNombreTarjeta.innerText = "Nombre en la tarjeta";

  let contenedorFecha = document.createElement("div");
  contenedorFecha.setAttribute("class", "form-floating mt-3");

  let inputFecha = document.createElement("input");
  inputFecha.setAttribute("type", "text");
  inputFecha.setAttribute("class", "form-control");
  inputFecha.setAttribute("id", "inputFecha");
  inputFecha.setAttribute("placeholder", "02/2026");
  inputFecha.setAttribute("required", "=`true`");

  let labelFecha = document.createElement("label");
  labelFecha.setAttribute("for", "inputFecha");
  labelFecha.setAttribute("class", "form-label");
  labelFecha.innerText = "Fecha de vencimiento";

  contenedorTarjeta.append(inputTarjeta, labelTarjeta);
  contenedorNombreTarjeta.append(inputNombreTarjeta, labelNombreTarjeta);
  contenedorFecha.append(inputFecha, labelFecha);
  divTarjeta.append(tarjetaCredito, contenedorTarjeta, contenedorNombreTarjeta, contenedorFecha);
  
  // Cuando se desclickea el input, el dato pasa a la imagen
  
  inputTarjeta.addEventListener("blur", function (e) {
    let target = e.target;
    let numeroTarjeta = target.value;
    numeroCredito.innerText = numeroTarjeta; 
  },
  true,
  );

  inputNombreTarjeta.addEventListener("blur", function (e) {
    let targetNombre = e.target;
    let nombreTarjeta = targetNombre.value.toUpperCase();
    nombreCredito.innerText = nombreTarjeta; 
  },
  true,
  );

  inputFecha.addEventListener("blur", function (e) {
  let targetFecha = e.target;
  let fechaTarjeta = targetFecha.value;
  fechaCredito.innerText = fechaTarjeta; 
  },
  true,
  );
  

});


// El boton submit valida los datos. Una vez que los datos estan ok se puede acceder al boton "Pagar"

document.querySelector("#formPago").addEventListener("submit", (e) => {

  // evitar que se refresque la pagina
  e.preventDefault();
  
  let btnPago = document.querySelector(".btnPago");
  btnPago.removeAttribute("disabled");
  
});


// FORM: TOMO DATOS DE COMPRADORES  

let usuarios = [];

// Form pago - al hacer click en pagar se mandan todos los datos del formulario

document.querySelector(".btnPago").addEventListener("click", (e) => {

  // evitar que se refresque la pagina
  e.preventDefault();

  // Encuentro todos los inputs
  let nombre = document.querySelector("#nombre");
  let email = document.querySelector("#email");
  let telefono = document.querySelector("#telefono");
  let direccion = document.querySelector("#domicilio");
  let retiro = document.querySelector("#retiro");
  let envio = document.querySelector("#envio");
  let transferencia = document.querySelector("#transferencia");
  let tarjeta = document.querySelector("#tarjeta");
  let inputNumero = document.querySelector("#inputNumero");
  let inputNombre = document.querySelector("#inputNombre");
  let inputFecha = document.querySelector("#inputFecha");

  
  // Creo el objeto / con transferencia no se envia datos de tarjeta

  if (transferencia.checked) {

  let usuario = {
    nombre: nombre.value,
    email: email.value,
    telefono: telefono.value,
    retiro: retiro.checked,
    envio: envio.checked,
    direccion: direccion.value,
    transferencia: transferencia.checked,
    tarjeta: tarjeta.checked,

  };

  usuarios.push(usuario);

  // Limpio los inputs
  nombre.value = "";
  email.value = "";
  telefono.value = "";
  retiro.value = "";
  envio.value = "";  
  direccion.value = "";
  transferencia.value = "";
  tarjeta.value = "";

  // Si se paga con tarjeta 

} else {

  let usuario = {
    nombre: nombre.value,
    email: email.value,
    telefono: telefono.value,
    retiro: retiro.checked,
    envio: envio.checked,
    direccion: direccion.value,
    transferencia: transferencia.checked,
    tarjeta: tarjeta.checked,
    numeroTarjeta: inputNumero.value,
    nombreTarjeta: inputNombre.value,
    fechaTarjeta: inputFecha.value,

  };

  usuarios.push(usuario);

  // Limpio los inputs
  nombre.value = "";
  email.value = "";
  telefono.value = "";
  retiro.value = "";
  envio.value = "";  
  direccion.value = "";
  transferencia.value = "";
  tarjeta.value = "";
  inputNumero.value = "";
  inputNombre.value = "";
  inputFecha.value = "";

};
  
// Reseteo botones

let btnAbrirPago = document.querySelector(".btnAbrirPago");
btnAbrirPago.setAttribute("disabled", "=`true`");
let btnPago = document.querySelector(".btnPago");
btnPago.setAttribute("disabled", "=`true`");

// Reseteo SPAN carrito
let spanCarrito = document.querySelector(".badge");
spanCarrito.innerText = 0;

let spanLG = document.querySelector(".badgeLG");
spanLG.innerText = 0;

// Reseteo card carrito

productosCarrito = [];

// Reseteo LocalStorage

localStorage.clear();
  
});

/*********************** EVENTOS DE TECLADO ***********************/

document.addEventListener("keydown", (e) => {
   
    // Guardo la tecla
    let key = e.key;
    
    if( key === "r") {
        // Filtro por remeras
        divProductos.innerText = "";
        filtros (remeras);
      } else if( key === "v") {
        // Filtro por vestidos
        divProductos.innerText = "";
        filtros (vestidos);
      } else if( key === "a") {
        // Filtro por abrigos
        divProductos.innerText = "";
        filtros (abrigos);
      } else if( key === "t") {
        // Filtro por vestidos
        divProductos.innerText = "";
        filtros (todos);
      }
});