// Add your custom JavaScript for storefront pages here.
var isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ? true : false;
!function(a){a.fn.equalHeights=function(){var b=0,c=a(this);return c.each(function(){var c=a(this).innerHeight();c>b&&(b=c)}),c.css("height",b)},a("[data-equal]").each(function(){var b=a(this),c=b.data("equal");b.find(c).equalHeights()})}(jQuery);
$('body').addClass('loaded');
if($('.page--home').length){
    //mosaico principal
    if(isMobile){
        
    }else{
        $('#alpix .page--home > .sections > .banners-grid:first-child .col-12:nth-child(2) > .banner').appendTo('#alpix .page--home > .sections > .banners-grid:first-child .col-12:nth-child(1)');
        $('#alpix .page--home > .sections > .banners-grid:first-child .col-12:nth-child(2)').remove();
        $('#alpix .page--home > .sections > .banners-grid:first-child .col-12:nth-child(1)').toggleClass('col-lg-4 col-lg-auto');
        $('#alpix .page--home > .sections > .banners-grid:first-child .col-12:nth-child(2)').toggleClass('col-lg-4 col-lg-auto');
        
    }
    //blocos categorias
    $('#alpix .page--home > .sections > .banners-grid:not(:first-child) .col-12').attr('class','col-12 col-md-auto px-1 py-1');
    $('#alpix .page--home > .sections > .banners-grid:not(:first-child) .row').addClass('justify-content-center align-items-center mx-0');

    

    $('#alpix .banners-grid').each(function(){
        if($(this).find('.col-12').length == 3){
            $(this).addClass('mosaico-footer');
            let i = $('<div class="row align-items-bottom"><div class="col-12 col-md-6">'+ getHTML($(this).find('.col-12:nth-child(1) .banner'))+'</div><div class="col-12 col-md-6">'+ getHTML($(this).find('.col-12:nth-child(2) .banner'))+''+ getHTML($(this).find('.col-12:nth-child(3) .banner'))+'</div></div>');
            $(this).find('.row').empty().append(i);
        }
    })

    $('#alpix .page--home > .sections > .banners-grid:not(:first-child):not(.mosaico-footer) a').each(function(){
        let title = $(this).find('img').attr('alt');
        $(this).append('<label class="floating-title">'+ title +'</label>');
    });
    
}
$('.toggleMenu').click(function(){
    $('.menu__').toggleClass('visible');
})

if(isMobile){
    $('.menu__ .dropdown > span > a').click(function(e){
        e.preventDefault();
        $(this).closest('li').toggleClass('open');
    });    
}
$('.menu__ .dropdown .dx-caret').click(function(){
    $(this).closest('li').toggleClass('open');
});
$('.menu__ .dropdown .btn-back button').click(function(){
    $(this).closest('.dropdown').removeClass('open');
});

if($('.product-card').length){
    $('#alpix .product-card__name, #alpix .product_list_adjust').equalHeights();
}
$('#alpix .header__search-input').keyup(function(){
    $('body .search__input').val($(this).val()).[0].dispatchEvent(new Event('input'));
});

$('body').click(function(e){
    if($(e.target).closest('.header__search').length == 0){
        $('#instant-search .search__status .close').click();
    }
});

$('body').on('click','.product__kit button', function(){
    var qtd = 0;
    var max = parseInt($('[name="maxQtdKit"]').val());
    var me = $(this)
    $('.product__kit .quantity-selector__input').each(function(){
        qtd = qtd + parseInt($(this).val());
    });
    if(qtd == max){
        $('#alpix .page--products .quantity-selector__buy button.btn').addClass('shake');
        setTimeout(function(){ $('#alpix .page--products .quantity-selector__buy button.btn').removeClass('shake'); }, 1000);
        $('.product__kit .quantity-selector__input + button').addClass('disabled');
    }else{
        $('#alpix .page--products .quantity-selector__buy button.btn').removeClass('disabled');
        $('.product__kit .quantity-selector__input + button').removeClass('disabled');
    }
});


// $('[name="mc-embedded-subscribe-form"]').submit(function(e){
//     e.preventDefault();

//     var xhr = new XMLHttpRequest();

//     var form = document.getElementById('mc-embedded-subscribe-form');
//     var actionPath = form.getAttribute("action");
//     var formData = new FormData(form);

    
//     xhr.open("POST", actionPath);
//     xhr.send(formData); 

//     // $.ajax({
//     //     type: $(this).attr('method'),
//     //     url: $(this).attr('action'),
//     //     data: $(this).serialize(),
//     //     cache       : false,
//     //     dataType    : 'json',
//     //     contentType: "application/json; charset=utf-8",
//     //     error       : function(err) { alert("Ocorreu um erro ao se registrar na newsletter. Por favor, tente novamente mais tarde."); },
//     //     success     : function(data) {
//     //         if (data.result != "success") {
//     //             alert('Ops...Aconteceu um erro ao se cadastrar na newsletter.');
//     //         } else {
//     //             alert('Sua inscrição em nossa lista foi confirmada.\nObrigado por se inscrever!');
//     //         }
//     //     }
//     // });
// });

function getHTML(oObj){
    return $('<div></div>').append($(oObj)).html();
}

var instagram_username = '2xicaras';
var instagram_quantity = 6;
var instagram_size = 2;



$(document).ready(function() {
    var obj = new InstagramFeed({
        'username': '2xicaras',
        'container': document.getElementById("instafeed"),
        'display_profile': false,
        'display_biography': false,
        'display_gallery': true,
        'display_captions': false,
        'display_igtv': false,
        'get_raw_json': false,
        'lazy_load':true,
        'callback': null,
        'styling': false,
        'items': 8,
        'items_per_row': 8,
        'margin': 1
    });
})


