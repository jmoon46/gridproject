$(document).ready(function () {
	var b=16;
	var c=b*b;
	for (var a=0; a<c; a++) {
		$('#container').append("<div class='box'></div>")
	}
	$('.box').on('mouseenter', function() {
			$(this).addClass('hover');
	});
});

$('#clearall').on('click', function () {

});