/**import_map.js**/
/*$(function(){ 
  $('#myMap').tinyMap({ 
      center: {x: '25.03369510279853', y: '121.56480431556702'}, 
      zoom: 16 
  }); 

  $('#myMap').tinyMap({ 
      marker: [ 
          {addr: '25.037467, 121.564077', text: '台北市政府'}, 
          {addr: '25.100295, 121.549494', text: '國立故宮博物院'} 
      ] 
  }); 
});*/

google.load("jquery", "1.7");
google.load("jqueryui", "1.8");

google.setOnLoadCallback(function() {
	$('#main').css('-moz-user-select', 'none'); //禁止fx選取文字
	$('#main').get(0).onselectstart = function(){return false;}; //禁止IE選取文字
	
	var temp_counter = 0;
	// 所有行程
	$(function() {
		//$( "#main" ).tabs();

		$( "#mapFrame, #mySchedule" ).sortable({ 
			connectWith: ".connectedSortable",
			cancel: ".ui-state-disabled",
			start: function(event, ui) {
			//alert("activate!!")
			console.log("ui-item=============:",ui.item);
			//console.log(ui.placeholder);
			//console.log(ui.placeholder.prev());
			// console.log(ui.placeholder.next());
			//return;
				//if(temp_counter == 0){
					//console.log("aaaaaaaaaaaaaaaaaaaaaa");
					//console.log("next html:" + ui.placeholder.next().attr('address'));
					
					// if (ui.placeholder.prev().attr('class') == "trans ui-state-disabled" ) {
						// ui.placeholder.prev().remove();
					// };

					// if (ui.placeholder.next().attr('class') == "trans ui-state-disabled" ) {
						// ui.placeholder.next().remove();
					// };
						
					ui.placeholder.prevAll('.ui-state-disabled').first().remove();
					ui.placeholder.nextAll('.ui-state-disabled').first().remove();

					//console.log($('ul#mySchedule li:first').attr('address'));
					//console.log(ui.placeholder.attr('address'));	

					if($('ul#mySchedule li:first').attr('address') == ui.placeholder.attr('address'))
					{
					//	console.log("click the first one");
					}
					else if ($('ul#mySchedule li:last').attr('address') == ui.placeholder.attr('address'))
					{
					//	console.log("click the last one");

					}
					else
					{
						var originC = ui.placeholder.prev().attr('address');
					//	console.log("originC(middle) = ");
					//	console.log(originC);

						var destinationC = ui.placeholder.next().attr('address');
						//console.log(ui.placeholder.next());
					//	console.log("destinationC(middle) = ");
						// console.log(destinationC);


						//var origin1 = data[i]['address'];
						//var destinationA = data[(i+1)]['address'];
						var traffic_id = "";
						traffic_id = "traffic_" + originC;
						traffic_id += "_";
						traffic_id += destinationC;
						//return_value = 0;
						//$('ul#mySchedule').append('<li class="trans ui-state-disabled" id="trans_' + data[i]['id'] + '"><div id="outputDiv_'+origin1+'_'+destinationA+'">default</div></li>');
						//$('ul#mySchedule').append('<li class="trans ui-state-disabled" id="' + traffic_id + '"></li>');
						$('<li class="trans ui-state-disabled" id="' + traffic_id + '"></li>').insertAfter(ui.placeholder);
						calculateDistances_walking(originC,destinationC,traffic_id);
						// console.log("middle id!!");
						// console.log("traffic_id: " + traffic_id);



					//$('<li class="trans ui-state-disabled">middle</li>').insertAfter(ui.item);
					}
				//};
			temp_counter = 1;

			},
			/*change: function(event, ui) {
			

				if(temp_counter == 0){
					console.log("aaaaaaaaaaaaaaaaaaaaaa");
					console.log("next html:" + ui.item.next().next().attr('address'));
					if (ui.item.prev().attr('class') == "trans ui-state-disabled" ) {
						ui.item.prev().remove();
					};

					if (ui.item.next().attr('class') == "trans ui-state-disabled" ) {
						ui.item.next().remove();
					};
					//console.log($('ul#mySchedule li:first').attr('address'));
					//console.log(ui.item.attr('address'));	

					if($('ul#mySchedule li:first').attr('address') == ui.item.attr('address'))
					{
						console.log("click the first one");
					}
					else if ($('ul#mySchedule li:last').attr('address') == ui.item.attr('address'))
					{
						console.log("click the last one");

					}
					else
					{
						var originC = ui.item.prev().attr('address');
						console.log("originC(middle) = ");
						console.log(originC);

						var destinationC = ui.item.next().next().attr('address');
						//console.log(ui.item.next());
						console.log("destinationC(middle) = ");
						console.log(destinationC);


						//var origin1 = data[i]['address'];
						//var destinationA = data[(i+1)]['address'];
						var traffic_id = "";
						traffic_id = "traffic_" + originC;
						traffic_id += "_";
						traffic_id += destinationC;
						//return_value = 0;
						//$('ul#mySchedule').append('<li class="trans ui-state-disabled" id="trans_' + data[i]['id'] + '"><div id="outputDiv_'+origin1+'_'+destinationA+'">default</div></li>');
						//$('ul#mySchedule').append('<li class="trans ui-state-disabled" id="' + traffic_id + '"></li>');
						$('<li class="trans ui-state-disabled" id="' + traffic_id + '"></li>').insertAfter(ui.item);
						calculateDistances_walking(originC,destinationC,traffic_id);
						console.log("middle id!!");
						console.log("traffic_id: " + traffic_id);



					//$('<li class="trans ui-state-disabled">middle</li>').insertAfter(ui.item);
					}
				};
			temp_counter = 1;

			},*/

			stop: function(event, ui) {
			//alert("stop!!");
			console.log("ui-item=============:",ui.item);
			temp_counter = 0;	
			//alert('class:' + ui.item.prev().attr('class'));
			if (ui.item.prev().attr('class') == "trans ui-state-disabled" ) {
				ui.item.prev().remove();
			};

			if (ui.item.next().attr('class') == "trans ui-state-disabled" ) {
				ui.item.next().remove();
			};
			
			if($('ul#mySchedule li:first').attr('address') == ui.item.attr('address'))
			{
				console.log("stop at the first one");

				var origin_after = ui.item.attr("address");
				console.log("origin_after = ");
				console.log(origin_after);

				var destination_after = ui.item.next().attr('address');
				//console.log(ui.item.next());
				console.log("destination_after = ");
				console.log(destination_after);

				var traffic_id_after = "";
				traffic_id_after = "traffic_" + origin_after;
				traffic_id_after += "_";
				traffic_id_after += destination_after;

				$('<li class="trans ui-state-disabled" id="' + traffic_id_after + '"></li>').insertAfter(ui.item);
				calculateDistances_walking(origin_after,destination_after,traffic_id_after);
			}
			else if ($('ul#mySchedule li:last').attr('address') == ui.item.attr('address'))
			{
				console.log("stop at the last one");

				var origin_before = ui.item.prev().attr('address');
				console.log("origin_before = ");
				console.log(origin_before);

				var destination_before = ui.item.attr("address");
				//console.log(ui.item.next());
				console.log("destination_before = ");
				console.log(destination_before);

				var traffic_id_before = "";
				traffic_id_before = "traffic_" + origin_before;
				traffic_id_before += "_";
				traffic_id_before += destination_before;

				if(ui.item != null){
					console.log("AAAAAA");
					$('<li class="trans ui-state-disabled" id="' + traffic_id_before + '"></li>').insertBefore(ui.item);
				}
				calculateDistances_walking(origin_before,destination_before,traffic_id_before);

			}
			else
			{


				var origin_before = ui.item.prev().attr('address');
				console.log("origin_before = ");
				console.log(origin_before);

				var destination_before = ui.item.attr("address");
				//console.log(ui.item.next());
				console.log("destination_before = ");
				console.log(destination_before);


				var origin_after = ui.item.attr("address");
				console.log("origin_after = ");
				console.log(origin_after);

				var destination_after = ui.item.next().attr('address');
				//console.log(ui.item.next());
				console.log("destination_after = ");
				console.log(destination_after);


				//var origin1 = data[i]['address'];
				//var destinationA = data[(i+1)]['address'];
				var traffic_id_before = "";
				traffic_id_before = "traffic_" + origin_before;
				traffic_id_before += "_";
				traffic_id_before += destination_before;

				var traffic_id_after = "";
				traffic_id_after = "traffic_" + origin_after;
				traffic_id_after += "_";
				traffic_id_after += destination_after;
				//return_value = 0;
				//$('ul#mySchedule').append('<li class="trans ui-state-disabled" id="trans_' + data[i]['id'] + '"><div id="outputDiv_'+origin1+'_'+destinationA+'">default</div></li>');
				//$('ul#mySchedule').append('<li class="trans ui-state-disabled" id="' + traffic_id + '"></li>');
				if(ui.item != null){
					console.log("BBBB");
					$('<li class="trans ui-state-disabled" id="' + traffic_id_before + '"></li>').insertBefore(ui.item);
				}
				$('<li class="trans ui-state-disabled" id="' + traffic_id_after + '"></li>').insertAfter(ui.item);
				
				calculateDistances_walking(origin_before,destination_before,traffic_id_before);
				calculateDistances_walking(origin_after,destination_after,traffic_id_after);
				
				//console.log(ui.item.attr("address"));
				//console.log("traffic_id: " + traffic_id);

			}	


			//$('<li class="trans ui-state-disabled">after</li>').insertAfter(ui.item);
			//$('<li class="trans ui-state-disabled">before</li>').insertBefore(ui.item);
			


			//ui.item.append('<li class="trans ui-state-disabled" id="trans_' + data[i]['id'] + '">');
			//ui.item.prepend('<li class="trans ui-state-disabled" id="trans_' + data[i]['id'] + '">');
			//ui.item.append('<li class="trans ui-state-disabled" id="trans_' + data[i]['id'] + '">');
			if ( $('ul#mySchedule li:last').attr('class') == "trans ui-state-disabled" ) {
				$('ul#mySchedule li:last').remove();
			};
			
			if ( $('ul#mySchedule li:first').attr('class') == "trans ui-state-disabled" ) {
				$('ul#mySchedule li:first').remove();
			};

			}
		}).disableSelection();
		
		/*$(".block").resizable({
			maxHeight: 300,
			maxWidth: 150,
			minHeight: 40,
			minWidth: 150,
		});*/

		/*$(".active").click(function() {
			//$("form").submit();
			$(".menu").hide();//嵌入body裡面會不會比較好
			$("#scheduleFrame").show();
			$("#buttonFrame").show();
			$(".firstpage").hide();
		});*/
		$("#map").hide();
		$("#b1").click(function() {
			$(".menu").hide();
			//$(".firstpage").show();
			$("#insert-spots").show();
			$("#map").show();
			$("#myMap").hide();
			$(".firstpage").hide();
			//嵌入body裡面會不會比較好
		});
		$("#b2").click(function() {
			$(".menu").hide();
			
			//$(".firstpage").show();
			$("#scheduleFrame").show();
			$("#map").hide();
			$("#myMap").show();
			$(".firstpage").hide();
			//嵌入body裡面會不會比較好
		});
		$("#b3").click(function() {
			$(".menu").hide();
			$(".firstpage").show();
			$("#menu").show();
			
			//嵌入body裡面會不會比較好
		});

		//$( "#main" ).tabs();

		//$("#drag").draggable();
	});
});

