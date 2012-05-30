function information(spotName, text, address){
    google.maps.event.addListener(marker, 'click', function () {
      infowindow = new google.maps.InfoWindow();
      var name = spotName;
      infowindow.setContent("<div id='infoWindow'><ul><li><h1><a href=javascript:lightbox(\'"+spotName+"\')>"+spotName+"</h1></a><p>"+address+text+"</p><img src='assets/add.png' onclick='addSchedule();'/></li></ul></div>");
      infowindow.open(map, this);
      });//如果用mousevoer時會產生事件衝突?可以用自訂overlay解決
    //google.maps.event.addListener(marker, 'mouseout', function () {
      //infowindow.close();});   
}