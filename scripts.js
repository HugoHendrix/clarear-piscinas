
// MENU MOBILE
$(document).ready(function () {
    var mobileMenuToggle = $('.mobile-menu-toggle');
    var mobileMenu = $('.mobile-menu');
    var container = $('.container.full.row-menu');
    var fechaMenu = $('.mobile-menu-close');

    mobileMenuToggle.click(function () {
        container.css('marginRight', mobileMenu.css('right') === '0px' ? '0' : '300px');
        mobileMenu.css('right', mobileMenu.css('right') === '0px' ? '-300px' : '0');
    });

    function fechamenu() {
        if (mobileMenu.css('right') === '0px') {
            container.css('marginRight', '0');
            mobileMenu.css('right', '-300px');
        }
    }

    $(document).on('click', function (event) {
        var target = $(event.target);

        // Fecha o menu se o clique não estiver dentro do menu ou do botão de alternância
        if (!target.closest('.mobile-menu, .mobile-menu-toggle').length) {
            fechamenu();
        }
    });

    fechaMenu.click(fechamenu);

    mobileMenu.click(function (event) {
        event.stopPropagation();
    });
});


$(document).ready(function(){
    $("#owl-depoimentos").owlCarousel({
      loop: true,
      margin: 10,
      nav: true,
      autoplay: true,
      autoplayTimeout: 5000,
      autoplayHoverPause: true,
      responsive: {
          0: {
              items: 1
          },
          600: {
              items: 1
          },
          1000: {
              items: 2
          }
      }
    });
  });
  