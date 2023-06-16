//  var circle = document.querySelector(".mousecircle");
//  var main = document.querySelector(".main");
//  var img = document.querySelector(".transparent-div");


//   img.addEventListener("mousemove", function(e){
//       var x = e.clientX;
//       var y = e.clientY;
//       circle.style.left = x + "px";
//       circle.style.top =  y +  "px";``

//   })

function show(){
    gsap.registerPlugin(ScrollTrigger);
   
  // Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll
   
  const locoScroll = new LocomotiveScroll({
    el: document.querySelector(".main"),
    smooth: true
  });
  // each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
  locoScroll.on("scroll", ScrollTrigger.update);
   
  // tell ScrollTrigger to use these proxy methods for the ".main" element since Locomotive Scroll is hijacking things
  ScrollTrigger.scrollerProxy(".main", {
    scrollTop(value) {
      return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
    }, // we don't have to define a scrollLeft because we're only scrolling vertically.
    getBoundingClientRect() {
      return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
    },
    // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
    pinType: document.querySelector(".main").style.transform ? "transform" : "fixed"
  });
   
   
   
   
   
   
  // each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll.
  ScrollTrigger.addEventListener("refresh", () => locoScroll.update());
   
  // after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
  ScrollTrigger.refresh();
   
  }
   
  show();
  


var tl = gsap.timeline();


gsap.to(".text>h1",{
   opacity:0,


})

gsap.to(".text>h1",{
    opacity: 1,
    duration:.8,
    delay: 1.7,
})

tl.to("#dot",{
    width: "8vw",
    height: "7vw",
    duration: 1,
    transformOrigin: "center",
    x: 60,
    y: -50,
})
tl.to("#dot",{
    width: "10vw",
    height: "7vw",
    duration: .5,
    ease: Back.easeIn,
    x: -450,
})

tl.to("#dot",{
    width: "7vw",
    height: "7vw",
    duration: .5,
    x: 0,
})

tl.to("#dot",{
    width:  "1vw",
    height: "1vw",
    duration: .5,
    y:0


})
tl.to("#dot",{
    width:  "7vw",
    height: "7vw",
    duration: .5,
    y:-50,
    x:60,


})

tl.to("#dot",{
    width: "10vw",
    height: "7vw",
    duration: .5,
    ease: Back.easeIn,
    x: -450,
})
tl.to("#dot",{
    width: "7vw",
    height: "7vw",
    duration: .5,
    ease: Back.easeIn,
    x: 50,
})

tl.to(".loader",{
    left: "100%",
    duration: .5,

})


gsap.to(".text>h1",{
    opacity: 0,
    duration:.5,
    delay: 3.8,
})


var pushimg1 = document.querySelector(".pushimage-1");
var mousecircle = document.querySelector(".mousecircle");


var lastscrolltop = 0;
var navbar = document.querySelector(".full-nav");


window.addEventListener("scroll", function(){
    var scrolltop = window.pageYOffset || document.documentElement.scrolltop;
    if(scrolltop > lastscrolltop){
        navbar.style.top="-12vh";

        
    }else{
        navbar.style.top="0vh";
    }

    lastscrolltop = scrolltop;
});


var vid = document.querySelector("video");
var thumbnail = document.querySelector(".thumbnail");

 var flag = 0;

 vid.addEventListener("click", function(){
    if(flag == 0){
        vid.play();
        thumbnail.style.display = "none";
        flag = 1;
    }else{
        vid.pause();
        thumbnail.style.display = "initial";
        flag = 0;
       
    }

 })


var input = document.querySelector("input");
var lable = document.querySelector("#lab");
var page10 = document.querySelector("#page10");
var boxx = document.querySelector(".bottom-box");

input.addEventListener("click", function(){
    lable.style.fontSize = " .7rem ";
    lable.style.top = " -1vh ";
})



