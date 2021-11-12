{
  $(function() {
    // ハンバーガーメニュー
    $('.burger-btn').on('click', function() {
      $('.bar').toggleClass('cross');
      $('.header_nav_container').fadeToggle(500);
    });
    $('.header_nav_container').on('click', function() {
      $('.bar').toggleClass('cross');
      $('.header_nav_container').fadeToggle(500);
    });

    // header背景部分の変化
    var coverHeight = $('.fv').outerHeight();

     $(window).on('load scroll', function() {
       if($(this).scrollTop() < coverHeight) {
          $('header').removeClass('header-back');
       } else {
          $('header').addClass('header-back');
       }
     });

    // TopへのScroll
    $('#top_scroll').click(function() {
       $('body, html').animate({
         scrollTop : 0
       }, 800);
       return false;
     });
  });
}