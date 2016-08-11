var canvas = document.getElementById('boxcard'),
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
    ctx.rect(this.x, this.y, this.width, this.width);
    ctx.fillStyle = '#6991AC';
    ctx.strokeStyle = "#999";
    ctx.fill();
    ctx.stroke();
    ctx.drawImage(backImage, this.x, this.y, this.width, this.width);
    this.isFaceUp = false;
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
        tiles.push(new Tile(col * 100 + 20, row * 100 + 50, selected.pop()))
    }

}

// Now draw them face up
for (var i = 0; i < tiles.length; i++) {
    tiles[i].drawFaceDown();
}


console.log(tiles);
    




