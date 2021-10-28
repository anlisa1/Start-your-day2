$(".hidden").hide();

$(".daystart").click(function(){
	$(".wokeup").show();
    $(".daystart").hide();
});
 
$(".wokeup").click(function(){
    $(".hidden").hide();
    $(".breakfast").show();
    
    $("button").hover(function(){
	$("body").css("background-color","black");
});
    
$("button").mouseout(function(){
	$("body").css("background-color","blue");
});
    
});

//the choices start here

$("#breakeat").click(function(){
    $(".hidden").hide();
    $(".workc").show();
});

$("#pet").click(function(){
    $(".hidden").hide();
    $(".C0").show();
});

$(".C0").click(function(){
    $(".hidden").hide();
    $(".C1").show();
});

$(".C1").click(function(){
    $(".hidden").hide();
    $(".C2").show();
});

$(".C2").click(function(){
    $(".hidden").hide();
    $(".C3").show();
});

$(".C3").click(function(){
    $(".hidden").hide();
    $("body").css("background-color","#73f573");
    $(".HE").show();
    $(".home").show();
});
//This is the ending of eating breakfast and petting the cat.

$("#breakskip").click(function(){
    $(".hidden").hide();
    $(".workb").show();
});

$("#help").click(function(){
    $(".hidden").hide();
    $(".b0").show();
});

$(".b0").click(function(){
    $(".hidden").hide();
    $(".b1").show();
});

$(".b1").click(function(){
    $(".hidden").hide();
    $(".b2").show();
});

$(".b2").click(function(){
    $(".hidden").hide();
    $(".b3").show();
});

$(".b3").click(function(){
    $(".hidden").hide();
    $(".b4").show();
});

$(".b4").click(function(){
    $(".hidden").hide();
    $("body").css("background-color","#73f573");
    $(".HE").show();
    $(".home").show();
});
//the ending of help boy no breakfast
// the start of breakfast and cat avoidance, I already did the help boy and pet cat story routes.

$("#notpet").click(function(){
    $(".hidden").hide();
    $(".full").show();
});
$(".full").click(function(){
    $(".hidden").hide();
    $(".stall").show();
});
$("#stalleat").click(function(){
    $(".hidden").hide();
    $(".d1").show();
});
$(".d1").click(function(){
    $(".hidden").hide();
    $("body").css("background-color","red");
    $(".BE").show();
    $(".home").show();
});
// no breakfast no pet cat eat lunch in stall ending

//no pet cat + no lunch = extra bad luck
$("#stallskip").click(function(){
    $(".hidden").hide();
    $(".ditch").show();
});
$("#scream").click(function(){
    $(".hidden").hide();
    $(".ds0").show();
});
$(".ds0").click(function(){
    $(".hidden").hide();
    $("body").css("background-color","#cccbb8");
    $(".NE").show();
    $(".home").show();
});
$("#cry").click(function(){
    $(".hidden").hide();
    $(".dc0").show();
});
$(".dc0").click(function(){
    $(".hidden").hide();
    $(".dc1").show();
});

$(".dc1").click(function(){
    $(".hidden").hide();
    $("body").css("background-color","#73f573");
    $(".HE").show();
    $(".home").show();
});
//the pet or no pet route is done since cry and scream is done, time for don't help boy

$("#donthelp").click(function(){
    $(".hidden").hide();
    $(".hungry").show();
});

$(".hungry").click(function(){
    $(".hidden").hide();
    $(".canteen").show();
});

$("#canteenskip").click(function(){
    $(".hidden").hide();
    $(".f0").show();
});

$(".f0").click(function(){
    $(".hidden").hide();
    $(".f1").show();
});
$(".f1").click(function(){
    $(".hidden").hide();
    $(".f2").show();
});
$(".f2").click(function(){
    $(".hidden").hide();
    $("body").css("background-color","#cccbb8");
    $(".NE").show();
    $(".home").show();
});
//another ending, next is you skip breakfast, boy and eat lunch
$("#canteeneat").click(function(){
    $(".hidden").hide();
    $(".k0").show();
});

$(".k0").click(function(){
    $(".hidden").hide();
    $(".k1").show();
});

$("#police").click(function(){
    $(".hidden").hide();
    $(".z0").show();
});
$(".z0").click(function(){
    $(".hidden").hide();
    $(".z1").show();
});
$(".z1").click(function(){
    $(".hidden").hide();
    $(".z2").show();
});
$(".z2").click(function(){
    $(".hidden").hide();
    $(".z3").show();
});
$(".z3").click(function(){
    $(".hidden").hide();
    $("body").css("background-color","red");
    $(".BE").show();
    $(".home").show();
});
//What will happen if you run home.......
$("#home").click(function(){
    $(".hidden").hide();
    $(".k3").show();
});
$(".k3").click(function(){
    $(".hidden").hide();
    $("body").css("background-color","red");
    $(".BE").show();
    $(".home").show();
});

//home button
$(".home").click(function(){
    $(".hidden").hide();
    $(".daystart").show();
    $("body").css("background-color","blue");
});