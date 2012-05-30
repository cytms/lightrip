function addSchedule(){ 
	var counter = 0;
	var find = 0;
	while ((counter < $(li.block spotinfo).size)&&(find==0)){
		if ($(li.block spotinfo).eq(counter).name == $('#infoWindow ul li a').html() )
			{find =1;}
		counter++;
	}
	if (find !=1){
		var newSpotName = $('#infoWindow ul li a').html();
    var newSpotID = $('#infoWindow ul li p').html();
    var newSpotLat = $('#infoWindow ul li p').eq(1).html();
    var newSpotLon = $('#infoWindow ul li p').eq(2).html();
    var newSpotAddress = $('#infoWindow ul li p').eq(3).html();
    var newSpotText = $('#infoWindow ul li p').eq(4).html(); 
    var newSpotIn = $('#infoWindow ul li p').eq(5).html(); 
    $('#mySchedule').append('<li class="block spotinfo" id="'+newSpotID+'" name="'+newSpotName+'" zoom="1.0" lat="'+newSpotLat+'" lon="'+newSpotLon+'" address="'+newSpotAddress+'" info="'+newSpotText+'" spotin = "1" style="z-index: 3; "><a href="javascript:lightbox(\''+newSpotName+'\')">'+newSpotName+'</a><img src="/img/1" height="60%" width="90%"><div class="travel_time_space"><div class="travel_time_content">4hr</div></div></li>')
	}
	/*
    var newSpotIn = $('#infoWindow ul li p').eq(5).html(); 
    //if 已經在schedule則不append 可以用img判斷
    if (newSpotIn != 1){//增加進去後就會不行再增加
   	var newSpotName = $('#infoWindow ul li a').html();
    var newSpotID = $('#infoWindow ul li p').html();
    var newSpotLat = $('#infoWindow ul li p').eq(1).html();
    var newSpotLon = $('#infoWindow ul li p').eq(2).html();
    var newSpotAddress = $('#infoWindow ul li p').eq(3).html();
    var newSpotText = $('#infoWindow ul li p').eq(4).html(); 
    $('#mySchedule').append('<li class="block spotinfo" id="'+newSpotID+'" name="'+newSpotName+'" zoom="1.0" lat="'+newSpotLat+'" lon="'+newSpotLon+'" address="'+newSpotAddress+'" info="'+newSpotText+'" spotin = "1" style="z-index: 3; "><a href="javascript:lightbox(\''+newSpotName+'\')">'+newSpotName+'</a><img src="/img/1" height="60%" width="90%"><div class="travel_time_space"><div class="travel_time_content">4hr</div></div></li>')
    //this.setIcon("http://maps.google.com/mapfiles/markerB.png");//加入schedule 後要改變圖示
	$('#infoWindow ul li p').eq(5).html("1");
	}*/
	
}

