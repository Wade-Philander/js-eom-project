$(document).ready(function(){
    $(window).scroll(function(){
        if(this.scrollY > 20){
            $(".navbar").addClass("sticky");
        }else{
            $(".navbar").removeClass("sticky");
        }
    })
    $(".menu-btn").click(function(){
        $(".navbar .menu").toggleClass("active");
        $(".menu-btn i").toggleClass("active");
    });
});

const spans = document.querySelectorAll('text1')
spans.forEach(span => span.addEventListener('mouseover',function(e){
    span.classList.add('animated','rubberBand')
}))
spans.forEach(span => span.addEventListener('mouseout',function(e){
    span.classList.remove('animated','rubberBand')
}))

const htmlBar = document.querySelector('.bar-html')
const cssBar = document.querySelector('.bar-css')
const jsBar = document.querySelector('.bar-js')
const pyBar = document.querySelector('.bar-py')
const cBar = document.querySelector('.bar-c')

var tl = new TimelineLite();

tl.fromTo(htmlBar), .75, {width: 'calc(0% - 6px)'},{width: 'calc(90% - 6px)' ,ease: Power4.easeOut}
    .fromTo(cssBar, .75, {width: 'calc(0% - 6px)'},{width: 'calc(85% - 6px)' ,ease: Power4.easeOut})
    .fromTo(jsBar, .75, {width: 'calc(0% - 6px)'},{width: 'calc(70% - 6px)' ,ease: Power4.easeOut})
    .fromTo(pyBar, .75, {width: 'calc(0% - 6px)'},{width: 'calc(80% - 6px)' ,ease: Power4.easeOut})
    .fromTo(cBar, .75, {width: 'calc(0% - 6px)'},{width: 'calc(35% - 6px)' ,ease: Power4.easeOut})

const controller = new ScrollMagic.controller()
const scene = new ScrollMagic.Scene({
    triggerElement: 'skills',
    triggerHook: 0
})
.setTween(tl)
.addTo(controller)