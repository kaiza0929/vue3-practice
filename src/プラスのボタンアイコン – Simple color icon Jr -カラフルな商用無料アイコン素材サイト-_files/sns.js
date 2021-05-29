/*
$(function(){	
	setTimeout(function(){
    	$('#sns #in').load("http://icon-rainbow.com/sns.txt");
  	}, 3000);


});
*/
$(function(){	
	$("#panel-btn").click(function() {
	$("#panel").slideToggle(200);
	$("#panel-btn-icon").toggleClass("closeNav");
				
		if($("#globalNav").hasClass("closeNav")){
			$("#globalNav").removeClass("closeNav");
			}else{
			$("#globalNav").addClass("closeNav");		
		}
		return false;
	});
});