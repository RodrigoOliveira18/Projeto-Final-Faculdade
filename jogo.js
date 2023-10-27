let jogo = {

    imgss: [
        'patrulha02','patrulha03','pj_azul','pj_verde','pj_vilao','pj_vermelho'],

        cartas: null,

         criarCartasImgss: function(){

            this.cartas = [];
        
            this.imgss.forEach((img) => {
                this.cartas.push(this.criarParImgss(img));
            })
            this.cartas = this.cartas.flatMap (par => par);
            this.Embaralhar();
            
            return jogo.cartas
        },
        
        
        
         criarParImgss: function(img){
            return [{
                id: this.criarIdcomImg(img),
                icon: img,
                flipped: false,
        
            },
            
            {
                id: this.criarIdcomImg(img),
                icon: img,
                flipped: false,
            }]
        
        },
        
         criarIdcomImg: function(img){
            return img + parseInt(Math.random() *1000);
        },   
        
           Embaralhar:function(cartas){

            let currentIndex = this.cartas.length;
            let randomIndex = 0;
    
            while (currentIndex !== 0){
                randomIndex = Math.floor(Math.random() * currentIndex);
                currentIndex--;
                
                [this.cartas[randomIndex], this.cartas[currentIndex]] = [this.cartas[currentIndex], this.cartas[randomIndex]];
            }
    
    
        }
    }