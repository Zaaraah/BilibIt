$(document).ready(function(){
	var scroll_start = 0;
   	var startchange = $('.startchange');
   	var offset = startchange.offset();
    if (startchange.length){
     $(document).scroll(function() { 
        scroll_start = $(this).scrollTop();
        if(scroll_start > offset.top) {
            $('nav').css({'background-color': '#30C4C9'});
         } else {
            $('nav').css({'background-color': 'transparent', 'box-shadow': 'none'});
         }
     });
    }

	$('.scrollspy').scrollSpy();
	$('.slider').slider({full_width: true, height: 600, interval: 4000, indicators: false, transition: 200});
	// var options = [
	//     {selector: '#page-3', offset: -10, callback: function() {
	//       $('nav').css("background-color", " #30C4C9");
	//     } }
	//   ];
	//   Materialize.scrollFire(options);

});