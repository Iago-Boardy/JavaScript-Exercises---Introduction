//Exercícios
let n1 = prompt("Digite um número")
let n2 = prompt("Digite outro número")

alert('Soma é ' + Number(Number(n1) + Number(n2)))
alert('Subtração é ' + Number(Number(n1) - Number(n2)))
alert('Multiplicação é ' + Number(Number(n1) * Number(n2)))
alert('Divisão é ' + Number(Number(n1) / Number(n2)))
alert('Resto da divisão é ' + Number(Number(n1) % Number(n2)))

let soma = n1 + n2
if (soma % 2 == 0) {
  alert("O número é par")
} else {
  alert("O número é ímpar")
}

if(n1 === n2) {
  alert("Os números inseridos são iguais")
}else {
  alert("Os números inseridos são diferentes")
}