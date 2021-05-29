$(function(){	

bgcolor=$('svg .st0').css('fill');
	c01=$('svg .st1').css('fill');
	c02=$('svg .st2').css('fill');
	c03=$('svg .st3').css('fill');
	c04=$('svg .st4').css('fill');
	c05=$('svg .st5').css('fill');
	c06=$('svg .st6').css('fill');
    c07=$('svg .st7').css('fill');
    c08=$('svg .st8').css('fill');
    c09=$('svg .st9').css('fill');
    c10=$('svg .st10').css('fill');
    c11=$('svg .st11').css('fill');
	c12=$('svg .st12').css('fill');
	c13=$('svg .st13').css('fill');
	c14=$('svg .st14').css('fill');
    
$("#btn01").click(function(){
    
	$("#svgArea").load("/i/"+imgID+"/"+imgID+"_svg_s1.svg");
	$(function(){
	setTimeout(function(){
		bgcolor=$('svg .st0').css('fill');
		c01=$('svg .st1').css('fill');
		c02=$('svg .st2').css('fill');
		c03=$('svg .st3').css('fill');
		c04=$('svg .st4').css('fill');
		c05=$('svg .st5').css('fill');
		c06=$('svg .st6').css('fill');
        c07=$('svg .st7').css('fill');
        c08=$('svg .st8').css('fill');
        c09=$('svg .st9').css('fill');
        c10=$('svg .st10').css('fill');
        c11=$('svg .st11').css('fill');
		c12=$('svg .st12').css('fill');
		c13=$('svg .st13').css('fill');
		c14=$('svg .st14').css('fill');
		irohaichi();
        Tsuika();
	},100);
	});	
    
    
    
});
$("#btn02").click(function(){
	$("#svgArea").load("/i/"+imgID+"/"+imgID+"_svg_s2.svg");
	$(function(){
	setTimeout(function(){
		bgcolor=$('svg .st0').css('fill');
		c01=$('svg .st1').css('fill');
		c02=$('svg .st2').css('fill');
		c03=$('svg .st3').css('fill');
		c04=$('svg .st4').css('fill');
		c05=$('svg .st5').css('fill');
		c06=$('svg .st6').css('fill');
        c07=$('svg .st7').css('fill');
        c08=$('svg .st8').css('fill');
        c09=$('svg .st9').css('fill');
        c10=$('svg .st10').css('fill');
        c11=$('svg .st11').css('fill');
		c12=$('svg .st12').css('fill');
		c13=$('svg .st13').css('fill');
		c14=$('svg .st14').css('fill');
		irohaichi();
        Tsuika();
	},100);
	});	
});	
    
$("#btn03").click(function(){
	$("#svgArea").load("/i/"+imgID+"/"+imgID+"_svg_s3.svg");
	$(function(){
	setTimeout(function(){
		bgcolor=$('svg .st0').css('fill');
		c01=$('svg .st1').css('fill');
		c02=$('svg .st2').css('fill');
		c03=$('svg .st3').css('fill');
		c04=$('svg .st4').css('fill');
		c05=$('svg .st5').css('fill');
		c06=$('svg .st6').css('fill');
        c06=$('svg .st7').css('fill');
        c07=$('svg .st7').css('fill');
        c08=$('svg .st8').css('fill');
        c09=$('svg .st9').css('fill');
        c10=$('svg .st10').css('fill');
        c11=$('svg .st11').css('fill');
		c12=$('svg .st12').css('fill');
		c13=$('svg .st13').css('fill');
		c14=$('svg .st14').css('fill');
		irohaichi();
        Tsuika();
	},100);
	});				
});
    

	
$("button#randRGB").click(function(){
	//$("#svgArea").load("/i/"+imgID+"/"+imgID+"_svg_s3.svg");
	var Skekka=new Array();
	for(i=0;i<6;i++){
	Skekka[i]='rgb('+parseInt(Math.random()*255)+','+parseInt(Math.random()*255)+','+parseInt(Math.random()*255)+')';
	}
	$(function(){
	setTimeout(function(){
		bgcolor= Skekka[0];
		c01=  Skekka[1];
		c02=  Skekka[2];
		c03=  Skekka[3];
		c04=  Skekka[4];
		c05=  Skekka[5];
		
		$('svg .st0').css('fill',bgcolor);
		$('svg .st1').css('fill',c01);
		$('svg .st2').css('fill',c02);
		$('svg .st3').css('fill',c03);
		$('svg .st4').css('fill',c04);
		$('svg .st5').css('fill',c05);
		$('svg .st6').css('fill',c06);
        $('svg .st7').css('fill',c07);
        $('svg .st8').css('fill',c08);
        $('svg .st9').css('fill',c09);
        $('svg .st10').css('fill',c10);
        $('svg .st11').css('fill',c11);
		$('svg .st12').css('fill',c12);
		$('svg .st13').css('fill',c13);
		$('svg .st14').css('fill',c14);
		irohaichi();
	},100);
	});	
});		
	

irohaichi();
	if(colorG==2){
		$("#setColor02,#setColor03,#setColor04,#setColor05,#setColor06,#setColor07,#setColor08,#setColor09,#setColor10,#setColor11,#setColor12,#setColor13,#setColor14").remove();	
	}else if(colorG==3){
		$("#setColor03,#setColor04,#setColor05,#setColor06,#setColor07,#setColor08,#setColor09,#setColor10,#setColor11,#setColor12,#setColor13,#setColor14").remove();		
	}else if(colorG==4){
		$("#setColor04,#setColor05,#setColor06,#setColor07,#setColor08,#setColor09,#setColor10,#setColor11,#setColor12,#setColor13,#setColor14").remove();		
	}else if(colorG == 5){
		$("#setColor05,#setColor06,#setColor07,#setColor08,#setColor09,#setColor10,#setColor11,#setColor12,#setColor13,#setColor14").remove();
    }else if(colorG == 6){
		$("#setColor06,#setColor07,#setColor08,#setColor09,#setColor10,#setColor11,#setColor12,#setColor13,#setColor14").remove();
    }else if(colorG == 7){
		$("#setColor07,#setColor08,#setColor09,#setColor10,#setColor11,#setColor12,#setColor13,#setColor14").remove();
    }else if(colorG == 8){
		$("#setColor08,#setColor09,#setColor10,#setColor11,#setColor12,#setColor13,#setColor14").remove();
    }else if(colorG == 9){
        $("#setColor09,#setColor10,#setColor11,#setColor12,#setColor13,#setColor14").remove();
    }else if(colorG == 10){
        $("#setColor10,#setColor11,#setColor12,#setColor13,#setColor14").remove();
    }else if(colorG == 11){
        $("#setColor11,#setColor12,#setColor13,#setColor14").remove();
    }else if(colorG == 12){
        $("#setColor12,#setColor13,#setColor14").remove();
	}else if(colorG == 13){
        $("#setColor13,#setColor14").remove();
	}else if(colorG == 14){
        $("#setColor14").remove();
	}else if(colorG == 1){
		$("#setColor01,#setColor02,#setColor03,#setColor04,#setColor05,#setColor06,#setColor07,#setColor08,#setColor09,#setColor10,#setColor11,#setColor12").remove();		
	}else if(colorG < 5){
	}
});


