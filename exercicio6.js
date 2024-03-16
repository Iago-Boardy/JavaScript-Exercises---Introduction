//Jogo da adivinhação 
alert("Bem vindo ao jogo da adivinhação!")
let randomN = Math.round /*(OU ceil)*/ (Math.random() * 10) //Cria números aleatórios que são arredonados com o Math Round
console.log(randomN)
let chute = 0

let i = 0
while (chute != randomN) {
 chute = prompt("Tente adivinhar o número de 1 a 10!")
  if (chute != randomN) {
    alert("Você errou! Tente novamente")
  }
  i ++
}
alert(`Parabéns, você descobriu o número secreto em ${i} tentativas!`)