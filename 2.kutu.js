 $(document).ready(function(){ 
 $("#islem1").click(function(){
     $("span").css({"backgroundColor":"tomato","color":"white"});   
 });

 $("#islem2").click(function(){
     $("#kutu2").before("<span><u>Yeni<br>Kutu</u></span>");
 });

 $("#islem3").click(function(){ 
    $("#kutu2").after("<span><u>Yeni<br>Kutu</u></span>");
       //after() seçili elemandan sonra içerik ekler
 });

 $("#islem4").click(function(){
     $("#cerceve").prepend("<span><u>Yeni<br>Kutu</u></span>");
     //prend() seçili elemanın başına içerik ekler
 });

 $("#islem5").click(function(){ 
    $("#cerceve").append("<span><u>Yeni<br>Kutu</u></span>");
    //apppend() seçili elemaın sonuna içerik ekler
 });

 $("#islem6").click(function(){ 
    $("#kutu4").empty();
 });
 
 $("#islem7").click(function(){ 
    $("#kutu4").remove();
 });
});