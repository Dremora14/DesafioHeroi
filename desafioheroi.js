// Cria uma variável para armazenar o nome e a quantidade de experiência (XP) de um herói
var nome = "Dremora";
var xp = 9853;

// Utiliza uma estrutura de decisão para apresentar uma mensagem de acordo com o nível do herói
if (xp < 1000) {
  var nivel = "Ferro";
} else if (xp >= 1000 && xp <= 2000) {
  var nivel = "Bronze";
} else if (xp >= 2001 && xp <= 5000) {
  var nivel = "Prata";
} else if (xp >= 6001 && xp <= 7000) {
  var nivel = "Ouro";
} else if (xp >= 7001 && xp <= 8000) {
  var nivel = "Platina";
} else if (xp >= 8001 && xp <= 9000) {
  var nivel = "Ascendente";
} else if (xp >= 9001 && xp <= 10000) {
  var nivel = "Imortal";
} else if (xp >= 10001) {
  var nivel = "Radiante";
}

// Exibe uma mensagem com o nome e o nível do herói
console.log("O Herói de nome " + nome + " está no nível de " + nivel);
