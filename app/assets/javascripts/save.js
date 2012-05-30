
/*transform schedule into json*/
function save_json(){

var schedule_array = [];
var temp;
alert("save_json_function 打開console可以看到JSON");
  $('ul#mySchedule > li').each(function(index,element){
	  	// console.log(element);
	  	if( $(this).hasClass('ui-state-disabled') ==false)
	  	{
		  	temp = {
		  		'spotid' : $(this).attr('spotid'),
		  		'name' : $(this).attr('name'),
		  		'method': null,
		  		'time_text': null,
		  		'time_value': null
		  	}
		}
		else
		{
			//hash.push('spotid' : $(this).attr('spotid'));
			
			// var hash = {
		  		//'spotid' : $(this).attr('spotid'),
		  		//'name' : $(this).attr('name')
		  		// 'method' : $(this).children().first().html(),
		  	// }
		  	// hash = hash.concat(temp);
		  	temp['method'] = $(this).children().first().html();
		  	temp['time_text'] = $(this).children('.duration').html();
		  	temp['time_value'] = $(this).children('.duration_value').html();
			schedule_array.push(temp);
			//console.log(temp);
			temp = null;
		}

  })

  //var lastSpot = $('ul#mySchedule > li').last();
  temp = {
		  		'spotid' : $('ul#mySchedule > li').last().attr('spotid'),
		  		'name' : $('ul#mySchedule > li').last().attr('name'),
		  		'method': null,
		  		'time_text': null,
		  		'time_value': null
	}
	schedule_array.push(temp);
	//console.log(temp);

	console.log("JSON", schedule_array);

}