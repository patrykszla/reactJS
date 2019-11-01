function Coin () {
    this.x = Math.floor(Math.random() * 10);  //zaokraglenie losowej liczby
    this.y = Math.floor(Math.random() * 10);
}

module.exports = Coin;