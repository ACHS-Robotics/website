var controller2 = new ScrollMagic.Controller();
new ScrollMagic.Scene({
    triggerElement: ".parallax",
    duration:"200%"
})
.setTween("#robot-background", {
    backgroundPosition:"50% 120%",
    ease: Linear.easeNone
})
.addTo(controller2);