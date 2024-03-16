alert("Bem-vindo ao Jogo de Adivinhação de Palavras!\nVocê tem 6 tentativas para adivinhar qual a palavra (apenas letras minúsculas):\n\nIndicação de letras corretas na posição correta (*).\nIndicação de letras corretas, mas na posição errada (+).\nIndicação de letras que não fazem parte da palavra (-).\n\n");

const adivinhar = "ivoti"
let tentativa = ""
let feedback = []

for (let i = 0; i < 6; i++) {
tentativa = prompt(`Escreva a ${i+1}° tentativa:` )
if (tentativa.length >= 6 || tentativa.length <= 4) {
    alert("Digite uma palavra válida!")
    return 0;
}

 if(tentativa === adivinhar) {
    alert("Parabéns, você adivinhou a palavra!")
    return 0;
} else {
    for (let j = 0; j < 5; j++) {
        if(tentativa[j] == adivinhar[j]) {
            feedback[j]= "*"
        } else if (adivinhar.includes(tentativa[j])) {
            feedback[j] = "+"
        } else {
            feedback[j] = "--"
        }
    }
}
alert(feedback.join(""))
}

alert("Você perdeu! Todas as suas tentativas acabaram.")
