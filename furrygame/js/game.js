const Furry = require('./furry'); // importuje (sciagam tutaj furry);
const Coin = require('./coin'); // importuje tutaj coina

function Game () {
    console.log('Hello world');
    this.board = document.querySelectorAll('#board div');
    this.furry = new Furry(0,0,'right');        // w kontekscie tego obiektu this.furry to nasz importowany Furry
    this.coin = new Coin();
    this.score = 0;
    this.index = function (x,y) {
        return x + (y * 10);

    }
    this.showFurry = function () {
        this.hideVisibleFurry(); //za kazdym razem sprawdzamy czy nie ma juz jakiegos furrego
        if (this.board[ this.index(this.furry.x, this.furry.y) ] != null) {    // jezeli ten element jest rozny od nulla(zawsze) to:
           this.board[this.index(this.furry.x, this.furry.y) ].classList.add('furry'); //this.index miejsce w ktorym ma sie pojawic furry po podaniu mu x i y 
        }  
    }
    this.showCoin = function () {
        this.board[ this.index(this.coin.x, this.coin.y) ].classList.add('coin'); // dodajemy divovi o wspolrzednych x i y klase coin i dlatego pojawia sie nam obraze
    }
    console.log(this.coin.x, this.coin.y);  //wyswietlam sobie wspolrzedne coina 
 
    
    this.startGame = function () {
        let self = this;    //po to zeby odwolac sie do tego obiektu
        this.idSetInterval = setInterval(function () { //robi interval czyli funkcje ktora cos robi i mowimy co jaki czas
            self.moveFurry();  //na tym uruchamiamy metode moveFurry co 250 ms
        }, 200);
    }

    this.moveFurry = function () {
        if (this.furry.direction === 'right') {
            this.furry.x = this.furry.x + 1;    //bedzie nam przesuwalo w prawo bo na Furry mamy ustawiony direction right :)
        } else if (this.furry.direction === 'left') {
            this.furry.x = this.furry.x - 1;
        } else if (this.furry.direction === 'up') {
            this.furry.y = this.furry.y + 1;
        } else if (this.furry.direction === 'down') {
            this.furry.y = this.furry.y - 1;
        }
        this.showFurry();
        this.checkCoinColision();
        this.gameOver();
    }

    this.hideVisibleFurry = function () {
        let visibleFurry = document.querySelector('.furry'); // sprawdzamy czy jest taki element na stronie
        if (visibleFurry != null) {         //sprawdzamy czy jest nullem (SPOSOB ZEBY ZAWSZE COS USUNAC BO TO NIGDY NIE BEDZIE NULLEM)
            visibleFurry.classList.remove('furry');    
        }
    }

     this.turnFurry = function (event) {
        switch (event.which) {
            case 37:
                this.furry.direction = 'left';          //jesli event z klawiatury ma numer 37 to furry direction left! 
                break;
            case 38:
                this.furry.direction = 'down';
                break;
            case 39:
                this.furry.direction = 'right';
                break;
            case 40:
                this.furry.direction = 'up';
                break;
            default:
                break;
            }
     }  

     this.checkCoinColision = function () {
         if ( this.index(this.furry.x, this.furry.y) === this.index(this.coin.x, this.coin.y)) {//jesli index furry rowna sie index coin to dostajemy punkt
             console.log('punkt');
             this.board[this.index(this.coin.x, this.coin.y)].classList.remove('coin');
             this.score +=1 
             document.querySelector('strong').innerText = this.score.toFixed(2); //tofixed zaokragla do dwoch po przecinku
             this.coin = new Coin(); // musimy stworzyc nowego coina
             this.showCoin(); //pokazujemy nowa monete 
         }
     }

     this.gameOver = function () {
         if (this.furry.x < 0 || this.furry.y < 0 || this.furry.x > 9|| this.furry.y > 9) {      //jesli przekroczy z ktorejs strony plansze to wywala
         clearInterval(this.idSetInterval);
         this.hideVisibleFurry();
         alert('Game over');
        }
     }





    
}

module.exports = Game;  //exportujemy cala game


