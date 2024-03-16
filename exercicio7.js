//Trabalhando com Switch
let option
let list = ['Air Jordan', 'Air Max', 'Soccer Max']

while (option != 3) {
option = prompt(`
Bem vindo ao sistema de Tênis da Nike! Digite o número da opção digitada:
\n1. Cadastrar um item na lista abaixo
\n2. Mostrar os itens cadastrados
\n3. Sair do programa
`)

switch(option) {
  case '1':
  let newItem = prompt("Digite qual será o novo item:")
  list.push(newItem)
  break;

  case '2': 
  if(list == '') {
    alert("Não existem itens cadastrados")
  } else {
    alert(list.join("\n"))
  }
  break;

  case '3':
  alert('Fechando o programa...')
  break;

  default:
  alert("Digite um número válido!")
}
}