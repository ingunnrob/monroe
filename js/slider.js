<<<<<<< HEAD
=======
$(document).ready(function(){

    $('.superslider').slick({
    infinite: true,
    slidesToShow: 5.04,
    slidesToScroll: 5.0,
    arrows: true,
    responsive: [
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1.1,
        slidesToScroll: 1
      }
    }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]
  });
});




/*
$(function() {

    $("#pips-slider1")

        .slider({

            range: true,
            min: 0,
            max: 10,
            values: [ 4, 10 ],
        	step: 1

        })

        .slider("pips", {

        	first: "label",
        	last: "label",
            rest: "label",
        	step: 1,
        	labels: false,
        	prefix: "",
        	suffix: ""

        })

    	.slider("float", {

        	handle: true,
        	pips: false,
        	labels: false,
        	prefix: "",
        	suffix: ""

    	});


});


$(function() {

    $("#pips-slider2")

        .slider({

            range: true,
            min: 1888,
            max: 2017,
            values: [ 1999, 2017 ],
        	step: 1

        })

        .slider("pips", {

        	first: "label",
        	last: "label",
            rest: "label",
        	step: 1,
        	labels: false,
        	prefix: "",
        	suffix: ""

        })

    	.slider("float", {

        	handle: true,
        	pips: false,
        	labels: false,
        	prefix: "",
        	suffix: ""

    	});


});
*/
>>>>>>> 3a51d0f894bb55be26132cffae157004a05067af

$(function(){
$("#circles-slider")

   .slider({
       min: 0,
       max: 10,
       values: [8, 10],
       range: true,
       step: .5
   })
    .slider("pips");


$(".slider")
   .slider({
       min: 0,
       max: 10,
   })

   .slider("pips", {
       rest: "label",
       step: 1
   })
<<<<<<< HEAD
                           
   
});

 
=======


});
>>>>>>> 7c616ad06fec9bc2b635a4eb478ea8c90b712619
>>>>>>> 3a51d0f894bb55be26132cffae157004a05067af