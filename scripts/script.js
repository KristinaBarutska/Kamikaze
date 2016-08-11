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
    this.isFaceUp = false;
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
};

Tile.prototype.drawFaceUp = function () {
    ctx.fillStyle = '#6991AC';
    ctx.strokeStyle = "#999";
    ctx.fillRect(this.x, this.y, this.width, this.width);
    ctx.stroke();
    ctx.drawImage(this.face, 0, 0, this.width, this.width, this.x, this.y, this.width, this.width);
};

Tile.prototype.isUnderMouse = function (x, y) {
    return x >= this.x && x <= this.x + this.width &&
        y >= this.y && y <= this.y + this.width;
};

var possibleFaces = images.slice(0);
var selected = [];
for (var i = 0; i < (cols * rows) / 2; i++) {
    var randomInd = Math.floor(Math.random() * possibleFaces.length);
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
        tiles.push(new Tile(col * 110 + 40 , row * 110, undefined));
        console.log(tiles.face);
    }
}

var flippedTiles = [];
var delayStartFC = null;
var numTries = 0;
var randomImageIndex = 0;
var clickedCount = 0;
var firstPreviousClickedTile = 0;
var secondPreviousClickedTile = 0;
canvas.addEventListener('click', function (event) {
    var x = event.pageX - canvasLeft,
        y = event.pageY - canvasTop;
    console.log(x, y);

    for (var i = 0; i < tiles.length; i++) {
        var tile = tiles[i];
        if (tile.isUnderMouse(x, y)) {
            tile.isFaceUp = true;
            
            if(tile.face === undefined){
                var hasToBreak = false;
                while(!hasToBreak){
                    randomImageIndex = Math.floor(Math.random() * tiles.length / 2);
                    var current = numberStates[randomImageIndex];
                    hasToBreak = false;
                    if (!current.state) {
                        current.count += 1;
                        document.getElementById('counter').textContent = clickedCount;
                        if(current.count == 3){
                            current.state = true;
                            continue;
                        }
                        hasToBreak = true;
                    }
                }
                tile.face = images[randomImageIndex];
            }
            	
            console.log('clicked an element '+ x + ' ' + y);
            clickedCount += 1;
            if(clickedCount % 2 == 1){
                if(clickedCount !== 1 && (firstPreviousClickedTile.face !== secondPreviousClickedTile.face)){
                    firstPreviousClickedTile.isFaceUp = false;
                    secondPreviousClickedTile.isFaceUp = false;
                }       
                firstPreviousClickedTile = tile;            
            }
            else{
                secondPreviousClickedTile = tile;
            }
            Draw();
        }
        
    }

}, false);


var numberStates = [];
for (var i = 0; i < tiles.length / 2; i++) {
    numberStates.push({
        state: false,
        count: 0
    });
}

// Draw
function Draw(){

    for (var i = 0; i < tiles.length; i++) {
        if (!tiles[i].isFaceUp) {
            tiles[i].drawFaceDown();
            continue;
        }

        tiles[i].drawFaceUp();
    }
}

Draw();



    




