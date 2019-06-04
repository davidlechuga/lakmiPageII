$("#boton-servicios").click(function(){
   $("#contenedor-servicios-1").show();
   $("#contenedor-servicios-2").hide();
});

$("#boton-fintech").click(function(){
   $("#contenedor-servicios-1").hide();
   $("#contenedor-servicios-2").show();
});

var link = $(".nav .nav-link");
link.on("click", function(e){
   var selector = $(this).attr("href");
   var posicion = $(selector).offset().top;
   $("html, body").animate({scrollTop: posicion}, 2000);
});

