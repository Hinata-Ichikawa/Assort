$(function() {
 
  $('.Works_item').hover(
	function() {
		$('.shadow').fadeIn(300);
		$(this).find('.Works_link').addClass("hover");
		$(this).css('z-index','250');
	},

	function() {
		$('.shadow').fadeOut(300);
		$(this).find('.Works_link').removeClass("hover");
		$(this).css('z-index','0');
  	}
  );
});