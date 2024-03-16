//Solicitar nome do aluno, 3 notas e calcular a média trimestral do aluno
let name = prompt("Digite o nome do aluno");
let n1 = prompt("Digite a primeira nota:")
let n2 = prompt("Digite a segunda nota:")
let n3 = prompt("Digite a terceira nota:")

let media = ((Number(n1) + Number(n2) + Number(n3))) / 3

if (media >= 6) {
  alert(`O aluno ${name} ficou com a média ${(media.toFixed(2))} e passou de ano!`)
} else {
  alert(`O aluno ${name} ficou com a média  ${(media.toFixed(2))} e repetiu de ano! Se esforece mais na prova de recuperação!`)
}