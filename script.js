$(document).ready(function($) {
	anime({
		targets: ['#logo','#wholeTitle'],
		translateY: {
	  		value: 50,
	  		duration: 1000
	  	},
	});
	anime({
		targets: ['#whole', 'footer'],
		opacity: {
			value: 1,
	  		duration: 3000
		}
	});
	anime({
		targets: ['#buttons', 'footer', '#searchForm'],
		translateY: {
	  		value: -50,
	  		duration: 1000
	  	},
	});
	$("#search").click(function(){
		var searchTerm = $("#searchForm").val();
		var url = "https://en.wikipedia.org/w/api.php?action=opensearch&search=" + searchTerm +"&callback=?";
		$.ajax({
			type:"GET",
			url: url,
			async: false,
			dataType: "json",
			success: function(data){
				$("#output").html('');
				if (data[1][0] == undefined) {
					$("#output").append("<p id=\"error\">We could not find the term you searched for.</p>");
				} else {
					for (var i = 0; i < 10; i++){
            		if (data[1][i]==undefined){
              			break
            		} else {
						$("#output").append("<li><p id=\"linkTitle\"><a href="+data[3][i]+" target=\"blank\" >"+data[1][i]+"</a></p><p>"+data[2][i]+"</p></li>");
            		}
				}
				anime({
					targets: 'li',
					translateY: {
				  		value: 50,
				  		duration: 1000
				  	},
					opacity: {
						value: 1,
				  		duration: 1000
					}
				});
				}
				$("#searchForm").val('');
			},
			error: function(errorMessage){
				alert("Please Enter a Seach Term");
			}
		});
	});
	$("#searchForm").keypress(function(e) {
		if(e.which==13){
			$("#search").click();
		}
	});

});
$

