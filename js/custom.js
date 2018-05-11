(function () {
  
  var wow = new WOW(
    {
      mobile: false,
    }
  );
  wow.init();
  
  var $grid = $('.grid').imagesLoaded( function() {
    $grid.masonry({
      itemSelector: '.grid-item',
      percentPosition: true,
      columnWidth: '.grid-sizer'
    }); 
  });

}());