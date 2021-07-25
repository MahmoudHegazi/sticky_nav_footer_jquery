	jQuery(document).ready(function(){
		jQuery(window).load(function(){
			jQuery(window).scroll(function(){
				/* Title Code */
				jQuery("#sticky").css("z-index", "111");
				jQuery("#sticky").css("position", "sticky");
				jQuery("#sticky").css("display", "block");
				jQuery("#sticky").css("top", `${jQuery("#navmenu_id")[0].getBoundingClientRect().bottom}px`);
				
				/* footer code  */
				jQuery("#sticky_footer").css("z-index", "111");
				jQuery("#sticky_footer").css("position", "sticky");
				jQuery("#sticky_footer").css("bottom", "0px");
				jQuery("#sticky_footer").css("right", "0px");
			
			if (jQuery(window).scrollTop() === 0){
				/* footer When  screen at the top scroll position == 0*/
				jQuery("#sticky_footer").css("position", "");
			}
				
			});
		});
	});
