$("#picture li").hover(function(){
	$(this).find(".filter").stop(true).animate({top:10},300)
	
},function(){
	$(this).find(".filter").stop(true).animate({top:-200},300)
})