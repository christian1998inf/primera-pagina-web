$(document).ready(function(){
  //ocultar
    $('.fotos').hide();

  $('.dropdown-item').click(function(){
    var comun = $(this).attr('category');
    console.log(comun);


    $('.fotos').hide();
    //mostrar
      $('.fotos[category="'+comun+'"]').show();
        $('.fotos[tipo="'+comun+'"]').show();
        $('.fotos[tipoi="'+comun+'"]').show();
        

  });
  var texto, padre;
$(".contenido").each(function(){
    texto = $(this).html();
    this.setAttribute("data-texto", texto);
    if ($(this).html().length > 75){
        $(this)
            .html(texto.substr(0, 75) + "...")
            .append($("<label class = 'mas text-danger'>Ver más</label>"));
    }
});

$(".mas").on("click", function(){
    padre = $(this).parent();
    texto = padre.data("texto");
    $(padre)
        .html(texto)
        .css({
            width: "100%",
            height: "5rem"
        });
});
$('.chat-button').click(function(){
    $('.chat-content').toggle("fast");
});
});
