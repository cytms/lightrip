
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

      var content = "";
      var one_schedule = "";

      //$(".firstpage").hide();//處裡消掉的東西
      //$(".menu").hide();//嵌入body裡面會不會比較好
      //$("#scheduleFrame").show();
      //$("#buttonFrame").show();
      //$("li.block:even").append()
      //$('li.block:odd').append("<a href=javascript:lightbox('hahaha')>"+data['test']+"</a>");
      console.log("open data",data);

      $(data).each(function(index, element){

        one_schedule += "<div class='record'><ul>";
          one_schedule += element['schedule_name'];
          var schedule = JSON.parse(element['content']);
          
          $.each(schedule, function(index, element){
            one_schedule += '<li>';
            //one_schedule +=
            one_schedule += '<div class="spot">' + schedule[index]['name'] + '</div>';
            //undone!!

            //one_schedule += '<div class="name">' + schedule[index]['content'] + '</div>';
            //one_schedule += '<div class="name">' + schedule[index]['name'] + '</div>';



            one_schedule += '</li>';


          });
         





        one_schedule += "</ul></div>";
        







      	content += one_schedule;
        one_schedule = ""; 
      });



      lightbox(content);	

    }
  });

	

}