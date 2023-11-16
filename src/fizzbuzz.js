function generarFizzBuzzPara(numero) {
  
  if (esDivisiblePor(numero,15)) {
    return "FizzBuzz";
  } 
  if (esDivisiblePor(numero,3)) {
    return  "Fizz";
  } 
  if (esDivisiblePor(numero,5)) {
    return "Buzz";
  } 
  return numero.toString();
}

function esDivisiblePor(numero,divisor){
  return numero % divisor===0;
}

function generarSecuenciaFizzBuzz(numero) {
  let secuenciaFizzBuzz = "";
  for (let i = 1; i <= numero; i++) {
    secuenciaFizzBuzz += generarFizzBuzzPara(i);
    if (i != numero) secuenciaFizzBuzz += ", ";
  }
  return secuenciaFizzBuzz;
}

export { generarFizzBuzzPara, generarSecuenciaFizzBuzz };
