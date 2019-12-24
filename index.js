var tl=gsap.timeline(); 
var controller=new ScrollMagic.Controller();
tl.from("#robot-background",{
    webkitFilter: 'blur(6px)',filter: 'blur(6px)',duration: 4
});
tl.to("#cam-logo-picture",{
    opacity:0.75, duration:3, ease: "power1",y:-5
},"-=3");
var tween1=gsap.from(".about-container", {
    opacity:0, y:200, duration: 1, ease: "power1" 
});
var tween2=gsap.from(".first-container", {
    opacity:0, x:-200, duration: 1, ease: "power1" 
});
var scene=new ScrollMagic.Scene({
      triggerElement:".about-container",
      triggerHook: 1
   })
  .setTween(tween1)
  .addIndicators()
  .addTo(controller);

var scene=new ScrollMagic.Scene({
    triggerElement:".first-container",
    triggerHook: 0.5
 })
.setTween(tween2)
.addIndicators()
.addTo(controller);