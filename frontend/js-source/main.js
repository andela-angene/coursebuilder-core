$(document).ready(() => {
  $('.button-collapse').sideNav();
  $('.dropdown-button').dropdown();
  $('ul.tabs').tabs();
  $('.collapsible').collapsible();

  $('.awards-carousel').owlCarousel({
    loop: true,
    margin: 10,
    nav: true,
    dots: false,
    navText: ['<i class="ion-ios-arrow-left"></i>', '<i class="ion-ios-arrow-right"></i>'],
    responsive: {
      0: {
        items: 1
      },
      600: {
        items: 2
      },
      1000: {
        items: 4
      }
    }
  });

  $('.how-carousel').owlCarousel({
    loop: true,
    margin: 10,
    nav: true,
    navText: ['<i class="ion-ios-arrow-left"></i>', '<i class="ion-ios-arrow-right"></i>'],
    items: 1
  });


  function showPage(pageName) {
    $('.page-wrapper').hide();
    $(`#${pageName}`).show();
  }

  const pageLinks = ['explorer',
    'certification',
    'homepage',
    'tools',
    'partners',
    'feedback',
    'faqs'];

  pageLinks.forEach((name) => {
    $(`a[href="#!${name}"]`).on('click', () => {
      showPage(name);
    });

    if (window.location.href.substr(-name.length) === name) {
      showPage(name);
    }
  });

  $('select').material_select();

  $('.faq-switch').on('click', (e) => {
    const contentDiv = `#${$(e.target).data('switch')}`;
    $('#mainContent').fadeOut(300, () => {
      $(contentDiv).fadeIn();
    });
  });

  $('.faq-collapsible-back').on('click', (e) => {
    $(e.target).closest('.faq-collapsible').fadeOut(300, () => {
      $('#mainContent').fadeIn();
    });
  });
});