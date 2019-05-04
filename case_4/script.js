var productCount = 100;
var percentageLimit = 60;

function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }

    return color;
}

for (var k = 0; k < productCount; k++) {
    $('body').append('<div class="product" product-id="' +
        Math.floor(Math.random() * 99999999) +
        '" style="background-color:' + getRandomColor() + ';"></div>');
}

$(window).on('scroll', function () {
    $('.product:not(".seen")').each(function () {
        var that = this;

        if (percentageSeen($(this)) > percentageLimit) {
            $(that).addClass('seen');

            console.log($(that).attr('product-id') || '');
        }
    });
});

function percentageSeen(element) {
    var windowBottom = $(this).scrollTop() + $(this).height();
    var elementTop = element.offset().top;
    var percentage = (windowBottom - elementTop) / element.height() * 100;

    if (windowBottom >= elementTop) {
        return Math.round(percentage);
    }
}

$(window).trigger('scroll');