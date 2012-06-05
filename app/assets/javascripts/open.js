
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
    url: "/open",
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
     // $.cookie("open_schedule_data", data);
     // $.cookie("open_schedule_data","111");//bug

      $(data).each(function(index, element){

        one_schedule += "<div class='record'><ul>";
          one_schedule += element['schedule_name'];
          var schedule = JSON.parse(element['content']);
          
          $.each(schedule, function(index, element){
            //one_schedule += '<li>';
            // one_schedule += '<ul>';
            //one_schedule +=
            
            if(schedule[index]['method'] != null)
            {
                one_schedule += '<li class="spot_node">';  //顯示景點

                  one_schedule += '<div class="spot_name">';
                  one_schedule += schedule[index]['name'];
                  one_schedule += '</div>';

                one_schedule += '</li>';



                one_schedule += '<li class="spot_traffic">';  //顯示交通資訊

                  one_schedule += '<div class="traffic_info">';
                    one_schedule += '<div class="traffic_method">';
                    one_schedule += schedule[index]['method'];
                    one_schedule += '</div>';

                    one_schedule += '<div class="traffic_duration">';
                    one_schedule += schedule[index]['time_text'];
                    one_schedule += '</div>';
                  one_schedule += '</div>';


                one_schedule += '</li>';


            }
            else
            {
               one_schedule += '<li class="spot_node">';  //顯示景點

                  one_schedule += '<div class="spot_name">';
                  one_schedule += schedule[index]['name'];
                  one_schedule += '</div>';

                one_schedule += '</li>';
              //one_schedule += schedule[index]['name'];

            }
            
            //one_schedule += '<div class="name">' + schedule[index]['content'] + '</div>';
            //one_schedule += '<div class="name">' + schedule[index]['name'] + '</div>';


            // one_schedule += '</ul>';
            // one_schedule += '</li>';


          });


        one_schedule += "</ul>";

        //one_schedule +="<div onclick='schedule_append();'>open the schedule</div>"
        one_schedule += "<div id='open_schdule_" + index + "'>open the schedule</div>";

        one_schedule += "</div>";




      	content += one_schedule;
        one_schedule = ""; 
      });



      lightbox(content);	

      $(data).each(function(index,element){

      $("#open_schdule_" + index).click(function() {
          console.log(data[index]);
        })


      })


    }
  });

	

}



function schedule_append(){

  alert("schedule_append");
  /*詢問是否要儲存現在的schedule??*/
  /*消去lightbox*/
  clearschedule();
  $(".lightbox").remove();//處裡消掉的東西
  $(".bg").remove();//嵌入body裡面會不會比較好

  var data = $.cookie("open_schedule_data");
  console.log("data", data);


  $.cookie("open_schedule_data", null);  //清空上次用來占存server回傳data的cookie



} 