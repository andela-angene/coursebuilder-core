$(document).ready(function documentReady() {
  $(".button-collapse").sideNav();
  $('select').material_select();
  $('.dropdown-button').dropdown();

  $('.course-carousel').owlCarousel({
    loop: false,
    margin: 10,
    nav: true,
    navText: [
      '<i class="material-icons small">chevron_left</i>',
      '<i class="material-icons small">chevron_right</i>'
    ],
    items: 1
  });

  var sidebarToggle = false;
  $('body').on('click', '#hideCourseSidenav', function () {
    sidebarToggle = !sidebarToggle;
    var sidebarWidth = sidebarToggle ? $('.course-accordion').width() : 0;

    $('.course-accordion').toggleClass('hide-sidenav');
    $('.course-card').animate({'margin-left': sidebarWidth / 2 + 'px'}, 300);
    $('.course-accordion').animate({'margin-left': '-' + sidebarWidth + 'px'}, 300);
  });
});
