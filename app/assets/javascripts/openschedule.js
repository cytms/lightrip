function openschedule(){
  if ($('#userid').html()!=null){
	//alert("open!!");
    warning2("Save the schedule?"); 
  }
      else{
      console.log($('#userid').html());
      warning("Please login first");
      $(".menu").hide();
      $("#buttonFrame").hide();
      $(".firstpage").show();
      $("#menu").show();
    }

	

}

function opentrasmit(){
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
      //alert("open successfully!");

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
     content += '<div><ul id="open_schedule_frame">';

              $(data).each(function(index, element){

                  one_schedule += "<li class='record' id='record_"+index+"'><div class='content'><h3>";
                  one_schedule += element['schedule_name'];
                  one_schedule += "</h3>";
                  var schedule = JSON.parse(element['content']);
                  
                                          $.each(schedule, function(index, element){
                                            //one_schedule += '<li>';
                                            // one_schedule += '<ul>';
                                            //one_schedule +=
                                            
                                            if(schedule[index]['method'] != null)
                                            {
                                                //one_schedule += '<p class="spot_node">';  //顯示景點

                                                  one_schedule += '<div class="spot_name">';
                                                  one_schedule += schedule[index]['name'];
                                                  one_schedule += '</div>';

                                               // one_schedule += '</p>';



                                                /*one_schedule += '<p class="spot_traffic">';  //顯示交通資訊

                                                  one_schedule += '<div class="traffic_info">';
                                                    one_schedule += '<div class="traffic_method">';
                                                    one_schedule += schedule[index]['method'];
                                                    one_schedule += '</div>';

                                                    one_schedule += '<div class="traffic_duration">';
                                                    one_schedule += schedule[index]['time_text'];
                                                    one_schedule += '</div>';
                                                  one_schedule += '</div>';


                                                one_schedule += '</p>';*/


                                            }
                                            else
                                            {
                                               //one_schedule += '<p class="spot_node">';  //顯示景點

                                                  one_schedule += '<div class="spot_name">';
                                                  one_schedule += schedule[index]['name'];
                                                  one_schedule += '</div>';

                                                //one_schedule += '</p>';
                                              //one_schedule += schedule[index]['name'];

                                            }
                                            
                                            //one_schedule += '<div class="name">' + schedule[index]['content'] + '</div>';
                                            //one_schedule += '<div class="name">' + schedule[index]['name'] + '</div>';


                                            // one_schedule += '</ul>';
                                            // one_schedule += '</li>';


                                          });


                

                //one_schedule +="<div onclick='schedule_append();'>open the schedule</div>"
                one_schedule += "<ul class='icon-frame'><li class='ui-state-default ui-corner-all' id='open_schedule_" + index + "'><span class='ui-icon ui-icon-check'></span></li><li class='ui-state-default ui-corner-all' id='delete_schedule_" + index + "'><span class='ui-icon ui-icon-close'></span></li></ul>";

                one_schedule += "</div>";

                one_schedule += "</li>";




                content += one_schedule;
                one_schedule = ""; 
              });

      content += '</ul></div>';
      lightbox(content);

                              $(data).each(function(index,element){

                                                      $("#delete_schedule_" + index).click(function() {
                                                        
                                                        //add alert!
                                                        $("#record_" + index).remove();
                                                        $.ajax({
                                                                    type: 'POST',
                                                                    data: { 
                                                                  
                                                                     sid: element['id']
                                                                                    
                                                                    },
                                                                    
                                                                    url: "/remove",
                                                                   
                                                                    datatype: 'json',
                                                                    success: function(data, textSatus){

                                                                      alert("remove success");
                                                                      //console.log("data",data);
                                                                      
                                                                      //$('#sid').html(data['id']);
                                                                      //alert("Save successfully! sid: " + $("#sid").html() + "is saved");

                                                                     
                                                                    }
                                                        });
                                                     });



                                                    $("#open_schedule_" + index).click(function() {

                                                                   // $(#sid).html(data[index]['id']);
                                                                    
                                                                    console.log(data[index]);
                                                                    warning("Schedule load");
                                  
                                                                    //$(".warning").remove();

                                                                      /*詢問是否要儲存現在的schedule??*/
                                                                    
                                                                    clearschedule();
                                                                    $(".lightbox").remove();//處裡消掉的東西
                                                                    $(".bg").remove();//嵌入body裡面會不會比較好

                                                                    $('#sid').html(data[index]['id']); //data[index]['id']
                                                                    //console.log('sid',data[index]['id']);

                                                                    //console.log("sid(html):" + $('#sid').html());
                                                                    
                                                                    var opendata = JSON.parse(data[index]['content']);
                                                                    console.log("opendata",opendata);
                                                                    
                                                                                  $(opendata).each(function(i, onedata){

                                                                                                      if(onedata['method'] != null)
                                                                                                      {
                                                                                                        
                                                                                                        var temp_string = '<li class="block spotinfo" spotid="' + onedata['spotid'] + '" name="' + onedata['name'] + '" zoom="' + onedata['zoom'] + '" lat="' + onedata['lat'] + '" lon="' + onedata['lon'] + '" address="' + onedata['address'] + '" spotin="' + onedata['spotin'] + '" info="' + onedata['info']+ '" ><a href=javascript:lightbox("' + onedata['name'] + '")>' + onedata['name'] + '</a></li>'
                                                                                                        console.log("temp====" , temp_string);
                                                                                                        $('ul#mySchedule').append(temp_string);

                                                                                                        var origin1 = onedata['address'];
                                                                                                        var destinationA = opendata[i+1]['address'];
                                                                                                        var traffic_id = "";
                                                                                                        traffic_id = "traffic_" + origin1;
                                                                                                        traffic_id += "_";
                                                                                                        traffic_id += destinationA;
                                                                                                        return_value = 0;
                                                                                                          //$('ul#mySchedule').append('<li class="trans ui-state-disabled" id="trans_' + data[i]['id'] + '"><div id="outputDiv_'+origin1+'_'+destinationA+'">default</div></li>');
                                                                                                          $('ul#mySchedule').append('<li class="trans ui-state-disabled" id="' + traffic_id + '"></li>');
                                                                                                        if(onedata['method'] == 'walking')
                                                                                                        {
                                                                                                            calculateDistances_walking(origin1,destinationA,traffic_id);
                                                                                                        }
                                                                                                        else
                                                                                                        {
                                                                                                            calculateDistances_driving(origin1,destinationA,traffic_id);

                                                                                                        }
                                                                                                        

                                                                                                        $('li[spotid = "' + onedata['spotid'] + '"]' ).append('<img src="/img/' + onedata['spotid'] + '" height="60%" width="90%"><div class="travel_time_space"><div class="travel_time_content">'+onedata['travel_time_content']+'</div></div>');



                                                                                                       // $('ul#mySchedule').append('<li class="block spotinfo" spotid="' + onedata['spotid'] + '" name="' + onedata['name'] + '" zoom="' + onedata['zoom'] + '" lat="' + onedata['lat'] + '" lon="' + onedata['lon'] + '" address="' + onedata['address'] + '" spotin="' + onedata['spotin'] + '" info="' + onedata['info']+ '" ><a href=javascript:lightbox("' + onedata['name'] + '")>' + onedata['name'] + '</a></li>');  +'>'+onedata['name']+'</li>');
                                                                                                        //console.log("onedata---name", onedata['name']);

                                                                                                        //$('ul#mySchedule').append('<li class="trans ui-state-disabled" id="1">'+onedata['time_text']+'</li>');
                                                                                                      }
                                                                                                      else
                                                                                                      {
                                                                                                        var temp_string = '<li class="block spotinfo" spotid="' + onedata['spotid'] + '" name="' + onedata['name'] + '" zoom="' + onedata['zoom'] + '" lat="' + onedata['lat'] + '" lon="' + onedata['lon'] + '" address="' + onedata['address'] + '" spotin="' + onedata['spotin'] + '" info="' + onedata['info']+ '" ><a href=javascript:lightbox("' + onedata['name'] + '")>' + onedata['name'] + '</a></li>'
                                                                                                        //console.log("temp====" , temp_string);
                                                                                                        $('ul#mySchedule').append(temp_string);

                                                                                                        /*var origin1 = onedata['address'];
                                                                                                        var destinationA = opendata[i+1]['address'];
                                                                                                        var traffic_id = "";
                                                                                                        traffic_id = "traffic_" + origin1;
                                                                                                        traffic_id += "_";
                                                                                                        traffic_id += destinationA;
                                                                                                        return_value = 0;
                                                                                                          //$('ul#mySchedule').append('<li class="trans ui-state-disabled" id="trans_' + data[i]['id'] + '"><div id="outputDiv_'+origin1+'_'+destinationA+'">default</div></li>');
                                                                                                          $('ul#mySchedule').append('<li class="trans ui-state-disabled" id="' + traffic_id + '"></li>');
                                                                                                        calculateDistances_walking(origin1,destinationA,traffic_id);
                                                                                                        */
                                                                                                        $('li[spotid = "' + onedata['spotid'] + '"]' ).append('<img src="/img/' + onedata['spotid'] + '" height="60%" width="90%"><div class="travel_time_space"><div class="travel_time_content">'+onedata['travel_time_content']+'</div></div>');


                                                                                                        //$('ul#mySchedule').append('<li class="block spotinfo">'+'lastone'+onedata['name']+'</li>');


                                                                                                      }
                                                                                    

                                                                                  })


                                                      })


                              })


    }
  });
}























