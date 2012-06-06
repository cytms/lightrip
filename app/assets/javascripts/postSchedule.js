function postSchedule(){
      if ($('#userid').html()!=null){
        save();
      	$("body").append("<div class='bg'></div>");
        alert($('#mySchedule img').first().attr('src'));
		$("body").append("<div class='postForm'><h2 class = 'header'>"+$('#schedule_name').html()+"</h2><img src='"+$('#mySchedule img').first().attr('src')+"'/><p>為您的行程加點註解</p><textarea class='description' row='2' cols ='25'></textarea><input class ='postfb' type='button' value='Post the schedule to facebook' onclick=''/></div>");
//如果沒有行程會出錯

		//$('.fbfriend2').append('<p>'+friendname+'</p>');
		$(".postfb").click(function() {
    var title = $('.header').html();
    var description = $('.description').val();
		var src = $('.postForm img').attr('src');
		$(".postForm").remove();//處裡消掉的東西
		$(".bg").remove();//嵌入body裡面會不會比較好
		post(title, description, src);
	});
}
	  else{
      console.log($('#userid').html());
      alert("please login first");
      $(".menu").hide();
      $(".firstpage").show();
      $("#menu").show();
    }
}
function post(title, description, src){
	//alert(title);
  //alert(description);
  //alert(src);
    var sid = $('#sid').html();
    alert(sid);
      $.ajax({
        type: 'GET',
        data: { user: $('p#userid').html(),
            title: title, 
        		description: description,
         		src: src,
            sid: sid
        },
        url: "/post",
        datatype: 'json',
        success: function(data, textSatus){
          alert("Post successfully!");
        }
      });	

    }


