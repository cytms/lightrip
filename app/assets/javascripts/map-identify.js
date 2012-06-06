function spanid(CityName,point1,point2){
	//alert('hello');
        document.getElementById('CityName').innerHTML = CityName;
        
}
function spanidrestore(CityName){
        document.getElementById('chosenSpots').innerHTML = '<p style="font-size:36px; line-height:0px; text-align:right;">' + CityName + '</p>';
        /*if ( !$("area[title='" + CityName + "']").attr('class') ){
          $("area[title='" + CityName + "']").addClass('selected');
          document.getElementById('chosenSpots').innerHTML += CityName + " ";
        }
        else {
          var deleteChar = CityName + " ";

          document.getElementById('chosenSpots').innerHTML = document.getElementById('chosenSpots').innerHTML.replace(new RegExp(deleteChar),"");
          $("area[title='" + CityName + "']").removeClass;
          //alert('suc!');
        } */
        //alert("selected");
}
//-->