function Tsuika(){
        nagasa = Math.ceil(256 * detiuy);      
        $("#graph02,svg").css({width:"256px",height:nagasa});    
		sizeNumber=256;
    $("ul#size li").removeClass();
        $("ul#size li:nth-child(6)").addClass("on");
}    


//*PNG側のダウンロード作業です。
function ddo(){
	//$('#slideArea').animate({ scrollTop: 0 }, 0);
	//$("body").css("width","300%");
    
    
    //alert("テスト02");
    
	ddi(); 
    
    $("#mainFooter").nextAll("canvas").remove();
    
	return false;
}

function ddi(){	
	//ボタンを押した時点での#svg内のhtmlと高さ、横幅を変数にいれといて、、
	snap_height=$("#graph02").height();
	snap_width=$("#graph02").width();
	//alert(snap_height);
	//alert(snap_width);
	
	svgText = $("#graph02").html();

	//svgをcanvasにしますよ。
	
	canvg();
	
	
	 html2canvas($("#graph02"), {
       onrendered: function(canvas) {        
        document.getElementById("ss").href = canvas.toDataURL("image/png");	
 		document.getElementById("ss").click();
		
	again();   
	
	return false;
	
	
 	}
	
 });
}

//*JPG側のダウンロード作業です。
function jjo(){
	//$('#slideArea').animate({ scrollTop: 0 }, 0);
	$("body").css("width","300%");
	jji(); 
	return false;
}

