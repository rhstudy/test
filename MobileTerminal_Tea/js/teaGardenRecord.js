window.onload = function() {
	$("#teaGargenRecordBtn").on("tap", function() {
		var teaGardenName = $("#teaGardenName").val();
		var teaGardenProduct = $("#teaGardenProduct").val();
		var teaGardenEquipment = $("#teaGardenEquipment").val();
		var teaGardenTelphone = $("#teaGardenTelphone").val();
		$.ajax({
			type:"get",
			url:"../php/teaGarden.php?teaGardenName="+teaGardenName+"&teaGardenProduct="+teaGardenProduct+"&teaGardenEquipment="+teaGardenEquipment+"&teaGardenTelphone="+teaGardenTelphone,
			async:true,
			success:function(data){
                console.log(data);
				window.location.href = "teaGardenIntroduction.php";
				
				// window.location.href = "./index.html";
			},
			error:function(){}
		});

		
		//console.log($("#teaGardenName").val()+" "+$("#teaGardenProduct").val()+" "+$("#teaGardenEquipment").val()+" "+$("#teaGardenTelphone").val());
		
	});
	
	$("#teaGargenButton1").on("tap", function() {
		
		var teaName = $("#teaName").val();
		var teaOrigin = $("#teaOrigin").val();
		var teaIntroduction = $("#teaIntroduction").val();
		$.ajax({
			type:"get",
			url:"../php/tea.php?teaName="+teaName+"&teaOrigin="+teaOrigin+"&teaIntroduction="+teaIntroduction,
			async:true,
			success:function(data){
                console.log(data);
				window.location.href = "productIntroduction.php";
				
				// window.location.href = "./index.html";
			},
			error:function(){}
		});
		
//		window.location.href = "productIntroduction.php";
		//console.log($("#teaGardenName").val()+" "+$("#teaGardenProduct").val()+" "+$("#teaGardenEquipment").val()+" "+$("#teaGardenTelphone").val());
		
	});
	
}