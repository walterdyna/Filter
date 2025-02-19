/*

O método filter no JavaScript é como um filtro de café: ele pega um conjunto de coisas (como uma lista de números ou nomes), passa por cada uma delas e só deixa passar aquelas que atendem a um certo critério.

Imagine que você tem um grupo de pessoas e quer apenas as que têm mais de 18 anos. O filter vai percorrer uma por uma e só devolver as que atendem a essa condição, formando uma nova lista com esse resultado.

Ou seja, ele não altera a lista original, apenas cria uma nova com os elementos que passaram no teste.

1 - O filter vai passar por todos os itens do array, e o primeiro parâmetro é cada item, um por vez do array que estamos filtrando. Item obrigatorio.
2 - O indice e a posição atual que estamos fiktrando. Item opcional.
3 - Uma copia do array original. Item opcional.

A cada item, fazemos uma "pergunta" ao codigo. Se a resposta for verdadeira, na quele item, ele guardara o valorAtual no novo Arrey. Caso seja falso, o valor sera descartado.

*/

//const numeros = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ]; // Array de números
//const pares = numeros.filter(valorAtual % 2 ===0);

// pares ficou assim : [2, 4, 6, 8, 10];
// nuemeros continua... [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const list = [20, 3, 234, 12, 17, 541, 6, 87, 275, 1000]

const newList = list.filter(number =>{
    if (number > 100) return true
    else return false
});

//ou

const newList2 = list.filter(item => item < 100);

console.log(newList)
console.log(newList2)
//console.log(numeros)
//console.log(pares)

//----------------------------

// saber se o numero e par

const numPar = list.filter(number => number % 2 === 0);

console.log(numPar)

// Mais complexo
console.log("mais complexo")

const companies = [
    { name: "Samsung", marketValue: 50, CEO: "Kim Hyun Suk", foundedOn:1983},
    { name: "Microsoft", marketValue: 415, CEO: "Satya Nadella", foundedOn:1975 },
    { name: "Intel", marketValue: 117, CEO: "Brian Krzanich", foundedOn:1968 },
    { name: "Facebook", marketValue: 383, CEO: "Mark Zuckerberg", foundedOn:2004 },
    { name: "Spotify", marketValue: 50, CEO: "Daniel Ek", foundedOn:2006 },
    { name: "Apple", marketValue: 245, CEO: "Tim Cook", foundedOn:1976 }
]

const companiesFilter = companies.filter(company => {
    if (company.marketValue < 200 && company.foundedOn > 1990) return true
} )

console.log(companiesFilter)

console.log("Missão numero 1 - mais 10%")

// missão 
/*
Adcionar 10% de valor de mercado a todas as companhias -> MAP
Filtrar somente companhias fundados abaixo de 190 - FILTER
Somar o valor de mercado das restantes -> REDUCE
*/

const add10Percent = (company) => {
    company.marketValue = company.marketValue + company.marketValue / 10 
  return company
}

const filterCompanies = (company) => company.foundedOn < 1990

const calculeteTotalMarketValue = (acc, company) => acc + company.marketValue


const marketValueOldCompanies = companies
  .map(add10Percent)
  .filter(filterCompanies) 
  .reduce(calculeteTotalMarketValue,0);

console.log(marketValueOldCompanies);


console.log("Missão numero 2 - menos 10%")

const remover10Percent = (companyqueta) => {
    companyqueta.marketValue = companyqueta.marketValue - companyqueta.marketValue / 10
    return companyqueta
}

const filterCompanies1980 = (companyqueta) => companyqueta.foundedOn < 1980

const calculeteTotalMarketValue1980 = (acc, companyqueta) => acc + companyqueta.marketValue

const marketValueOldCompanies1980 = companies
.map(remover10Percent)
.filter(filterCompanies1980)
.reduce(calculeteTotalMarketValue1980,0);
console.log(marketValueOldCompanies1980);