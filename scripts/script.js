var Source = "#boxcard";

var ImgSource = [
  "../img/1.jpg",
  "../img/2.jpg",
  "../img/3.jpg",
  "../img/4.jpg",
  "../img/5.jpg",
  "../img/6.jpg",
  "../img/7.jpg",
  "../img/8.jpg",
  "../img/9.jpg",
  "../img/10.jpg"
];

$(function() {

for (var y = 1; y < 3 ; y++) {
	$.each(ImgSource, function(i, val) {
		$(Source).append("<div " + y + 1 + "/> ");
	});
}
}); 
