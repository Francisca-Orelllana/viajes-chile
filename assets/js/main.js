$(function(){

    //Bootstrap JS:

    //1.- Carousel:
    $('.carousel').carousel()

    //2.- Tooltip: 
    $( '[data-toggle="tooltip"]' ).tooltip()


    //Efecto Smooth Scroll: uso de métodos preventDefault y animate:
    $('a').click(function(event){ 
        if (this.hash !== ""){ 
            event.preventDefault(); 
        
            let hash= this.hash; 

            $('html, body').animate({
                scrollTop: $(hash).offset().top 
            }, 800, function (){ 
                window.location.hash = hash; 
            });       
        }
    });

    // Evento dblclick: cambiar el color de los enunciados
    let eventoDobleClick = $('h2')
    eventoDobleClick.dblclick(function(event){
    $(this).css({
            "color":"#17a2b8"
            });
    });
        

    //Método Children: Ocultar y mostrar texto en los cards

    let ocultar = $('.card').children().find('.card-text');
    /* console.log("lo que debo ocultar", ocultar); */

    let textUno = ocultar.eq(0).hide();
    let textDos = ocultar.eq(1).hide();
    let textTres = ocultar.eq(2).hide();
    let textCuatro = ocultar.eq(3).hide();
        
    let mostrar = $('.card').children().find('.btn');
    /* console.log("lo que debo mostrar", mostrar); */

    let boton1 = mostrar.eq(0);
    let boton2 = mostrar.eq(1);
    let boton3 = mostrar.eq(2);
    let boton4 = mostrar.eq(3);

    // Método toggle muestra el texto de los botones
    boton1.click(function(event){
        textUno.toggle('fast');
    });
    boton2.click(function(event){
        textDos.toggle('fast');
    });
    boton3.click(function(event){
        textTres.toggle('fast');
    });
    boton4.click(function(event){
        textCuatro.toggle('fast');
        
    });

    
});