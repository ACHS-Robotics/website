var path = "images/";//var path = "gallery2020/";
var imgsns = ["2020%20Jan%2012/DSC_4167.JPG","2020%20Jan%2012/DSC_4159.JPG","2020%20Jan%2012/DSC_4158.JPG","2020%20Jan%2012/DSC_4151.JPG","2020%20Jan%2012/DSC_4149.JPG","2020%20Jan%2012/DSC_4145.JPG","2020%20Jan%2012/DSC_4141.JPG","2020%20Jan%2012/DSC_4137.JPG","2020%20Jan%2012/DSC_4131.JPG","2020%20Jan%2012/DSC_4124.JPG","2020%20Jan%2012/DSC_4115.JPG","2020%20Jan%2012/DSC_4113.JPG","2020%20Jan%2012/DSC_4110.JPG","2020%20Jan%2012/DSC_4108.JPG","2020%20Jan%2012/DSC_4107.JPG","2020%20Jan%2012/DSC_4105.JPG","2020%20Jan%2012/DSC_4101.JPG","2020%20Jan%2012/DSC_4098.JPG","2020%20Jan%2012/DSC_4095.JPG","2020%20Jan%2012/DSC_4090.JPG","2020%20Jan%2012/DSC_4085.JPG","2020%20Jan%2012/DSC_4080.JPG","2020%20Jan%2012/DSC_4077.JPG","2020%20Jan%2012/DSC_4076.JPG","2020%20Feb%205/IMG_0574.JPG","2020%20Feb%205/IMG_0600.JPG","2020%20Feb%205/IMG_0578.JPG","2020%20Feb%205/IMG_0583.JPG","2020%20Feb%205/IMG_0586.JPG","2020%20Feb%205/IMG_0594.JPG","2020%20Feb%205/IMG_0597.JPG","2020%20Feb%205_1/IMG_0296.JPG","2020%20Feb%205_1/IMG_0132.JPG","2020%20Feb%205_1/IMG_0295.JPG","2020%20Feb%205_1/IMG_0159.JPG","2020%20Feb%205_1/IMG_0161.JPG","2020%20Feb%205_1/IMG_0162.JPG","2020%20Feb%205_1/IMG_0165.JPG","2020%20Feb%205_1/IMG_0293.JPG","2020%20Feb%205_1/IMG_0344.JPG","2020%20Feb%205_1/IMG_0330.JPG","2020%20Feb%205_1/IMG_0346.JPG","2020%20Feb%205_1/IMG_0390.JPG","2020%20Feb%205_1/IMG_0564.JPG","2020%20Feb%205_1/IMG_0567.JPG","2020%20Feb%205_1/IMG_0570.JPG","2020%20Feb%205_1/IMG_0504.JPG","2020%20Feb%205_1/IMG_0551.JPG","2020%20Feb%205_1/IMG_0249.JPG","2020%20Feb%205_1/IMG_0272.JPG","2020%20Feb%205_1/IMG_0354.JPG","2020%20Feb%205_1/IMG_0404.JPG","2020%20Feb%205_1/IMG_0424.JPG","2020%20Feb%205_1/IMG_0452.JPG","2020%20Feb%205_1/IMG_0528.JPG","2020%20Feb%205_1/IMG_0556.JPG","2020%20Feb%205_1/IMG_0562.JPG","2020%20Feb%205_1/IMG_0557.JPG","2020%20Jan%204_1/DSC_4071.JPG","2020%20Jan%204_1/DSC_4066.JPG","2020%20Jan%204_1/DSC_4064.JPG","2020%20Jan%204_1/DSC_4062.JPG","2020%20Jan%204_1/DSC_4059.JPG","2020%20Jan%204_1/DSC_4057.JPG","2020%20Jan%204_1/DSC_4051.JPG","2020%20Jan%204_1/DSC_4050.JPG","2020%20Jan%204_1/DSC_4047.JPG","2020%20Jan%204_1/DSC_4043.JPG","2020%20Jan%204_1/DSC_4042.JPG","2020%20Jan%204_1/DSC_4034.JPG","2020%20Jan%204_1/DSC_4033.JPG","2020%20Jan%204_1/DSC_4031.JPG","2020%20Jan%204_1/DSC_4030.JPG","2020%20Jan%204_1/DSC_4029.JPG","2020%20Jan%204_1/DSC_4028.JPG","2020%20Jan%204_1/DSC_4027.JPG"];
let bigboi = document.getElementById("bigboi");
let bigboiimg = document.getElementById("bigboiimg");
let megaboi = document.getElementById("megaboi");
let left = document.getElementById("left");
let right = document.getElementById("right");
let close = document.getElementById("close");
let newtab = document.getElementById("newtab");
let showing=false;
close_();


let file;//image src
function mediashow(div){
    div.children[0].style.zIndex=0;
    bigboiimg.src = div.children[0].src.replace('_square','');
    bigboiimg.src = div.children[0].src.replace('_thumbs','').replace('_square','');
    bigboi.style.display='block'
    megaboi.style.display='block';
    left.style.display='block'
    right.style.display='block';
    close.style.display='block'
    newtab.style.display='block';
    showing=true;
}

document.onkeydown = function(evt) {
    evt = evt || window.event;
    if (evt.keyCode == 27) {
        close_();
    }
};
function prev(){
    var fn = bigboiimg.src.split('/');
    var ffn = fn[fn.length-2]+'/'+fn[fn.length-1];
    var pos = imgsns.indexOf(ffn);
    if (pos > 0){
        bigboiimg.src = path+imgsns[pos-1];
    }
}
function next(){
    var fn = bigboiimg.src.split('/');
    var ffn = fn[fn.length-2]+'/'+fn[fn.length-1];
    var pos = imgsns.indexOf(ffn);
    if (pos < imgsns.length-1){
        bigboiimg.src = path+imgsns[pos+1];
    }
}
function new_tab(){
    window.open(bigboiimg.src,'_blank');
}
function close_(){
    bigboi.style.display='none'
    megaboi.style.display='none';
    left.style.display='none'
    right.style.display='none';
    close.style.display='none'
    newtab.style.display='none';
    showing=false;
}
megaboi.onclick = function(e){
    if (showing && e.target != bigboi && e.target != left && e.target != right && e.target != newtab && e.target != close){
      close_();
    }
  }
document.onkeydown = function(e) {
  if(showing){
    if(e.key === "Escape") {
        close_();
    }
    if(e.key === "ArrowRight"){
        next();
    }
    if(e.key === "ArrowLeft"){
        prev();
    }
  }
}
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
});