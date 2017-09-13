$(function(){
	  $("#common-footer").load("footer.html");
	  $(".listone").css({"display":"block"});
	  $(".listtwo").css({"display":"none"});
	  $(".cat").addClass("active3");
	  $(".dog").removeClass("active3");
      $(".sanjiaox .sanjiaox_span").eq(0).find(".sjx").css({"display":"block"});
      $(".sanjiaox .sanjiaox_span").eq(1).find(".sjx").css({"display":"none"});
      $(".adoptdogcat span").on("click",function(){
      	   var index=$(this).index();
      	   $(".adoptdogcatul ul").eq(index).css({"display":"block"});
      	   $(".adoptdogcatul ul").eq(index).siblings("ul").css({"display":"none"});
	  	     $(this).addClass("active3");
	  	     $(this).siblings("span").removeClass("active3");  
	  	     $(".sanjiaox .sanjiaox_span").eq(index).find(".sjx").css({"display":"block"});
	  	     $(".sanjiaox .sanjiaox_span").eq(index).siblings(".sanjiaox_span").find(".sjx").css({"display":"none"});
      })
	  
	  $(".heart").html("0");
	  var i=0;
	  $(".fa-heart").on("click",function(){
	  	   $(".heart").html(i++);
	  })
	  $(".start").html("0");
	  var j=0;
	  $(".fa-star").on("click",function(){
	  	   $(".start").html(j++);
	  })
})