function addSchedule(){ 
    var newSpotName = $('#infoWindow ul li a').html();
    var newSpotLat = $('#infoWindow ul li p').html();
    var newSpotLon = $('#infoWindow ul li p').eq(1).html();
    var newSpotAddress = $('#infoWindow ul li p').eq(2).html();
    var newSpotText = $('#infoWindow ul li p').eq(3).html();
    //if 已經在schedule則不append 可以用img判斷
    $('#mySchedule').append('<li class="block spotinfo" id="1" name="'+newSpotName+'" zoom="1.0" lat="'+newSpotLat+'" lon="'+newSpotLon+'" address="'+newSpotAddress+'" info="'+newSpotText+'" style="z-index: 3; "><a href="javascript:lightbox(\''+newSpotName+'\')">'+newSpotName+'</a><img src="/img/1" height="60%" width="90%"><div class="travel_time_space"><div class="travel_time_content">4hr</div></div></li>')
    //this.setIcon("http://maps.google.com/mapfiles/markerB.png");//加入schedule 後要改變圖示