gsap.from("#txtone", {
    x:400,
    duration: .5,
    opacity: 0,
    delay: 4,
    fontStyle: "italic",
  
   
})
gsap.from("#child3", {
    x:-400,
    duration: .5,
    opacity: 0,
    delay: 4,
    fontStyle: "italic",
   
})
gsap.from(".underline-1", {
    width: 0,
    duration: 1,
    delay: 4,
    ease:Power4.easeInOut,
   
})
gsap.from(".underline-2", {
    width: 0,
    duration: 1,
    delay: 4,
    ease:Power4.easeInOut,
   
})
gsap.from(".navbox", {
    width: 60,
    duration: .8,
    delay: 4,
    opacity: 0,
   
})
gsap.from(".ls", {
    duration: .5,
    delay: 4.5,
    opacity: 0,
   
})

 

gsap.from(".b1", {
    x: -300,
    opacity: 0,
    duration: 1,

    scrollTrigger: {
        trigger: ".b1",
        scroller: ".main",
        scrubber: 1.1,
        toggleActions: "restart reverse play none",
       
        
    }
})



gsap.from(".txt1", {
    x: -300,
    opacity: 0,
    duration: 1,

    scrollTrigger: {
        trigger: ".txt1",
        scroller: ".main",
        
        toggleActions: "restart reverse play none",
       
        
    }
})
gsap.from(".txt3", {
    x: -300,
    opacity: 0,
    duration: 1,

    scrollTrigger: {
        trigger: ".txt3",
        scroller: ".main",
        
        toggleActions: "restart reverse play none",
       
        
    }
})
gsap.from("#tip", {
    y: 300,
    duration: .5,

    scrollTrigger: {
        trigger: "#tip",
        scroller: ".main",
        start: "top 130%",
        toggleActions: "restart reverse play none",
       
        
    }
})



gsap.from("#page4>.underline", {
    width: 0,
    duration: 1,
    ease:Power4.easeInOut,

       scrollTrigger: {
        trigger: "#page4>h1",
        scroller: ".main",
        toggleActions: "restart reverse play none",
       
        
    }
})


gsap.from("#page5>h1", {
    x: 100,
    duration: .5,
    opacity: 0,

       scrollTrigger: {
        trigger: "#page5>h1",
        scroller: ".main",
        toggleActions: "restart reverse play none",
       
        
    }
})

gsap.from(".txt-three>h1", {
    x: -100,
    duration: .5,
    opacity: 0,

       scrollTrigger: {
        trigger: ".txt-three",
        scroller: ".main",
        stagger: 0.2,
      
       
        
    }
})
gsap.from(".txt-three>h2", {
    x: -100,
    duration: .5,
    opacity: 0,
    delay: 0.2,

       scrollTrigger: {
        trigger: ".txt-three",
        scroller: ".main",
        stagger: 0.2,
        
        
    }
})
gsap.from(".txt-five>h1", {
    x: -100,
    duration: .5,
    opacity: 0,

       scrollTrigger: {
        trigger: ".txt-five>h2",
        scroller: ".main",
        stagger: 0.2,
      
       
        
    }
})
gsap.from(".txt-five>h2", {
    x: -100,
    duration: .5,
    opacity: 0,
    delay: 0.2,

       scrollTrigger: {
        trigger: ".txt-five>h1",
        scroller: ".main",
        stagger: 0.2,
        
        
    }
})



