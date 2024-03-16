//Lista de pacientes, cada item tem várias infos do paciente
const patients = [{
  name: 'Matheus',
  age: 24,
  weight: 94,
  height: 171.6
},
{
  name: 'Jorge Aragão',
  age: 19,
  weight: 74,
  height: 191.6
},
{
  name: 'Pablo Escobar',
  age: 49,
  weight: 110,
  height: 160.6
}
]

let patientsNames = []
let patientsAges = []
let patientsWeight = []
let patientsHeight = []

for(let i = 0; i < patients.length; i++) {
  patientsNames [i] = patients[i].name
}

for(let i = 0; i < patients.length; i++) {
  patientsAges [i] = patients[i].age
}

for(let i = 0; i < patients.length; i++) {
  patientsWeight [i] = patients[i].weight
}

for(let i = 0; i < patients.length; i++) {
  patientsHeight [i] = patients[i].height
}

alert(`${patientsNames[0]} tem ${patientsAges[0]} anos, pesa ${patientsWeight[0]} quilos e tem ${patientsHeight[0]} metros de altura.`)
alert(`${patientsNames[1]} tem ${patientsAges[1]} anos, pesa ${patientsWeight[1]} quilos e tem ${patientsHeight[1]} metros de altura.`)
alert(`${patientsNames[2]} tem ${patientsAges[2]} anos, pesa ${patientsWeight[2]} quilos e tem ${patientsHeight[2]} metros de altura.`)