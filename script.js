let heroi = "Goku";
let xp = 10000;
let nivel = "";


if (xp < 1000) {
    nivel = "Ferro"
    console.log("Seu nível é " +nivel);
}else if(xp > 1000 && xp < 2001){
    nivel = "Bronze"
    console.log("Seu nível é " +nivel);
}else if(xp > 2000 && xp < 5001){
    nivel = "Prata"
    console.log("Seu nível é " +nivel);
}else if(xp > 5000 && xp < 7001){
    nivel = "Ouro"
    console.log("Seu nível é " +nivel);
}else if(xp > 7000 && xp < 8001){
    nivel = "Platina"
    console.log("Seu nível é " +nivel);
}else if(xp > 8000 && xp < 9001){
    nivel = "Ascendente"
    console.log("Seu nível é " +nivel);
}else if(xp > 9000 && xp < 10001){
    nivel = "Imortal"
    console.log("Seu nível é " +nivel);
}else if(xp >= 10001){
    nivel = "Radiante"
    console.log("Seu nível é " +nivel);
}

console.log(`O Herói de nome ${heroi}, está no nível de ${nivel}`);