//lightbox
function lightbox(content) {
	
	$("body").append("<div class='bg'></div>");
	$("body").append("<div class='lightbox'><div class='framebox'>" + content + "</div></div>");
	$(".lightbox").fadeIn(1000);
	$(".framebox").fadeIn(1000);
	$(".bg").click(function() {
		$(".lightbox").remove();//處裡消掉的東西
		$(".bg").remove();//嵌入body裡面會不會比較好
		
	});
	//if ($(".lightbox").attr("style:display") == "none"){
			//$(".lightbox").remove();}
}

	$(function() {
		$( "#slider" ).slider({
			orientation: "vertical",
			value:50,
			min: 0,
			max: 100,
			step: 20,
			slide: function( event, ui ) {
				$( "#amount" ).val( ui.value );
			}
		});
		$( "#amount" ).val( $( "#slider" ).slider( "value" ) );
		
		$( "#slider2" ).slider({
			orientation: "vertical",
			value:50,
			min: 0,
			max: 100,
			step: 20,
			slide: function( event, ui ) {
				$( "#amount2" ).val( ui.value );
			}
		});
		$( "#amount2" ).val( $( "#slider2" ).slider( "value2" ) );
		
		$( "#slider3" ).slider({
			orientation: "vertical",
			value:50,
			min: 0,
			max: 100,
			step: 20,
			slide: function( event, ui ) {
				$( "#amount3" ).val( ui.value );
			}
		});
		$( "#amount3" ).val( $( "#slider3" ).slider( "value3" ) );
		$( "#slider4" ).slider({
			orientation: "vertical",
			value:50,
			min: 0,
			max: 100,
			step: 20,
			slide: function( event, ui ) {
				$( "#amount4" ).val( ui.value );
			}
		});
		$( "#amount4" ).val( $( "#slider4" ).slider( "value4" ) );
		$( "#slider5" ).slider({
			orientation: "vertical",
			value:50,
			min: 0,
			max: 100,
			step: 20,
			slide: function( event, ui ) {
				$( "#amount5" ).val( ui.value );
			}
		});
		$( "#amount5" ).val( $( "#slider5" ).slider( "value5" ) );
	});

