
$(function () {
    $.stellar({
        horizontalScrolling: false,
        verticalOffset: 50
    });

    $("#toggle").click(function(){
        
       if( $("#navigation").hasClass("hidden")){
        $("#navigation").removeClass("hidden")
       }else{
        $("#navigation").addClass("hidden")
       }

        return false;
    });

    new TypeIt("#heroTyper", {
        speed: 75,
        loop: true,
        waitUntilVisible: true,
        cursorChar: '_'
      })
        .type("reliable solutions", {delay: 1500}).move(-10).delete(-8)
        .type("ingenious", {delay: 1500}).delete(-9)
        .type("cutting edge", {delay: 1500}).delete(-12)
        .type("scalable", {delay: 1500}).delete(-8)
        .type("innovative", {delay: 5000})
        .go();
});
