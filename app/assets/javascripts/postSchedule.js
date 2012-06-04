function postSchedule(){
      if ($('#userid').html()!=null){
      	$("body").append("<div class='bg'></div>");
		$("body").append("<div class='postForm'><h2 class = 'header'>為行程增加註解</h2><textarea class='description, postblock' row='2' cols ='45'></textarea><h2 class = 'header'>想要tag什麼人</h2><input class='fbfriend. postblock' type ='text' value='輸入facebook好友'><div class='fbfriend2, postblock'></div><input class ='postfb' type='button' value='Post the schedule to facebook' onclick=''/></div>");
		//<% @friends.each do |friend|%> //friends 會有問題要不要再建一個friend的attrs
		//var friendname = <%= friend.name%>;
		//alert(friendname);
		//<% end %>

		$('.fbfriend2').append('<p>'+friendname+'</p>');
		$(".postfb").click(function() {
		var description = $('.description').val();
		var tags = $('.fbfriend').val();
		$(".postForm").remove();//處裡消掉的東西
		$(".bg").remove();//嵌入body裡面會不會比較好
		post(description, tags);
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
function post(description, tags){
	alert(description);
	alert(tags);
      var content = "test";//content要加入行程資訊嘛!?
      $.ajax({
        type: 'GET',
        data: { user: $('p#userid').html(),
        		tags: tags,
        		description: description,
         		schedule_name: $('h2#schedule_name').html(),
         		content: "hello"
        },
        url: "http://localhost:3000/post",
        datatype: 'json',
        success: function(data, textSatus){
          alert("Post successfully!");
        }
      });	

    }


