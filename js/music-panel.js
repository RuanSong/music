$(function(){
	var indentFlag = 0;
	$("#play .packup").click(function(){
		var offsetLeft = $("#play").offset().left;
		var offsetWidth = $("#play").width() - $(this).width();
		if(offsetLeft >=0){
			indentFlag = 1;
		}else{
			$("#play .pack").removeClass("packup").addClass("packing")
			indentFlag = 0;
		}
		$("#play").animate({left:-offsetWidth*indentFlag },500,function(){
			console.log(indentFlag)
			if(indentFlag == 1){
				$("#play .pack").removeClass("packup").addClass("packdown");
			}
			else{
				$("#play .pack").removeClass("packdown").removeClass("packing").addClass("packup");
			}
		})
	})
})