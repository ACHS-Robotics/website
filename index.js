var tl=gsap.timeline(); 
tl.from("#robot-background",{
    webkitFilter: 'blur(6px)',filter: 'blur(6px)',duration: 4
});
var tween1=gsap.from(".about-container", {
    opacity:0, y:200, duration: 1, ease: "power1" 
});
var tween2=gsap.from(".first-container", {
    opacity:0, x:-200, duration: 1, ease: "power1" 
});
var controller=new ScrollMagic.Controller();
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
/*function that pulls down the dropdown*/
var dropdown=gsap.timeline();
dropdown.paused(true);
dropdown.from("nav ul li ul",{
    y:-20, duration:1, ease:"power1"
});
dropdown.to("nav ul li ul",{
    display:"block", duration:1, opacity:1
},"-=1");
/*function that pulls up the dropdown*/
var pullup=gsap.timeline();
pullup.paused(true);
pullup.to("nav ul li ul",{
    y:-20, duration:0.5, ease:"power1"
});
pullup.to("nav ul li ul",{
    display:"none", opacity:0, duration:0.5
});
/*toggles if it is up or down*/
var extendedDown=false;
function toggleNavbarRight(){
    if(extendedDown){
        pullup.play(0);
        console.log("pullup");
    }else{
        console.log("dropdown");
        dropdown.play(0);
    }
}
const navbarRight= document.querySelector(".memory-pulldown");
navbarRight.addEventListener("click",(e)=>{
    if(dropdown.isActive()||pullup.isActive()){
        e.preventDefault();
        e.stopImmediatePropagation();
        return false;
    }
    toggleNavbarRight();
    extendedDown=!extendedDown;
    console.log("var is " + extendedDown);
});
