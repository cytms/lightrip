
/*transform schedule into json*/
function save_json(){

  alert("save");
  $('ul#mySchedule > li').each(function(index,element){
  	//console.log(element);
  	
  	var hash = {
  		'spotid' : $(this).attr('spotid'),
  		'name' : $(this).attr('name')

  	}
  	console.log(hash);

  })

}