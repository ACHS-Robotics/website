var path = "images/";//var path = "gallery2019/";
var imgsns = ["2019%20Dec%208/IMG_8823.JPG","2019%20Dec%208/IMG_8824.JPG","2019%20Dec%208/IMG_8825.JPG","2019%20Dec%208/IMG_8826.JPG","2019%20Dec%208/IMG_8827.JPG","2019%20Dec%208/IMG_8832.JPG","2019%20Dec%208/IMG_8833.JPG","2019%20Dec%208/IMG_8834.JPG","2019%20Dec%208/IMG_8835.JPG","2019%20Dec%208/IMG_8836.JPG","2019%20Dec%208/IMG_8837.JPG","2019%20Dec%208/IMG_8838.JPG","2019%20Dec%208/IMG_8839.JPG","2019%20Dec%208/IMG_8840.JPG","2019%20Dec%208/IMG_8841.JPG","2019%20Dec%208/IMG_8842.JPG","2019%20Dec%208/IMG_8843.JPG","2019%20Dec%208/IMG_8844.JPG","2019%20Dec%208/IMG_8846.JPG","2019%20Dec%208/IMG_9096.JPG","2019%20Dec%208/IMG_9097.JPG","2019%20Dec%208/IMG_9099.JPG","2019%20Dec%208/IMG_9100.JPG","2019%20Dec%208/IMG_9101.JPG","2019%20Dec%208/IMG_9110.JPG","2019%20Dec%208/IMG_9111.JPG","2019%20Dec%208/IMG_9112.JPG","2019%20Dec%208/IMG_9114.JPG","2019%20Dec%208/IMG_9115.JPG","2019%20Dec%208/IMG_9116.JPG","2019%20Dec%208/IMG_9117.JPG","2019%20Dec%208/IMG_9118.JPG","2019%20Dec%208/IMG_9119.JPG","2019%20Dec%208/IMG_9121.JPG","2019%20Dec%208/IMG_9122.JPG","2019%20Dec%208/IMG_9123.JPG","2019%20Dec%208/IMG_9124.JPG","2019%20Dec%208/IMG_9125.JPG","2019%20Dec%208/IMG_9128.JPG","2019%20Dec%208/IMG_9129.JPG","2019%20Dec%208/IMG_9130.JPG","2019%20Dec%208/IMG_9132.JPG","2019%20Dec%208/IMG_9133.JPG","2019%20Dec%208/IMG_9136.JPG","2019%20Dec%208/IMG_9139.JPG","2019%20Dec%208/IMG_9140.JPG","2019%20Dec%208/IMG_9141.JPG","2019%20Dec%208/IMG_9144.JPG","2019%20Dec%208/IMG_9145.JPG","2019%20Dec%208/IMG_9146.JPG","2019%20Dec%208/IMG_9147.JPG","2019%20Dec%208/IMG_9148.JPG","2019%20Dec%208/IMG_9149.JPG","2019%20Dec%208/IMG_9150.JPG","2019%20Dec%208/IMG_9151.JPG","2019%20Dec%208/IMG_9152.JPG","2019%20Dec%208/IMG_9153.JPG","2019%20Dec%208/IMG_9154.JPG","2019%20Dec%208/IMG_9155.JPG","2019%20Dec%208/IMG_9156.JPG","2019%20Dec%208/IMG_9157.JPG","2019%20Dec%208/IMG_9158.JPG","2019%20Dec%208/IMG_9159.JPG","2019%20Dec%208/IMG_9160.JPG","2019%20Dec%208/IMG_9162.JPG","2019%20Dec%208/IMG_9163.JPG","2019%20Dec%208/IMG_9164.JPG","2019%20Dec%208/IMG_9165.JPG","2019%20Dec%208/IMG_9166.JPG","2019%20Dec%208/IMG_9167.JPG","2019%20Dec%208/IMG_9168.JPG","2019%20Dec%208/IMG_9170.JPG","2019%20Dec%208/IMG_9171.JPG","2019%20Dec%208/IMG_9172.JPG","2019%20Dec%208/IMG_9173.JPG","2019%20Dec%208/IMG_9174.JPG","2019%20Dec%208/IMG_9175.JPG","2019%20Dec%208/IMG_9176.JPG","2019%20Dec%208/IMG_9177.JPG","2019%20Dec%208/IMG_9178.JPG","2019%20Dec%208/IMG_9179.JPG","2019%20Dec%208/IMG_9180.JPG","2019%20Dec%208/IMG_9181.JPG","2019%20Dec%208/IMG_9182.JPG","2019%20Dec%208/IMG_9183.JPG","2019%20Dec%208/IMG_9184.JPG","2019%20Dec%208/IMG_9185.JPG","2019%20Dec%208/IMG_9186.JPG","2019%20Dec%208/IMG_9216.JPG","2019%20Dec%208/IMG_9217.JPG","2019%20Dec%208/IMG_9218.JPG","2019%20Dec%208/IMG_9219.JPG","2019%20Dec%208/IMG_9220.JPG","2019%20Dec%208/IMG_9221.JPG","2019%20Dec%208/IMG_9222.JPG","2019%20Dec%208/IMG_9223.JPG","2019%20Dec%208/IMG_9224.JPG","2019%20Dec%208/IMG_9225.JPG","2019%20Dec%208/IMG_9226.JPG","2019%20Dec%208/IMG_9227.JPG","2019%20Dec%208/IMG_9228.JPG","2019%20Dec%208/IMG_9229.JPG","2019%20Dec%208/IMG_9230.JPG","2019%20Dec%208/IMG_9231.JPG","2019%20Dec%208/IMG_9232.JPG","2019%20Dec%208/IMG_9233.JPG","2019%20Dec%208/IMG_9235.JPG","2019%20Dec%208/IMG_9236.JPG","2019%20Dec%208/IMG_9237.JPG","2019%20Dec%208/IMG_9238.JPG","2019%20Dec%208/IMG_9239.JPG","2019%20Dec%208/IMG_9240.JPG","2019%20Dec%208_1/IMG_0001.JPG","2019%20Dec%208_1/IMG_0002.JPG","2019%20Dec%208_1/IMG_0003.JPG","2019%20Dec%208_1/IMG_9514.JPG","2019%20Dec%208_1/IMG_9515.JPG","2019%20Dec%208_1/IMG_9516.JPG","2019%20Dec%208_1/IMG_9517.JPG","2019%20Dec%208_1/IMG_9518.JPG","2019%20Dec%208_1/IMG_9519.JPG","2019%20Dec%208_1/IMG_9520.JPG","2019%20Dec%208_1/IMG_9521.JPG","2019%20Dec%208_1/IMG_9522.JPG","2019%20Dec%208_1/IMG_9523.JPG","2019%20Dec%208_1/IMG_9524.JPG","2019%20Dec%208_1/IMG_9526.JPG","2019%20Dec%208_1/IMG_9528.JPG","2019%20Dec%208_1/IMG_9529.JPG","2019%20Dec%208_1/IMG_9530.JPG","2019%20Dec%208_1/IMG_9531.JPG","2019%20Dec%208_1/IMG_9532.JPG","2019%20Dec%208_1/IMG_9533.JPG","2019%20Dec%208_1/IMG_9534.JPG","2019%20Dec%208_1/IMG_9535.JPG","2019%20Dec%208_1/IMG_9536.JPG","2019%20Dec%208_1/IMG_9537.JPG","2019%20Dec%208_1/IMG_9538.JPG","2019%20Dec%208_1/IMG_9539.JPG","2019%20Dec%208_1/IMG_9860.JPG","2019%20Dec%208_1/IMG_9861.JPG","2019%20Dec%208_1/IMG_9862.JPG","2019%20Dec%208_1/IMG_9863.JPG","2019%20Dec%208_1/IMG_9864.JPG","2019%20Dec%208_1/IMG_9865.JPG","2019%20Dec%208_1/IMG_9866.JPG","2019%20Dec%208_1/IMG_9867.JPG","2019%20Dec%208_1/IMG_9868.JPG","2019%20Dec%208_1/IMG_9869.JPG","2019%20Dec%208_1/IMG_9870.JPG","2019%20Dec%208_1/IMG_9871.JPG","2019%20Dec%208_1/IMG_9872.JPG","2019%20Dec%208_1/IMG_9873.JPG","2019%20Dec%208_1/IMG_9874.JPG","2019%20Dec%208_1/IMG_9875.JPG","2019%20Dec%208_1/IMG_9876.JPG","2019%20Dec%208_1/IMG_9877.JPG","2019%20Dec%208_1/IMG_9878.JPG","2019%20Dec%208_1/IMG_9879.JPG","2019%20Dec%208_1/IMG_9880.JPG","2019%20Dec%208_1/IMG_9881.JPG","2019%20Dec%208_1/IMG_9882.JPG","2019%20Dec%208_1/IMG_9883.JPG","2019%20Dec%208_1/IMG_9884.JPG","2019%20Dec%208_1/IMG_9885.JPG","2019%20Dec%208_1/IMG_9886.JPG","2019%20Dec%208_1/IMG_9887.JPG","2019%20Dec%208_1/IMG_9888.JPG","2019%20Dec%208_2/IMG_9889.JPG","2019%20Dec%208_2/IMG_9890.JPG","2019%20Dec%208_2/IMG_9891.JPG","2019%20Dec%208_2/IMG_9892.JPG","2019%20Dec%208_2/IMG_9893.JPG","2019%20Dec%208_2/IMG_9894.JPG","2019%20Dec%208_2/IMG_9895.JPG","2019%20Dec%208_2/IMG_9896.JPG","2019%20Dec%208_2/IMG_9897.JPG","2019%20Dec%208_2/IMG_9898.JPG","2019%20Dec%208_2/IMG_9899.JPG","2019%20Dec%208_2/IMG_9900.JPG","2019%20Dec%208_2/IMG_9901.JPG","2019%20Dec%208_2/IMG_9902.JPG","2019%20Dec%208_2/IMG_9904.JPG","2019%20Dec%208_2/IMG_9905.JPG","2019%20Dec%208_2/IMG_9906.JPG","2019%20Dec%208_2/IMG_9907.JPG","2019%20Dec%208_2/IMG_9908.JPG","2019%20Dec%208_2/IMG_9909.JPG","2019%20Dec%208_2/IMG_9910.JPG","2019%20Dec%208_2/IMG_9918.JPG","2019%20Dec%208_2/IMG_9912.JPG","2019%20Dec%208_2/IMG_9913.JPG","2019%20Dec%208_2/IMG_9914.JPG","2019%20Dec%208_2/IMG_9915.JPG","2019%20Dec%208_2/IMG_9916.JPG","2019%20Dec%208_2/IMG_9917.JPG","2019%20Dec%208_2/IMG_9919.JPG","2019%20Dec%208_2/IMG_9911.JPG","2019%20Dec%208_2/IMG_9920.JPG","2019%20Dec%208_2/IMG_9921.JPG","2019%20Dec%208_2/IMG_9922.JPG","2019%20Dec%208_2/IMG_9923.JPG","2019%20Dec%208_2/IMG_9924.JPG","2019%20Dec%208_2/IMG_9926.JPG","2019%20Dec%208_2/IMG_9927.JPG","2019%20Dec%208_2/IMG_9928.JPG","2019%20Dec%208_2/IMG_9934.JPG","2019%20Dec%208_2/IMG_9935.JPG","2019%20Dec%208_2/IMG_9936.JPG","2019%20Dec%208_2/IMG_9937.JPG","2019%20Dec%208_2/IMG_9938.JPG","2019%20Dec%208_2/IMG_9939.JPG","2019%20Dec%208_2/IMG_9940.JPG","2019%20Dec%208_2/IMG_9941.JPG","2019%20Dec%208_2/IMG_9942.JPG","2019%20Dec%208_2/IMG_9943.JPG","2019%20Dec%208_2/IMG_9944.JPG","2019%20Dec%208_2/IMG_9945.JPG","2019%20Dec%208_2/IMG_9946.JPG","2019%20Dec%208_2/IMG_9947.JPG","2019%20Dec%208_3/IMG_9948.JPG","2019%20Dec%208_3/IMG_9949.JPG","2019%20Dec%208_3/IMG_9950.JPG","2019%20Dec%208_3/IMG_9951.JPG","2019%20Dec%208_3/IMG_9952.JPG","2019%20Dec%208_3/IMG_9954.JPG","2019%20Dec%208_3/IMG_9955.JPG","2019%20Dec%208_3/IMG_9956.JPG","2019%20Dec%208_3/IMG_9957.JPG","2019%20Dec%208_3/IMG_9958.JPG","2019%20Dec%208_3/IMG_9959.JPG","2019%20Dec%208_3/IMG_9960.JPG","2019%20Dec%208_3/IMG_9961.JPG","2019%20Dec%208_3/IMG_9962.JPG","2019%20Dec%208_3/IMG_9963.JPG","2019%20Dec%208_3/IMG_9964.JPG","2019%20Dec%208_3/IMG_9965.JPG","2019%20Dec%208_3/IMG_9966.JPG","2019%20Dec%208_3/IMG_9967.JPG","2019%20Dec%208_3/IMG_9968.JPG","2019%20Dec%208_3/IMG_9999.JPG"];
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