function openschedule_share(s1){

  // alert("open_share!!");
  clearschedule();   // 清空schedule
  $(".firstpage").hide();
  $(".menu").hide();
  $("#scheduleFrame").show();
  $("#buttonFrame").show();



  var schedule = JSON.parse(s1);

  //console.log("schedule[0]",schedule[0]);

  //console.log(data[index]);
  // alert("schedule_append");

  $(schedule).each(function(i, onedata){

        if(onedata['method'] != null)
        {

                                                                      var temp_string = '<li class="block spotinfo" spotid="' + onedata['spotid'] + '" name="' + onedata['name'] + '" zoom="' + onedata['zoom'] + '" lat="' + onedata['lat'] + '" lon="' + onedata['lon'] + '" address="' + onedata['address'] + '" spotin="' + onedata['spotin'] + '" info="' + onedata['info']+ '" ><a href=javascript:lightbox("' + onedata['name'] + '")>' + onedata['name'] + '</a></li>'
                                                                      console.log("temp====" , temp_string);
                                                                      $('ul#mySchedule').append(temp_string);

                                                                      var origin1 = onedata['address'];
                                                                      var destinationA = schedule[i+1]['address'];
                                                                      var traffic_id = "";
                                                                      traffic_id = "traffic_" + origin1;
                                                                      traffic_id += "_";
                                                                      traffic_id += destinationA;
                                                                      return_value = 0;
                                                                       $('ul#mySchedule').append('<li class="trans ui-state-disabled" id="' + traffic_id + '"></li>');
                                                                                                        if(onedata['method'] == 'walking')
                                                                                                        {
                                                                                                          calculateDistances_walking(origin1,destinationA,traffic_id);
                                                                                                        }
                                                                                                        else
                                                                                                        {
                                                                                                          calculateDistances_driving(origin1,destinationA,traffic_id);

                                                                                                        }


                                                                                                        $('li[spotid = "' + onedata['spotid'] + '"]' ).append('<img src="/img/' + onedata['spotid'] + '" height="60%" width="90%"><div class="travel_time_space"><div class="travel_time_content">'+onedata['travel_time_content']+'</div></div>');









        }
        else
        {
                                                                                                      var temp_string = '<li class="block spotinfo" spotid="' + onedata['spotid'] + '" name="' + onedata['name'] + '" zoom="' + onedata['zoom'] + '" lat="' + onedata['lat'] + '" lon="' + onedata['lon'] + '" address="' + onedata['address'] + '" spotin="' + onedata['spotin'] + '" info="' + onedata['info']+ '" ><a href=javascript:lightbox("' + onedata['name'] + '")>' + onedata['name'] + '</a></li>'
                                                                                                      //console.log("temp====" , temp_string);
                                                                                                      $('ul#mySchedule').append(temp_string);

                                                                                                      /*var origin1 = onedata['address'];
                                                                                                      var destinationA = opendata[i+1]['address'];
                                                                                                      var traffic_id = "";
                                                                                                      traffic_id = "traffic_" + origin1;
                                                                                                      traffic_id += "_";
                                                                                                      traffic_id += destinationA;
                                                                                                      return_value = 0;
                                                                                                        //$('ul#mySchedule').append('<li class="trans ui-state-disabled" id="trans_' + data[i]['id'] + '"><div id="outputDiv_'+origin1+'_'+destinationA+'">default</div></li>');
                                                                                                        $('ul#mySchedule').append('<li class="trans ui-state-disabled" id="' + traffic_id + '"></li>');
                                                                                                      calculateDistances_walking(origin1,destinationA,traffic_id);
                                                                                                      */
                                                                                                      $('li[spotid = "' + onedata['spotid'] + '"]' ).append('<img src="/img/' + onedata['spotid'] + '" height="60%" width="90%"><div class="travel_time_space"><div class="travel_time_content">'+onedata['travel_time_content']+'</div></div>');


                                                                                                      //$('ul#mySchedule').append('<li class="block spotinfo">'+'lastone'+onedata['name']+'</li>');


         }
  







  })  
                                 
                                                           
  

}