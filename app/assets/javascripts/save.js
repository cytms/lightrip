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
        type: 'GET',
        data: { user: "bbb",
         schedule_name: "name",//,
         content: JSON.stringify(content)
         //attr4: $( "#amount4" ).val(),
         //attr5: $( "#amount5" ).val()
        },
        //$( "#amount" ).html(),
        url: "http://localhost:3000/save",
        //url: "http://lightrip-cytms.herokuapp.com/step3",
        datatype: 'json',
        success: function(data, textSatus){
          //alert("ajax success");
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
          'method': null,
          'time_text': null,
          'time_value': null
        }
      counter++;
      }
    else
    {
      //console.log(counter);
        temp['method'] = $(this).children().first().html();
        temp['time_text'] = $(this).children('.duration').html();
        temp['time_value'] = $(this).children('.duration_value').html();
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
