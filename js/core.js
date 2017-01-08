//CORE JS FUNCTIONALITY
//Contains only the most essential functions for the theme. No jQuery.

//MOBILE MENU TOGGLE
document.addEventListener('DOMContentLoaded', function(){
    var menu_element = document.getElementById('menu-mobile-open');
	var menu_exists = !!menu_element;
	if(menu_exists){
		menu_element.addEventListener('click', function(){
			document.body.classList.add('menu-mobile-active');
		});
		menu_element.addEventListener('touchstart', function(){
			document.body.classList.add('menu-mobile-active');
		});

		var menu_close = document.getElementById('menu-mobile-close');
		menu_close.addEventListener('click', function(){
			document.body.classList.remove('menu-mobile-active');
		});		
		menu_close.addEventListener('touchstart', function(){
			document.body.classList.remove('menu-mobile-active');
		});
	}
});