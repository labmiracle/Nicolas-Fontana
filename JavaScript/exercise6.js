/*

  Ejercicio 6
    • Vamos a calcular el precio de un carrito de compra. Un carrito de compra tiene una
    propiedad productos que es una lista de los productos. Cada producto tiene las siguientes
    propiedades:
      – nombre: Nombre del producto (Papel higiénico, leche, ...)
      – unidades: Número de elementos que se van a comprar de dicho producto
      – precio: Precio unitario del producto

    Además, tiene una propiedad precioTotal donde se va actualizando automáticamente el precio
    del producto. Crear el código necesario para soportar esta funcionalidad.

    Datos de prueba:

    const carrito = {
      productos: [
        {
          nombre: "papel higienico",
          unidades: 4,
          precio: 5,
        },
        {
          nombre: "chocolate",
          unidades: 2,
          precio: 1.5,
        },
      ],
      get precioTotal() {},
    }

*/

const carrito = {
  productos: [
    {
      nombre: "papel higienico",
      unidades: 4,
      precio: 5,
    },
    {
      nombre: "chocolate",
      unidades: 2,
      precio: 1.5,
    },
  ],

  get precioTotal() {
    let total = 0;
    for (let producto of this.productos) {
      total += producto.unidades * producto.precio;
    }
    return total;
  },
};

console.log(carrito.precioTotal);
