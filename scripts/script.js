var canvas = document.getElementById('boxcard'),
    canvasLeft = canvas.offsetLeft,
    canvasTop = canvas.offsetTop,
    ctx = canvas.getContext('2d');

var rows = 4;
var cols = 5;

var Tile = function (x, y, face) {
    this.x = x;
    this.y = y;
    this.face = face;
    this.width = 100;
};

var images = [
    document.getElementById('img1'),
    document.getElementById('img2'),
    document.getElementById('img3'),
    document.getElementById('img4'),
    document.getElementById('img5'),
    document.getElementById('img6'),
    document.getElementById('img7'),
    document.getElementById('img8'),
    document.getElementById('img9'),
    document.getElementById('img10')
];

var backImage = document.getElementById('pokemon-logo');

Tile.prototype.drawFaceDown = function () {
    ctx.fillStyle = '#6991AC';
    ctx.strokeStyle = "#999";
    ctx.fillRect(this.x, this.y, this.width, this.width);
    ctx.stroke();
    ctx.drawImage(backImage, 0, 0, this.width, this.width, this.x, this.y, this.width, this.width);
    this.isFaceUp = false;
};

Tile.prototype.drawFaceUp = function () {
    tx.fillStyle = '#6991AC';
    ctx.strokeStyle = "#999";
    ctx.fillRect(this.x, this.y, this.width, this.width);
    ctx.stroke();
    ctx.drawImage(backImage, 0, 0, this.width, this.width, this.x, this.y, this.width, this.width);
    this.isFaceUp = true;
};

Tile.prototype.isUnderMouse = function (x, y) {
    return x >= this.x && x <= this.x + this.width &&
        y >= this.y && y <= this.y + this.width;
};

var possibleFaces = images.slice(0);
var selected = [];
for (var i = 0; i < (cols * rows) / 2; i++) {
    var randomInd = Math.floor(Math.random(possibleFaces.length));
    var face = possibleFaces[randomInd];
    selected.push(face);
    selected.push(face);
    possibleFaces.splice(randomInd, 1);
}

selected.sort(function () {
    return 0.5 - Math.random();
});


var tiles = [];
for (var col = 0; col < cols; col++) {
    for (var row = 0; row < rows; row++) {
        tiles.push(new Tile(col * 110 + 40 , row * 110, selected.pop()))
    }
}

// Now draw them face up
for (var i = 0; i < tiles.length; i++) {
    tiles[i].drawFaceDown();
}

var flippedTiles = [];
var delayStartFC = null;
var numTries = 0;

canvas.addEventListener('click', function (event) {
    var x = event.pageX - canvasLeft,
        y = event.pageY - canvasTop;
    console.log(x, y);
    tiles.forEach(function (element) {
        if (y > element.y && y < element.y + element.width && x > element.x && x < element.x + element.width) {
            console.log('clicked an element '+ x + ' ' + y);
        }
    });

}, false)

console.log(tiles);
    




