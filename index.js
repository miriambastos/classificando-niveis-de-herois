//Realizado em 13/04/2024
//Miriam Bastos

let nomeHeroi = "Ruby"
let xpHeroi = 7.800
let nivelHeroi; //vazia

switch (true) {
    case xpHeroi < 1.000:
        nivelHeroi = "Ferro";
        break;

    case xpHeroi >= 1.001 && xpHeroi <= 2.000:
        nivelHeroi = "Bronze";
        break;

    case xpHeroi >= 2.001 && xpHeroi <= 5.000:
        nivelHeroi = "Prata";
        break;
    
    case xpHeroi >= 5.001 && xpHeroi <= 7.000:
        nivelHeroi = "Ouro";
        break;

    case xpHeroi >= 7.001 && xpHeroi <= 8.000:
        nivelHeroi = "Platina";
        break;

    case xpHeroi >= 8.001 && xpHeroi <= 9.000:
        nivelHeroi = "Ascendente";
        break;

    case xpHeroi >= 9.001 && xpHeroi <= 10.000:
        nivelHeroi = "Imortal";
        break;

    case xpHeroi >= 10.001:
        nivelHeroi = "Radiante";
        break;
}
console.log("O heroi " + nomeHeroi + " esta no nível " + nivelHeroi);

