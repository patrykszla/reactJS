console.log('Hello world');

document.addEventListener('DOMContentLoaded', function () {
    const Game = require('./game');
    const newGame = new Game();
    
    newGame.showFurry();
    newGame.showCoin();
    newGame.startGame();

    document.addEventListener('keydown', function(event) { //addeventlistener na keydown czyli wcisniecie klawisza
        newGame.turnFurry(event);       //uruchom metode turnfurry i przekarz event z klawisza
    })
    
})