gsap.from("#z1", {
    y: 100,
    scale: 1.1,
    duration: .5,
    opacity: 0,


       scrollTrigger: {
        trigger: "#z1",
        scroller: ".main",
        stagger: 1,
        
        
    }
})
gsap.from("#z2", {
    y: 100,
    scale: 1.1,
    duration: .5,
    opacity: 0,
  

       scrollTrigger: {
        trigger: "#z2",
        scroller: ".main",
        stagger: 1,
        
        
    }
})
gsap.from("#z3", {
    y: 100,
    scale: 1.1,
    duration: .5,
    opacity: 0,
  

       scrollTrigger: {
        trigger: "#z3",
        scroller: ".main",
        stagger: 1,
        
        
    }
})
gsap.from(".heading-box", {
    y: 70,
    duration: .5,
    opacity: 0,

       scrollTrigger: {
        trigger: ".heading-box",
        scroller: ".main",
  
        
    }
})
gsap.from(".pushimage-1", {
    y: 70,
    duration: .5,
    opacity: 0,
    scale: 0.5,

       scrollTrigger: {
        trigger: ".pushimage-1",
        scroller: ".main",
        start: "top 140%",
        end: "top -70%",
  
        
    }
})

//  var circleone = document.querySelector(".circle-one");

//   thumbnail.addEventListener("mousemove", function(e){
//       var x = e.clientX;
//       var y = e.clientY;
//       circleone.style.left = x + "px";
//       circleone.style.top =  y +  "px";

//   })

var imgOne = document.querySelector(".hover-img-one");
var imgtwo = document.querySelector(".hover-img-two");
var imgthree = document.querySelector(".hover-img-three");
var imgfour = document.querySelector(".hover-img-four");
 
 
var z1 = document.querySelector("#z1");
var z2 = document.querySelector("#z2");
var z3 = document.querySelector("#z3");
var z4 = document.querySelector(".txt-three>h1");
 

z1.addEventListener("mousemove", function(e){
    var x = e.clientX;
   imgOne.style.left = x + "px";
   imgOne.style.transform = "rotate(5deg)";
   imgOne.style.display = "initial";
   imgtwo.style.display = "none";
   imgthree.style.display = "none";
   gsap.from(".hover-img-one", {
    scale: 1.1,
    duration: 1,
    opacity: 1,
    ease:Power4.easeInOut,
   })
   
})
z2.addEventListener("mousemove", function(e){
    var x = e.clientX;
   imgtwo.style.left = x + "px";
   imgtwo.style.transform = "rotate(5deg)";
   imgtwo.style.display = "initial";
   imgOne.style.display = "none";
   imgthree.style.display = "none";
   gsap.from(".hover-img-two", {
    scale: 1.1,
    duration: 1,
    opacity: 1,
    ease:Power4.easeInOut,
   })
   
})
z3.addEventListener("mousemove", function(e){
   var x = e.clientX;
   imgthree.style.left = x + "px";
   imgthree.style.transform = "rotate(5deg)";
   imgthree.style.display = "initial";
   imgtwo.style.display = "none";
   imgOne.style.display = "none";
   gsap.from(".hover-img-three", {
    scale: 1.1,
    duration: 1,
    opacity: 1,
    ease:Power4.easeInOut,
   })
   
})
z4.addEventListener("mousemove", function(e){
   var x = e.clientX;
   imgfour.style.left = x + "px";
   imgfour.style.transform = "rotate(5deg)";
   imgfour.style.display = "initial";
   gsap.from(".hover-img-three", {
    scale: 1.5,
    duration: 1,
    opacity: 1,
    ease:Power4.easeInOut,
   })
   
})
 



 z1.addEventListener("mouseleave", function(){
  imgOne.style.display = "none";
 })
 z2.addEventListener("mouseleave", function(){
  imgtwo.style.display = "none";
 })
 z3.addEventListener("mouseleave", function(){
  imgthree.style.display = "none";
 })
 z4.addEventListener("mouseleave", function(){
  imgfour.style.display = "none";
  gsap.to(".hover-img-four",{
    scale: .5,
    duration: .5,
    opacity: 1,
  })
 })
 





var circlespace = document.querySelector(".circle-space")
var cursor = document.querySelector(".circle-one")

// circlespace.addEventListener("mousemove", function(e){
//     var x = e.clientX;
//     var y =  e.clientY;
//     cursor.style.left = x + "px";
//     cursor.style.top = y + "px";
// })

  