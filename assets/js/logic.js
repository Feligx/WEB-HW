function suma(a, b) {
  return a + b
}
function resta(a, b) {
  return a - b
}
function multip(a, b) {
  return a * b
}
function div(a, b) {
  return a / b
}
function module(a, b) {
  return a % b
}
//const resta = (a, b) => a-b
//const multip = (a, b) => a*b
//const div = (a, b) => a/b
//const module = (a, b) => a % b

/*
const operaciones = {
  suma: function (a, b) {
    return a + b
  },
  resta: function (a, b) {
    return a - b
  },
  multiplicar: function (a, b) {
    return a * b
  },
  dividir: function (a, b) {
    return a / b
  },
  modulo: function (a, b) {
    return a % b
  }
}
*/

const operations = [suma, resta, multip, div, module]

const n1 = parseFloat(prompt('Ingrese el primer número: '))
const n2 = parseFloat(prompt('Ingrese el segundo número: '))

console.log(`Los números ingresados son: ${n1} y ${n2}`)
/*Object.values(operaciones).forEach(operation => {
  console.log(`El resultado de la operación ${operation.name} es: ${operation(n1, n2)}`)
})*/
operations.forEach(operation => {
  console.log(`El resultado de la operación ${operation.name} es: ${operation(n1, n2)}`)
})