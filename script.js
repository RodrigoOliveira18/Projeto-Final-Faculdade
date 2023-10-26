const FRENTE = "carta_frente";
const VERSO = "carta_verso";
const CARTA = "carta";
const ICON = "icon";

let imgss =[
    'patrula01', 'patrulha02','patrulha03','pj_azul','pj_verde','pj_vermelho','pj_vilao','pj_vilao02x'];


    let cartas = null;
    InicioJogo();

    function InicioJogo(){

        cartas = criarCartasImgss(imgss)
        Embaralhar(cartas);

        inciarCartas(cartas);
    }


    function inciarCartas(cartas){
        let tabuleiro = document.getElementById("tabuleiro");

        cartas.forEach(carta => {
            let cartaElement = document.createElement('div')
            cartaElement.id = carta.id;
            cartaElement.classList.add(CARTA);
            cartaElement.dataset.icon = carta.icon;

            criarCartaContent(carta, cartaElement);



            cartaElement.addEventListener('click', ViraCarta);
            tabuleiro.appendChild(cartaElement);
        })
        
    }


        function criarCartaContent(carta, cartaElement){

            criarCartaFase(FRENTE, carta, cartaElement);

            criarCartaFase(VERSO, carta, cartaElement);



        }

        function criarCartaFase(fase, carta, element){

            let cartaElementfase = document.createElement('div');
            cartaElementfase.classList.add(fase);

            if(fase === FRENTE){
                let iconElemtent = document.createElement('img');
                iconElemtent.classList.add(ICON);
                iconElemtent.src = "./img/" + carta.icon + ".png";
                cartaElementfase.appendChild(iconElemtent);

            }else{
                cartaElementfase.innerHTML = "./img/verso.png"
            }
            element.appendChild(cartaElementfase);
            

        }


    function Embaralhar(cartas){

        let currentIndex = cartas.length;
        let randomIndex = 0;

        while (currentIndex !== 0){
            randomIndex = Math.floor(Math.random() * currentIndex);
            currentIndex--;
            
            [cartas[randomIndex], cartas[currentIndex]] = [cartas[currentIndex], cartas[randomIndex]];
        }


    }




criarCartasImgss(imgss)

function criarCartasImgss(imgss){

    let cartas = [];

    imgss.forEach((img) => {
        cartas.push(criarParImgss(img));
    })
    return cartas.flatMap (par => par);

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



function ViraCarta(){

    this.classList.add("flip");

}