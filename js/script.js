
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
});
