$(window).scroll(function() {
  var $topPos = $('body').scrollTop();
  $('div.design-tool')
    .css('top', $topPos + 'px');
});


$('.letter-spacing-tool').on('input', function() {
  $('body, h1, h2, h3, h4, h5, h6, div, span, p, a, li, td, article, section, footer, header')
    .css('letter-spacing', $(this).val() + 'em');
  console.log($(this).val());
});
$('.line-height-tool').on('input', function() {
  $('body, h1, h2, h3, h4, h5, h6, div, span, p, a, li, td, article, section, footer, header')
    .css('line-height', $(this).val() + 'em');
  console.log($(this).val());
});
$('.font-size-tool').on('input', function() {
  $('body, h1, h2, h3, h4, h5, h6, div, span, p, a, li, td, article, section, footer, header')
    .css('font-size', $(this).val() + 'em');
  console.log($(this).val());
});
