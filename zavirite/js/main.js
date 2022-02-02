(function($) {

	"use strict";

	var fullHeight = function() {

		$('.js-fullheight').css('height', $(window).height());
		$(window).resize(function(){
			$('.js-fullheight').css('height', $(window).height());
		});

	};
	fullHeight();

	$('#sidebarCollapse').on('click', function () {
      $('#sidebar').toggleClass('active');
  });

})(jQuery);


function openTab1() {
	document.getElementById("tab1").style.display = "block";
	document.getElementById("tab2").style.display = "none"; 
	document.getElementById("tab3").style.display = "none";
	document.getElementById("tab4").style.display = "none";     
}
function openTab2() {
	document.getElementById("tab1").style.display = "none";
	document.getElementById("tab2").style.display = "block";
	document.getElementById("tab3").style.display = "none"; 
	document.getElementById("tab4").style.display = "none";     
}
function openTab3() {
	document.getElementById("tab1").style.display = "none";
	document.getElementById("tab2").style.display = "none"; 
	document.getElementById("tab3").style.display = "block"; 
	document.getElementById("tab4").style.display = "none";    
}
function openTab4() {
	document.getElementById("tab1").style.display = "none";
	document.getElementById("tab2").style.display = "none"; 
	document.getElementById("tab3").style.display = "none"; 
	document.getElementById("tab4").style.display = "block";    
}