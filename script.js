// Crie um array que receba 5 itens e exiba no console.
let compBR =["Luedji Luna", "Pixinguinha", "Elza Soares", "Bia Ferreira", "Pabllo Vittar"];

console.log(compBR);

// Utilize um método para adicionar um nome ao inicio do array.
compBR.splice(0,0,"Francisco Braga");


// Utilize um método para remover o último nome do array.
compBR.splice(5,5);


// Utilize um método para adicionar dois nomes ao fim do array.
compBR.splice(6,7, "Caio Prado", "Rico Dalasan");


// Utilize um método para remover o primeiro nome do array.
compBR.splice(0,1);

console.log(compBR);


// Utilize um método para organizar em ordem crescente o seguinte array:

const numbers = [7,5,6,3,8,9,2,1,4];
numbers.sort();

console.log(numbers);