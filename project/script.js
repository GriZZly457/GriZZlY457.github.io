$(window).load(function() {    
        var wind        = $(window),
            $b-g              = $("#b-g"),
            aspectRatio      = $b-g.width() / $b-g.height();
        function resizeBg() {
                if ( (wind.width() / wind.height()) < aspectRatio ) {
                    $b-g
                        .removeClass()
                        .addClass('b-g-h');
                } else {
                    $b-g
                        .removeClass()
                        .addClass('b-g-w');
                }
        }
        wind.resize(function() {
                resizeBg();
        }).trigger("resize");
});