import jQuery from 'jquery';
window.$ = jQuery;

jQuery(document).ready(function ($) {
  (function initPlayVideo() {
    var $videoCover = $('.how-made__video-cover');
    var $videoPlayerIframe = $('.how-made__division iframe');

    $videoCover.on('click', function () {
      $videoCover.fadeOut();
      $videoPlayerIframe[0].src += '&autoplay=1';
    });
  })();
});
