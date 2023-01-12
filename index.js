const prompt = require("prompt-sync") ();

modelo = prompt("Digite o modelo do carro: ");
km =  parseFloat(prompt("Digite o numero de Km percorridos: "));
litros = parseFloat(prompt("Digite o numero de litros gastos "));

consumo = km / litros;

console.log("O consumo do carro ", modelo, "é de " , consumo, "km/litro");
