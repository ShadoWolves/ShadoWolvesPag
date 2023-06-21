// -------TRANSICIÓN---------

$(document).ready(function () {
    $("a").click(function () {
        var gato = this.hash
        $("html, body").animate({
                scrollTop: $(gato).offset().top -10
            },
            100
        )

    })

})

// ---------TOOLTIPS---------
$(function () {
    $('[data-toggle="tooltip"]').tooltip({
        boundary: "window",
        template:
            '<div class="tooltip tooltip-custom" role="tooltip"><div class="arrow"></div><div class="tooltip-inner"></div></div>'
    })
})

