/*

  Ejercicio 3
    • Cada día una planta crece en metros según su velocidadCrecimiento. Cada noche, dicha
    planta decrece en metros en base a su velocidadDecrecimiento debido a la falta de sol.
    Cuando nace, mide exactamente 0 metros. Queremos saber los días que tardará una planta
    en alcanzar cierta alturaDeseada. Crear una función que reciba velocidadCrecimiento,
    velocidadDecrecimiento y alturaDeseada como números enteros positivos y devuelva
    el número de días que tardará la planta en medir la alturaDeseada.

    function calcularDiasCrecimiento(velocidadCrecimiento, velocidadDecrecimiento, alturaDeseada) {}

*/

function calcularDiasCrecimiento(velocidadCrecimiento, velocidadDecrecimiento, alturaDeseada) {
  // validations
  if (
    typeof velocidadCrecimiento !== "number" ||
    typeof velocidadDecrecimiento !== "number" ||
    typeof alturaDeseada !== "number"
  ) {
    return "Data entered must be integers";
  }

  if (velocidadCrecimiento <= velocidadDecrecimiento) {
    return "Rate of growth must be greater than the rate of decrease.";
  }

  if (velocidadCrecimiento <= 0 || velocidadDecrecimiento <= 0 || alturaDeseada <= 0) {
    return "Data entered must be greater than 0";
  }

  // resolution
  const dias = Math.ceil(alturaDeseada / (velocidadCrecimiento - velocidadDecrecimiento));

  return dias;
}

const result = calcularDiasCrecimiento(3.7, 2, 3);

console.log(result);
