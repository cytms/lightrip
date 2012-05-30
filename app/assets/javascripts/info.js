function information(spotName, lat, lon, text, address){
    google.maps.event.addListener(marker, 'click', function () {
      infowindow = new google.maps.InfoWindow();//下面把經緯度跟地址都hidden起來
      infowindow.setContent("<div id='infoWindow'><ul><li><h1><a href=javascript:lightbox(\'"+spotName+"\')>"+spotName+"</h1></a><p hidden='true'>"+lat+"</p><p hidden='true'>"+lon+"</p><p hidden='true'>"+address+"</p><p>"+text+"</p><img src='assets/add.png' onclick='addSchedule();'/></li></ul></div>");
      infowindow.open(map, this);
      });//如果用mousevoer時會產生事件衝突?可以用自訂overlay解決
    //google.maps.event.addListener(marker, 'mouseout', function () {
      //infowindow.close();});   
}