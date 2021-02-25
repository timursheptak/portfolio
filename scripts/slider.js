$(document).ready(function() {
  $('.slider', $(this)).slick({
    arrows:true,
    dots:false,
    adaptiveHeight:false,
    slidesToShow:1,
    draggable:true,
    focusOnSelect: false,
    accessibility: false,
    variableWidth: true,
    autoplay:true,
    centerMode:true,
    appendArrows:$('.arrow__buttons'),
    prevArrow: '<button type="button" class="slick-prev">&#8592;</button>',
    nextArrow: '<button type="button" class="slick-next">&#8594;</button>'
  })
});
