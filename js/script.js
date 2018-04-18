// $(function () {
//     var carouselList = $('#carousel ul');

//     var time;
//     startNewInterval();

//     function changeSlide() {
//         carouselList.animate({ 'marginLeft': -400 }, 500, moveFirstSlide);
//     };
//     function changeSlideRight () {
//         carouselList.animate({'marginLeft': 0 }, 500, moveLastSlide);
//     };

//     function moveFirstSlide() {
//         stopInterval();
//         var firstItem = carouselList.find('li:first');
//         var lastItem = carouselList.find('li:last');
//         lastItem.after(firstItem);
//         carouselList.css({ marginLeft: 0 });
//         startNewInterval();
//     };

//     function moveLastSlide() {
//         stopInterval();
//         var firstItem = carouselList.find('li:first');
//         var lastItem = carouselList.find('li:last');
//         firstItem.before(lastItem);
//         carouselList.css({ marginLeft: -400});
//         startNewInterval();
//     }; 
    
//     function startNewInterval () {
//         time = setInterval(changeSlide, 3000); 
//     }

//     function stopInterval () {
//         clearInterval(time);
//     }

//     $('#js-leftButton').click(function () { changeSlide() });
//     $('#js-rightButton').click(function() { changeSlideRight() }); 

// //DO wtyczki jquery Slick 
//     //$('#your-class').slick();  

// });

$(document).ready(function(){

        var carouselList = $('#carousel ul');

    var time;
    startNewInterval();

    function changeSlide() {
        carouselList.animate({ 'marginLeft': -400 }, 500, moveFirstSlide);
    };
    function changeSlideRight () {
        carouselList.animate({'marginLeft': 0 }, 500, moveLastSlide);
    };

    function moveFirstSlide() {
        stopInterval();
        var firstItem = carouselList.find('li:first');
        var lastItem = carouselList.find('li:last');
        lastItem.after(firstItem);
        carouselList.css({ marginLeft: 0 });
        startNewInterval();
    };

    function moveLastSlide() {
        stopInterval();
        var firstItem = carouselList.find('li:first');
        var lastItem = carouselList.find('li:last');
        firstItem.before(lastItem);
        carouselList.css({ marginLeft: -400});
        startNewInterval();
    }; 
    
    function startNewInterval () {
        time = setInterval(changeSlide, 3000); 
    }

    function stopInterval () {
        clearInterval(time);
    }

    $('#js-leftButton').click(function () { changeSlide() });
    $('#js-rightButton').click(function() { changeSlideRight() });


    $('.owl-carousel').owlCarousel({
        loop:true,
        margin:10,
        nav:true,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:3
            },
            1000:{
                items:5
            }
        }
    });
})
