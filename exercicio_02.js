//Exercício 02 
const estudantes = [
  {
    nome: "Julim do Beco",
    notaPrimeiraProva: 6,
    notaSegundaProva: 9,
  },
  {
    nome: "Pedro",
    notaPrimeiraProva: 5,
    notaSegundaProva: 2,
  },
  {
    nome: "Márcio",
    notaPrimeiraProva: 9,
    notaSegundaProva: 10,
  }
]

function calculoMedia (notaPrimeiraProva, notaSegundaProva) {
  let media = (Number(Number(notaPrimeiraProva) + Number(notaSegundaProva)) / 2)
  return media;
}

let media = []
for(let i = 0; i < 3; i++){
media[i] = calculoMedia(estudantes[i].notaPrimeiraProva, estudantes[i].notaSegundaProva)
}


for(let j = 0; j < 3; j++) {
  if(media[j]>=7){
  alert(`A média do aluno ${estudantes[j].nome} é de ${media[j]}. Parabéns, você foi aprovado!`)
}else {
  alert(`A média do aluno ${estudantes[j].nome} é de ${media[j]}. Que pena, você foi reprovado ):`)
}
}     