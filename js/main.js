$('.owl-carousel').owlCarousel({
    loop:true,
    margin:30,
    nav:true,
    smartSpeed: 100,
    responsive:{
        0:{
          items: 1,
          slideBy: 1
        },
        480: {
          items: 2,
          slideBy: 2
        },
        768: {
          items: 3,
          slideBy: 3
        },
        992: {
          items: 4,
          slideBy: 4
        }
    }
});

$('.highlight-news-show').slick({
  slidesToShow: 1 ,
  slidesToScroll: 1,
  fade: true,
  arrows: true,
  infinite: true,
  // cssEase: 'linear',
  autoplay: true,
  autoplaySpeed: 2000,
  asNavFor: '.highlight-news-list'
});
$('.highlight-news-list').slick({
  slidesToShow: 5,
  slidesToScroll: 1,
  asNavFor: '.highlight-news-show',
  vertical: true,
  focusOnSelect: true,
});

  var primaryMenu = document.getElementsByClassName('menu-mobile')[0];
  var sportsMenu = document.getElementsByClassName('sports-menu-mobile')[0];
  var page = document.getElementById('page');
  var over = document.getElementById('over');
  var close = document.getElementById('btn-close');
  var dropMenu = $('.drop a');
  var subMenu = $('.submenu-mobile');

  dropMenu.click(function(e) {
    if (!subMenu.hasClass('show')) {
      subMenu.addClass('show');
      e.preventDefault();
    }
  });

function openPrimaryMenu() {
  primaryMenu.classList.add('show');
  page.classList.add('openMenu');
  over.classList.add('show');
  close.classList.add('show');
}
function openSportsMenu() {
  sportsMenu.classList.add('show');
  page.classList.add('openMenu');
  over.classList.add('show');
  close.classList.add('show');
}
function hideMenu() {
  page.classList.remove('openMenu');
  over.classList.remove('show');
  close.classList.remove('show');
  sportsMenu.classList.remove('show');
  primaryMenu.classList.remove('show');
}

// ----------------------------------------------------------------
function showHideLogin() {
  var login = document.getElementById('login-block');
  if ( login.classList.value.includes('show') ) {
    login.classList.remove('show');
  }
  else {
    login.classList.add('show');
  }
}

// ----------------------------------------------------------------
function showChangeSkin() {
    var changeSkin = document.querySelector(`.changeSkin`);
    var skinCog = document.querySelector(`.changeSkin .skin-icon i`)

    if (changeSkin.classList.value.search('show-change-skin') != -1) {
        changeSkin.classList.remove('show-change-skin');
        skinCog.classList.remove('fa-spin');
    }
    else {
        changeSkin.classList.add('show-change-skin');
        skinCog.classList.add('fa-spin');
    }
}