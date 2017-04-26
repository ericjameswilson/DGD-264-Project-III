$(document).ready(function () {
	for (i = 0; i < 6; i++) { 
		$("#container").append('<div style="margin:'+i*8+'%;left:'+i*1+'%;top:'+i*10+'%;" class="circle-xlarge gradient-two"></div');
	}
	
	for (i = 0; i < 5; i++) { 
		$("#container").append('<div style="left:'+i*25+'%;top:'+i*15+'%;" class="circle-large gradient-one"></div');
	}
	
	for (i = 0; i < 6; i++) { 
		$("#container").append('<div style="left:'+i*20+'%;top:'+i*25+'%;margin:'+i*10+'%" class="circle-small gradient-two"></div');
	}
	
	for (i = 0; i < 5; i++) { 
		$("#container").append('<div style="left:'+i*10+'%;top:'+i*8+'%;margin:'+i*10+'%;" class="circle-large gradient-three"></div');
	}
	
	for (i = 0; i < 5; i++) { 
		$("#container").append('<div style="margin:'+i*13+'%;left:'+i*5+'%;top:'+i*50+'%;" class="circle-medium gradient-four"></div');
	}
	
	for (i = 0; i < 7; i++) { 
		$("#container").append('<div style="right:'+i*10+'%;top:'+i*20+'%;" class="circle-medium gradient-two"></div');
	}
	
	for (i = 0; i < 10; i++) { 
		$("#container").append('<div style="right:'+i*5+'%;margin:'+i*10+'%" class="circle-small gradient-four"></div');
	}
	
	$(".button").click(function(){
		$("div").each(function(i) {
		$(this).delay(i*150).fadeIn(500);
		})
	});
	
	$(".circle-small, .circle-medium, .circle-large, .circle-xlarge").draggable();

});