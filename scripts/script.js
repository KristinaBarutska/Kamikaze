var canvas = document.getElementById('boxcard'),
    ctx = canvas.getContext('2d');

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
    document.getElementById('img10'),
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

var Tile = function (x, y, face) {
    this.x = x;
    this.y = y;
    this.face = face;
    this.width = 70;
};

for (var i = 0; i < 20; i++) {
    ctx.drawImage(
        images[i],
        (i * images[i].width),
        0,
        images[i].width,
        images[i].height);
}

    




