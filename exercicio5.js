//Capture 10 itens para compor a lista do supermercado. Após isso, imprima-os separando por uma vírgula
alert("List Maker: Faça uma lista com 10 linhas")
let list = []

for(let i = 0; i<10; i++) {
  list[i] = prompt("Digite um item pra lista")
}
alert(list)