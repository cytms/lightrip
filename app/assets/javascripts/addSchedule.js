function addSchedule(){ 
    var newSpot = $('#infoWindow ul li a').html();
    alert(newSpot);
    $('#mySchedule').append('<li class="block ui-resizable" style="position: relative; z-index: 3; top: 0px; left: 0px; width: 150px; height: 97px; "><a href="javascript:lightbox(\''+newSpot+'\')">'+newSpot+'</a><div class="ui-resizable-handle ui-resizable-e" style="" unselectable="on"></div><div class="ui-resizable-handle ui-resizable-s" style="" unselectable="on"></div><div class="ui-resizable-handle ui-resizable-se ui-icon ui-icon-gripsmall-diagonal-se" style="z-index: 1001; " unselectable="on"></div></li>');
    //this.setIcon("http://maps.google.com/mapfiles/markerB.png");//加入schedule 後要改變圖示
}