(function($){
	$(document).ready(function(){
		$('.active').click(function(){
			$(".firstpage").hide();
			$(".menu").hide();
			$("#scheduleFrame").show();
			$("#buttonFrame").show();
			//alert("Handler for .click() called.");
			$.ajax({
				type: 'GET',
				data: { attr1: $( "#amount" ).val(),
				 attr2: $( "#amount2" ).val(),
				 attr3: $( "#amount3" ).val(),
				 attr4: $( "#amount4" ).val(),
				 attr5: $( "#amount5" ).val()
				},
				//$( "#amount" ).html(),
				url: "http://localhost:3000/step3",
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
					for ( var i = 0; i < data.length ; i++) {
						$('ul#mySchedule').append('<li class="block spotinfo" spotid="' + data[i]['id'] + '" name="' + data[i]['name'] + '" zoom="' + data[i]['zoom'] + '" lat="' + data[i]['lat'] + '" lon="' + data[i]['lon'] + '" address="' + data[i]['address'] + '" spotin="' + data[i]['attr1'] + '" info="' + data[i]['info']+ '" ><a href=javascript:lightbox("' + data[i]['name'] + '")>' + data[i]['name'] + '</a></li>');
						if( i != (data.length - 1)){
							var origin1 = data[i]['address'];
							var destinationA = data[(i+1)]['address'];
							var traffic_id = "";
							traffic_id = "traffic_" + origin1;
							traffic_id += "_";
							traffic_id += destinationA;
							return_value = 0;
								//$('ul#mySchedule').append('<li class="trans ui-state-disabled" id="trans_' + data[i]['id'] + '"><div id="outputDiv_'+origin1+'_'+destinationA+'">default</div></li>');
								$('ul#mySchedule').append('<li class="trans ui-state-disabled" id="' + traffic_id + '"></li>');
							calculateDistances_walking(origin1,destinationA,traffic_id);
							//console.log("traffic_id: " + traffic_id);

						}
						$('li#' + data[i]['id'] ).append('<img src="/img/' + data[i]['id'] + '" height="60%" width="90%"><div class="travel_time_space"><div class="travel_time_content">4hr</div></div>');
					}

				}
			}
			);
		});
	});
})(jQuery);
