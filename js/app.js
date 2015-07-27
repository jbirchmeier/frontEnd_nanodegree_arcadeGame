var Player = function(x,y) {
    this.sprite = 'images/char-horn-girl.png';
    
    this.x = 505/50 - 10;
    this.y = 380;
    
};


Player.prototype.update = function(dt) {
    this.x = this.x;
    this.y = this.y;
    this.collisionCheck();

    if(this.y < 0 ) {
        this.resetGame();
        alert("You win!");
    }

};

Player.prototype.collisionCheck = function() {
    for (var i = 0; i < enemyLength; i++) {
        if(Math.abs(this.x - allEnemies[i].x) < 30 && Math.abs(this.y - allEnemies[i].y) < 30) {
            this.resetGame();
            alert("Those bugs will get you every time. Try again!");
        }
    }
};

Player.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
    console.log(this.sprite);
};

Player.prototype.resetGame = function() {
    this.x = 505/50 - 10;
    this.y = 380;
};

// Now instantiate your objects.
// Place all enemy objects in an array called allEnemies
// Place the player object in a variable called player

var enemy1 = new Enemy(-30, 63);
var enemy2 = new Enemy(-350, 145);
var enemy3 = new Enemy(-96, 228);
var enemy4 = new Enemy(-596, 63);
var enemy5 = new Enemy(-550, 150);
var enemy6 = new Enemy(-750, 220);

var allEnemies = [enemy1, enemy2, enemy3, enemy4, enemy5, enemy6];
var enemyLength = allEnemies.length;

var player = new Player();



Player.prototype.handleInput = function(keyInput) {
    if(keyInput === 'up') {
        if(this.y < 10) {
            // this.positionReset();
            // this.scoreCalulator(50);
        }
        else {
           this.y -= 83; 
        }
    }
    else if(keyInput === 'down') {
        if(this.y > 400) {
            return null;        }
        else {
           this.y += 83; 
        }
    }
    else if(keyInput === 'left') {
        if(this.x < 100) {
            return null;
        }
        else {
           this.x -= 101; 
        }
    }
    else if(keyInput === 'right') {
        if(this.x > 400) {
            return null;
        }
        else {
           this.x += 101;
        }
    }
};

// This listens for key presses and sends the keys to your
// Player.handleInput() method. You don't need to modify this.
document.addEventListener('keyup', function(e) {
    var allowedKeys = {
        37: 'left',
        38: 'up',
        39: 'right',
        40: 'down'
    };

    player.handleInput(allowedKeys[e.keyCode]);
});
