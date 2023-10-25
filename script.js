const FRENTE = "carta_frente";
const VERSO = "carta_verso";



let imgss =[
    'patrula01', 'patrulha02','patrulha03','pj_azul','pj_verde','pj_vermelho','pj_vilao','pj_vilao02x'];




criarCartasImgss(imgss)

function criarCartasImgss(imgss){

    let cartas = [];

    for (let img of imgss){
        cartas.push(criarParImgss(img));
    }
    return cartas.flatMap (par => par)

}



function criarParImgss(img){
    return [{
        id: criarIdcomImg(img),
        icon: img,
        flipped: false,

    },
    
    {
        id: criarIdcomImg(img),
        icon: img,
        flipped: false,
    }]

}

function criarIdcomImg(img){
    return img + parseInt(Math.random() *1000);
}

