$('.toggle-menu').on('click', function(){
  alert('Just a sample, menu doesn\'t exist');
});

$("body").velocity("transition.slideUpIn", 2500).delay(2200);

$('.car-box').velocity("transition.slideDownIn", { stagger: 150});