function jji(){	
	//ボタンを押した時点での#svg内のhtmlと高さ、横幅を変数にいれといて、、
	snap_height=$("#graph02").height();
	snap_width=$("#graph02").width();
	//alert(snap_height);
	//alert(snap_width);
	svgText = $("#graph02").html();

    
    
   // alert("bb");
    $("#Maincolumn #svgArea").css("background","#ffffff");
    
	//svgをcanvasにしますよ。
	
	canvg();
	 html2canvas($("#graph02"), {
        onrendered: function(canvas) {        
        document.getElementById("jj").href = canvas.toDataURL("image/jpeg");	
   //document.getElementById("jj").href = canvas.toDataURL("image/jpg");	
	   		document.getElementById("jj").click();
            
    $("#Maincolumn #svgArea").css("background","none");        
            
	again();   
 	}
 });
}


//変数にいれといた要素を解凍します。高さ、横幅も再設定です。
function again(){
	$("body").css("width","100%");
		
		//$('html,body').animate({ scrollTop: "2200px" },0);
		
	$(function(){
	setTimeout(function(){
			$("#graph02").remove();

	$("#cap_inner02").append("<div id='graph02'>Hello</div>");
	$("#graph02").html(svgText);
	
	$("#graph02").css({
		"height":snap_height,
		"width":snap_width
		})
	},1000);
	});	

}



	
function irohaichi(){
	
    
//alert(colorG);
    
	//("#colorArea").empty();

	if(colorG==2){
			$("#colorArea").html("<div id='setColor00' class='color'><input type='text' id='hsvflat00'></div><div id='setColor01' class='color'><input type='text' id='hsvflat01'></div>");
	}else if(colorG==3){
		$("#colorArea").html("<div id='setColor00' class='color'><input type='text' id='hsvflat00'></div><div id='setColor01' class='color'><input type='text' id='hsvflat01'></div><div id='setColor02' class='color'><input type='text' id='hsvflat02'></div>");	
	}else if(colorG==4){
		$("#colorArea").html("<div id='setColor00' class='color'><input type='text' id='hsvflat00'></div><div id='setColor01' class='color'><input type='text' id='hsvflat01'></div><div id='setColor02' class='color'><input type='text' id='hsvflat02'></div><div id='setColor03' class='color'><input type='text' id='hsvflat03'></div>");		
	}else if(colorG == 5){
		$("#colorArea").html("<div id='setColor00' class='color'><input type='text' id='hsvflat00'></div><div id='setColor01' class='color'><input type='text' id='hsvflat01'></div><div id='setColor02' class='color'><input type='text' id='hsvflat02'></div><div id='setColor03' class='color'><input type='text' id='hsvflat03'></div><div id='setColor04' class='color'><input type='text' id='hsvflat04'></div>");
	}else if(colorG == 6){
		$("#colorArea").html("<div id='setColor00' class='color'><input type='text' id='hsvflat00'></div><div id='setColor01' class='color'><input type='text' id='hsvflat01'></div><div id='setColor02' class='color'><input type='text' id='hsvflat02'></div><div id='setColor03' class='color'><input type='text' id='hsvflat03'></div><div id='setColor04' class='color'><input type='text' id='hsvflat04'></div><div id='setColor05' class='color'><input type='text' id='hsvflat05'></div>");
    }else if(colorG == 7){
		$("#colorArea").html("<div id='setColor00' class='color'><input type='text' id='hsvflat00'></div><div id='setColor01' class='color'><input type='text' id='hsvflat01'></div><div id='setColor02' class='color'><input type='text' id='hsvflat02'></div><div id='setColor03' class='color'><input type='text' id='hsvflat03'></div><div id='setColor04' class='color'><input type='text' id='hsvflat04'></div><div id='setColor05' class='color'><input type='text' id='hsvflat05'></div><div id='setColor06' class='color'><input type='text' id='hsvflat06'></div>");
    }else if(colorG == 8){
		$("#colorArea").html("<div id='setColor00' class='color'><input type='text' id='hsvflat00'></div><div id='setColor01' class='color'><input type='text' id='hsvflat01'></div><div id='setColor02' class='color'><input type='text' id='hsvflat02'></div><div id='setColor03' class='color'><input type='text' id='hsvflat03'></div><div id='setColor04' class='color'><input type='text' id='hsvflat04'></div><div id='setColor05' class='color'><input type='text' id='hsvflat05'></div><div id='setColor06' class='color'><input type='text' id='hsvflat06'></div><div id='setColor07' class='color'><input type='text' id='hsvflat07'></div>");
    }else if(colorG == 9){
		$("#colorArea").html("<div id='setColor00' class='color'><input type='text' id='hsvflat00'></div><div id='setColor01' class='color'><input type='text' id='hsvflat01'></div><div id='setColor02' class='color'><input type='text' id='hsvflat02'></div><div id='setColor03' class='color'><input type='text' id='hsvflat03'></div><div id='setColor04' class='color'><input type='text' id='hsvflat04'></div><div id='setColor05' class='color'><input type='text' id='hsvflat05'></div><div id='setColor06' class='color'><input type='text' id='hsvflat06'></div><div id='setColor07' class='color'><input type='text' id='hsvflat07'></div><div id='setColor08' class='color'><input type='text' id='hsvflat08'></div>");
    }else if(colorG == 10){
		$("#colorArea").html("<div id='setColor00' class='color'><input type='text' id='hsvflat00'></div><div id='setColor01' class='color'><input type='text' id='hsvflat01'></div><div id='setColor02' class='color'><input type='text' id='hsvflat02'></div><div id='setColor03' class='color'><input type='text' id='hsvflat03'></div><div id='setColor04' class='color'><input type='text' id='hsvflat04'></div><div id='setColor05' class='color'><input type='text' id='hsvflat05'></div><div id='setColor06' class='color'><input type='text' id='hsvflat06'></div><div id='setColor07' class='color'><input type='text' id='hsvflat07'></div><div id='setColor08' class='color'><input type='text' id='hsvflat08'></div><div id='setColor09' class='color'><input type='text' id='hsvflat09'></div>");
    }else if(colorG == 11){
		$("#colorArea").html("<div id='setColor00' class='color'><input type='text' id='hsvflat00'></div><div id='setColor01' class='color'><input type='text' id='hsvflat01'></div><div id='setColor02' class='color'><input type='text' id='hsvflat02'></div><div id='setColor03' class='color'><input type='text' id='hsvflat03'></div><div id='setColor04' class='color'><input type='text' id='hsvflat04'></div><div id='setColor05' class='color'><input type='text' id='hsvflat05'></div><div id='setColor06' class='color'><input type='text' id='hsvflat06'></div><div id='setColor07' class='color'><input type='text' id='hsvflat07'></div><div id='setColor08' class='color'><input type='text' id='hsvflat08'></div><div id='setColor09' class='color'><input type='text' id='hsvflat09'></div><div id='setColor10' class='color'>");
    }else if(colorG == 12){
		$("#colorArea").html("<div id='setColor00' class='color'><input type='text' id='hsvflat00'></div><div id='setColor01' class='color'><input type='text' id='hsvflat01'></div><div id='setColor02' class='color'><input type='text' id='hsvflat02'></div><div id='setColor03' class='color'><input type='text' id='hsvflat03'></div><div id='setColor04' class='color'><input type='text' id='hsvflat04'></div><div id='setColor05' class='color'><input type='text' id='hsvflat05'></div><div id='setColor06' class='color'><input type='text' id='hsvflat06'></div><div id='setColor07' class='color'><input type='text' id='hsvflat07'></div><div id='setColor08' class='color'><input type='text' id='hsvflat08'></div><div id='setColor09' class='color'><input type='text' id='hsvflat09'></div><div id='setColor10' class='color'><input type='text' id='hsvflat10'></div><div id='setColor11' class='color'>");
    }else if(colorG == 13){
		$("#colorArea").html("<div id='setColor00' class='color'><input type='text' id='hsvflat00'></div><div id='setColor01' class='color'><input type='text' id='hsvflat01'></div><div id='setColor02' class='color'><input type='text' id='hsvflat02'></div><div id='setColor03' class='color'><input type='text' id='hsvflat03'></div><div id='setColor04' class='color'><input type='text' id='hsvflat04'></div><div id='setColor05' class='color'><input type='text' id='hsvflat05'></div><div id='setColor06' class='color'><input type='text' id='hsvflat06'></div><div id='setColor07' class='color'><input type='text' id='hsvflat07'></div><div id='setColor08' class='color'><input type='text' id='hsvflat08'></div><div id='setColor09' class='color'><input type='text' id='hsvflat09'></div><div id='setColor10' class='color'><input type='text' id='hsvflat10'></div><div id='setColor11' class='color'><input type='text' id='hsvflat11'></div><div id='setColor12' class='color'>");
    }else if(colorG == 14){
		$("#colorArea").html("<div id='setColor00' class='color'><input type='text' id='hsvflat00'></div><div id='setColor01' class='color'><input type='text' id='hsvflat01'></div><div id='setColor02' class='color'><input type='text' id='hsvflat02'></div><div id='setColor03' class='color'><input type='text' id='hsvflat03'></div><div id='setColor04' class='color'><input type='text' id='hsvflat04'></div><div id='setColor05' class='color'><input type='text' id='hsvflat05'></div><div id='setColor06' class='color'><input type='text' id='hsvflat06'></div><div id='setColor07' class='color'><input type='text' id='hsvflat07'></div><div id='setColor08' class='color'><input type='text' id='hsvflat08'></div><div id='setColor09' class='color'><input type='text' id='hsvflat09'></div><div id='setColor10' class='color'><input type='text' id='hsvflat10'></div><div id='setColor11' class='color'><input type='text' id='hsvflat11'></div><div id='setColor12' class='color'><input type='text' id='hsvflat13'></div>");
    }else if(colorG == 1){
		$("#setColor01,#setColor02,#setColor03,#setColor04,#setColor05").remove();		
    }

    $("#hsvflat00").ColorPickerSliders({
			 //背景のメインカラー
			color: bgcolor,
			placement: 'right',
			sliders: false,
			swatches: false,
			hsvpanel: true,
			hsl: 1,
			onchange: function(container, color) {
						var span = $(".st0");
						span.css("fill", color.tiny.toRgbString());
						$("#colorNumber00").html(color.tiny.toRgbString());
			}
		});
		
		$("#hsvflat01").ColorPickerSliders({
		color: c01,
		placement: 'right',
        sliders: false,
        swatches: false,
        hsvpanel: true,
         hsl: 1,
		onchange: function(container, color) {
                    var span = $(".st1");
                    span.css("fill", color.tiny.toRgbString());
					$("#colorNumber01").html(color.tiny.toRgbString());
		}
	});
		
		//SVGのサブカラー
	 $("#hsvflat02").ColorPickerSliders({
		 color: c02,
		 placement: 'right',
		 sliders: false,
		 swatches: false,
		 hsvpanel: true,
         hsl: 1,
		onchange: function(container, color) {
                    var span = $(".st2");
                    span.css("fill", color.tiny.toRgbString());
					$("#colorNumber02").html(color.tiny.toRgbString());
		}
	});
	

	 $("#hsvflat03").ColorPickerSliders({
		 color: c03,
		 placement: 'right',
		 swatches: false,
		 hsvpanel: true,
		 hsl: 1,
		onchange: function(container, color) {
                    var span = $(".st3");
                    span.css("fill", color.tiny.toRgbString());
					$("#colorNumber03").html(color.tiny.toRgbString());
		}
	});
	
	 $("#hsvflat04").ColorPickerSliders({
		 color: c04,
		 placement: 'right',
		 sliders: false,
		 swatches: false,
		 hsvpanel: true,
		 hsl: 1,
		onchange: function(container, color) {
                    var span = $(".st4");
                    span.css("fill", color.tiny.toRgbString());
					$("#colorNumber04").html(color.tiny.toRgbString());
		}
	});	

	$("#hsvflat05").ColorPickerSliders({
		color: c05,
        placement: 'right',
        sliders: false,
        swatches: false,
        hsvpanel: true,
		hsl: 1,
		onchange: function(container, color) {
                    var span = $(".st5");
                    span.css("fill", color.tiny.toRgbString());
					$("#colorNumber05").html(color.tiny.toRgbString());
		}
	});
    $("#hsvflat06").ColorPickerSliders({
		color: c06,
        placement: 'right',
        sliders: false,
        swatches: false,
        hsvpanel: true,
		hsl: 1,
		onchange: function(container, color) {
                    var span = $(".st6");
                    span.css("fill", color.tiny.toRgbString());
					$("#colorNumber06").html(color.tiny.toRgbString());
		}
	});	
    $("#hsvflat07").ColorPickerSliders({
		color: c07,
        placement: 'right',
        sliders: false,
        swatches: false,
        hsvpanel: true,
		hsl: 1,
		onchange: function(container, color) {
                    var span = $(".st7");
                    span.css("fill", color.tiny.toRgbString());
					$("#colorNumber07").html(color.tiny.toRgbString());
		}
	});	
    $("#hsvflat08").ColorPickerSliders({
		color: c08,
        placement: 'right',
        sliders: false,
        swatches: false,
        hsvpanel: true,
		hsl: 1,
		onchange: function(container, color) {
                    var span = $(".st8");
                    span.css("fill", color.tiny.toRgbString());
					$("#colorNumber08").html(color.tiny.toRgbString());
		}
	});
     $("#hsvflat09").ColorPickerSliders({
		color: c09,
        placement: 'right',
        sliders: false,
        swatches: false,
        hsvpanel: true,
		hsl: 1,
		onchange: function(container, color) {
                    var span = $(".st9");
                    span.css("fill", color.tiny.toRgbString());
					$("#colorNumber09").html(color.tiny.toRgbString());
		}
	});	
     $("#hsvflat10").ColorPickerSliders({
		color: c10,
        placement: 'right',
        sliders: false,
        swatches: false,
        hsvpanel: true,
		hsl: 1,
		onchange: function(container, color) {
                    var span = $(".st10");
                    span.css("fill", color.tiny.toRgbString());
					$("#colorNumber10").html(color.tiny.toRgbString());
		}
	});	
     $("#hsvflat11").ColorPickerSliders({
		color: c11,
        placement: 'right',
        sliders: false,
        swatches: false,
        hsvpanel: true,
		hsl: 1,
		onchange: function(container, color) {
                    var span = $(".st11");
                    span.css("fill", color.tiny.toRgbString());
					$("#colorNumber11").html(color.tiny.toRgbString());
		}
	});
	$("#hsvflat12").ColorPickerSliders({
		color: c12,
        placement: 'right',
        sliders: false,
        swatches: false,
        hsvpanel: true,
		hsl: 1,
		onchange: function(container, color) {
                    var span = $(".st12");
                    span.css("fill", color.tiny.toRgbString());
					$("#colorNumber12").html(color.tiny.toRgbString());
		}
	});
	$("#hsvflat13").ColorPickerSliders({
		color: c13,
        placement: 'right',
        sliders: false,
        swatches: false,
        hsvpanel: true,
		hsl: 1,
		onchange: function(container, color) {
                    var span = $(".st13");
                    span.css("fill", color.tiny.toRgbString());
					$("#colorNumber13").html(color.tiny.toRgbString());
		}
	});	 
	$("#hsvflat14").ColorPickerSliders({
		color: c14,
        placement: 'right',
        sliders: false,
        swatches: false,
        hsvpanel: true,
		hsl: 1,
		onchange: function(container, color) {
                    var span = $(".st14");
                    span.css("fill", color.tiny.toRgbString());
					$("#colorNumber14").html(color.tiny.toRgbString());
		}
	});	 

    
}
	


$(function(){
	setTimeout("height_naoshi()", 100);
});



function height_naoshi(){
    
    hhh = $(".single svg").height();    

        if(hhh > 530){
            
           $("ul#size li:nth-child(5)").click();
            
            
    }

}


