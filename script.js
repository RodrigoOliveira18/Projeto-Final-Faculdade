const FRENTE = "carta_frente";
const VERSO = "carta_verso";
const CARTA = "carta";
const ICON = "icon";


    InicioJogo();

    function InicioJogo(){

        
      
        inciarCartas(jogo.criarCartasImgss());
    }


    function inciarCartas(cartas){
        let tabuleiro = document.getElementById("tabuleiro");

       jogo.cartas.forEach(carta => {
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









function ViraCarta(){

    this.classList.add("flip");

}