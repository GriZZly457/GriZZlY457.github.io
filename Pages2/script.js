$('.main-slider').flickity({
  // options
  cellSelector: '.slide',
  cellAlign: 'left',
  contain: true,
  wrapAround: true,
  autoPlay: 2000,
  pauseAutoPlayOnHover: false
});

$('.new-people-slider').flickity({
	//options
	cellSelector:'.human-slides',
	cellAlign: "left",
	groupCells: "2"

})

$('.best-creators-slider').flickity({
	//options
	cellSelector:'.human-slides',
	cellAlign: "left",

})