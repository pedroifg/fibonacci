const prompt = require("prompt-sync")();

function validaNumeroFibonacci(numero) {
  let inicio = 0;
  let proximo = 1;

  if (numero === inicio) {
    return true;
  }

  while (proximo <= numero) {

    if (proximo === numero) {
      return true;
    }

    const calc = inicio + proximo;
    inicio = proximo;
    proximo = calc;    
  }
    
  return false;
}

const numero = Number(prompt("Digite um número: "));
if (validaNumeroFibonacci(numero)) {
  console.log(numero, " pertence a sequência de Fibonacci!");
} else {
  console.log(numero, "NÃO pertence a sequência de Fibonacci!!!");
}
