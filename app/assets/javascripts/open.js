function openschedule(){

	alert("open!!");
    $.ajax({
    type: 'GET',
    data: { user: $('p#userid').html()//,
     // schedule_name: $('h2#schedule_name').html(),//,
     // content: JSON.stringify(content)
     //attr4: $( "#amount4" ).val(),
     //attr5: $( "#amount5" ).val()
    },
    //$( "#amount" ).html(),
    url: "http://localhost:3000/open",
    //url: "http://lightrip-cytms.herokuapp.com/step3",
    datatype: 'json',
    success: function(data, textSatus){
      alert("open successfully!");

      //$(".firstpage").hide();//處裡消掉的東西
      //$(".menu").hide();//嵌入body裡面會不會比較好
      //$("#scheduleFrame").show();
      //$("#buttonFrame").show();
      //$("li.block:even").append()
      //$('li.block:odd').append("<a href=javascript:lightbox('hahaha')>"+data['test']+"</a>");
      console.log("open data",data);

      $(data).each(function(){
      	console.log("YA");
      });
      lightbox("<h1>YA!!!!</h1>");	

    }
  });

	
}