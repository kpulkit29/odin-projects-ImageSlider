
	$(document).ready(function(){
		//alert("jai shree ram");
	//declaring variables
	var change_time=4000;
	var img_list=$("#img_change").children("li");
	var dot_list=$("#dots").children("li");
	var listlen=img_list.length;
	var curr=0,trans_speed=400,timeOut;
	var changetime_out;
	//function to display images
	function showit(index){
		var i=index;
      if(index=="prev"){
      	if(curr>0){i=curr-1;}
      	else{i=img_list[listlen-1];}
      }
      if(index=="next"){
      	if(curr<(listlen-1)){i=curr+1;}
      	else{i=0;}
      }
      curr=i;
      dot_list.removeClass('active').eq(i).addClass('active');
      img_list.fadeOut(trans_speed)
             .eq(i).fadeIn(trans_speed);
             clearTimeout(changetime_out);
    changetime_out = setTimeout(function() { showit('next'); }, change_time);
	}
  $("#dots li").click(function(){
     var i=$("#dots li").index(this);
     showit(i);
  });
  $(".prev").click(function () {
    showit('prev');
  });

  $(".next").click(function () {
    showit('next');
  });
	showit("next");	
});
