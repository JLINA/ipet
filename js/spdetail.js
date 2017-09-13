$(function(){
	    $("header .fa-angle-left").on("click",function(){
	    	  window.location.href="tehui.html"
	    })
      //判断
      var index=location.search.replace("?","");
      if(index==""){
		 index=0
	  }
	  $.ajax({
	  	type:"get",
	  	url:"../js/spdetail.json",
	  	success:function(res){
            spdetail(res);
	  	}
	  });
	  function spdetail(data){
	  	    var $swiperdiv1=$('<div class="swiper-slide oneswipers"></div>').appendTo($(".swiper-wrapper"));
	  	    var $swiperdiv2=$('<div class="swiper-slide oneswipers"></div>').appendTo($(".swiper-wrapper"));  
	  	    var $swiperdiv3=$('<div class="swiper-slide oneswipers"></div>').appendTo($(".swiper-wrapper"));  
	  	    var $swiperdiv4=$('<div class="swiper-slide oneswipers"></div>').appendTo($(".swiper-wrapper"));
	  	    var $swiperdiv5=$('<div class="swiper-slide oneswipers"></div>').appendTo($(".swiper-wrapper"));
	  	    $('<img src="'+data[index].img1+'" />').appendTo($swiperdiv1);
	  	    $('<img src="'+data[index].img2+'" />').appendTo($swiperdiv2);
	  	    $('<img src="'+data[index].img3+'" />').appendTo($swiperdiv3);
	  	    $('<img src="'+data[index].img4+'" />').appendTo($swiperdiv4);
	  	    $('<img src="'+data[index].img5+'" />').appendTo($swiperdiv5);
	  	    //swiper
	  	    var swiper = new Swiper('.oneswiper', {
				pagination: '.swiper-pagination',
				paginationClickable: true,
				spaceBetween: 30,
				centeredSlides: true,
				autoplay: 2500,
				autoplayDisableOnInteraction: false
			});
			$('<h4>'+data[index].title+'</h4>').appendTo("section");
			var $sectiondiv1=$('<div></div>').appendTo("section");
			$('<span>'+data[index].newprice+'</span>').appendTo($sectiondiv1);
			$('<span>'+data[index].ylprice+'</span>').appendTo($sectiondiv1);
			$('<span>'+data[index].zhekou+'</span>').appendTo($sectiondiv1);
			var $sectionul=$('<ul></ul>').appendTo("section");
			var $sectionli1=$('<li></li>').appendTo($sectionul);
			$('<span>'+data[index].place1+'</span>').appendTo($sectionli1);
			$('<span>'+data[index].place2+'</span>').appendTo($sectionli1);
			var $sectionli2=$('<li></li>').appendTo($sectionul);
			$('<span>'+data[index].pinpai1+'</span>').appendTo($sectionli2);
			$('<span>'+data[index].pinpai2+'</span>').appendTo($sectionli2);
			var $sectionli3=$('<li></li>').appendTo($sectionul);
			$('<span>'+data[index].tedian1+'</span>').appendTo($sectionli3);
			$('<span>'+data[index].tedian2+'</span>').appendTo($sectionli3);
			var $sectionli4=$('<li></li>').appendTo($sectionul);
			$('<span>'+data[index].pinpai1+'</span>').appendTo($sectionli4);
			$('<span>'+data[index].pinpai2+'</span>').appendTo($sectionli4);
	  }
})