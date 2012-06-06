	function save(){
// (function ($){
  //$(document).ready(function(){
    //$('#save_button').click(function(){
      //console.log("click!!")
      if ($('#userid').html()!=null){
      var content = save_json();
      //console.log(save_json());
      //alert("Handler for .click() called.");
      $.ajax({
        type: 'POST',
        data: { user: $('p#userid').html(),
         schedule_name: $('h2#schedule_name').html(),//,
         content: JSON.stringify(content)
         //attr4: $( "#amount4" ).val(),
         //attr5: $( "#amount5" ).val()
        },
        //$( "#amount" ).html(),
        url: "/save",
        //url: "http://lightrip-cytms.herokuapp.com/step3",
        datatype: 'json',
        success: function(data, textSatus){
          console.log("data",data);
          //createCookie("sid",data['id'],365);
          $('#sid').html(data['id']);
          alert("Save successfully! sid: " + $("#sid").html() + "is saved");

          //$(".firstpage").hide();//處裡消掉的東西
          //$(".menu").hide();//嵌入body裡面會不會比較好
          //$("#scheduleFrame").show();
          //$("#buttonFrame").show();
          //$("li.block:even").append()
          //$('li.block:odd').append("<a href=javascript:lightbox('hahaha')>"+data['test']+"</a>");
          //console.log(data);

        }
      });
    }
    else{
      console.log($('#userid').html());
      alert("please login first");
      $(".menu").hide();
      $(".firstpage").show();
      $("#menu").show();
    }
  //});
}

function save_json(){
  console.log("save_json");
  var schedule_array = [];
  var temp;
  var aaa;
  var counter = 1;
  $('ul#mySchedule > li').each(function(){
    // console.log(element);
      if( $(this).hasClass('ui-state-disabled') ==false)
      {
        //console.log(counter);
        temp = {
          'spotid' : $(this).attr('spotid'),
          'name' : $(this).attr('name'),
          'zoom' : $(this).attr('zoom'),
          'lat' : $(this).attr('lat'),
          'lon' : $(this).attr('lon'),
          'info' : $(this).attr('info'),
          'spotin' : $(this).attr('spotin'),
          'address' : $(this).attr('address'),
          'travel_time_content' : $(this).children().children('.travel_time_content').html(),
          'method': null,
          'time_text': null,
          'time_value': null
        }
      counter++;
      }
    else
    {
      //console.log(counter);
        console.log("$(this).children().first()",$(this).children().first());
        temp['method'] = $(this).children().first().children('.traffic_right').children().first().html();
        temp['time_text'] = $(this).children().first().children('.traffic_right').children('.duration').html();
        temp['time_value'] = $(this).children().first().children('.traffic_right').children('.duration_value').html();
      schedule_array.push(temp);
      //i ++;
      //console.log(temp);
      temp = null;
      counter++;
    }
    //console.log(temp);
    if ($('ul#mySchedule > li').size() == (counter - 1))
    {schedule_array.push(temp);}//ths last one



})
  return schedule_array;
}
