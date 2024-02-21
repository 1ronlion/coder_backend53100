let arrayDeFrutas = ["mango", "frutilla", "mango", "banana", "melon"]


arrayDeFrutas.forEach((fruta, index) => console.log(index + fruta));

arrayDeFrutas.map((fruta, index) => (index + fruta));

arrayDeFrutas.filter((fruta) => fruta.length >= 6);

arrayDeFrutas.find((fruta) => fruta == "mango");

arrayDeFrutas.slice(2,5)

arrayDeFrutas.includes("kiwi") // = false

arrayDeFrutas.indexOf("melon") // = 5