$(function() {
    $("input.text").focus();
    $("input.text").on("keydown", function(e) {
        var keyUniCode   = e.keyCode || e.which,
            keyText      = e.key || e.code;

        $(this).val($(this).val().slice(0,1));
        $(".input .result").html(keyUniCode);
        $(".options .key-code .code").html(keyUniCode);
        $(".options .key-name .name").html(keyText);

        //Special Cases for some Keys
        if($(".options .key-code .code").html() == "32") {
            $(".options .key-name .name").html("Space");
        }

        if(keyUniCode == 18 || keyUniCode == 122 || keyUniCode == 120 || keyUniCode == 117 || keyUniCode == 116 || keyUniCode == 114 || keyUniCode == 112 || keyUniCode == 123 || keyUniCode == 121 || keyUniCode == 9) {
            e.preventDefault();
        }

                
    });

    $("body, html").on("click", function(){
        $("input.text").focus();
    });

    $(".options .code, .options .name").on("click", function() {

        var text     = $(this).text();
            copySpan = $("." + $(this).data("copy"));

        $("input.copy").val(text).select();
        document.execCommand("Copy");
        
        copySpan.animate({
            left: 0
        }, 600, function(){
            copySpan.delay(800).animate({
                left: "-100%"
            }, 600); 
        });

    });
})
