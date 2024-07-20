function locomotiveAnimation(){
  gsap.registerPlugin(ScrollTrigger);


const locoScroll = new LocomotiveScroll({
  el: document.querySelector("#main"),
  smooth: true
});
locoScroll.on("scroll", ScrollTrigger.update);

ScrollTrigger.scrollerProxy("#main", {
  scrollTop(value) {
    return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
  },
  getBoundingClientRect() {
    return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
  },
  pinType: document.querySelector("#main").style.transform ? "transform" : "fixed"
}); 
ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

ScrollTrigger.refresh();

}



function loadAnimation(){
    var tl = gsap.timeline();

tl.from("#line h1", {
  y: "100%",
  stagger: 0.3,
});

tl.from("#line1-part1 h5,#line1-part1 h6", {
  opacity: 0,
  onStart: function () {
    var h5timer = document.querySelector("#line1-part1 h5");
    var grow = 0;
    setInterval(() => {
      if (grow < 100) {
        h5timer.innerHTML = grow++;
      } else { 
        h5timer.innerHTML = grow;
      }
    }, 30);
  },
});
tl.to("#line h2",{
    animationName:"loaderanime",  
    opacity:1,
})
tl.to("#loader", {
  opacity: 0,
  duration: 0.2,
  delay: 3,
});
tl.from("#page1",{
    y:1200,
    opacity:0,
    ease:Power4,

});
tl.to("#loader",{
    display:"none"

});
tl.from("#nav",{
    opacity:0,
});
tl.from("#hero1 h1  , #hero2 h1 , #hero3 h2 , #hero4 h1",{
    y:160,
    stagger:0.2,
});
tl.from("#hero1   , #hero2 ",{
    opacity:0,
    stagger:0.2,
},"-=1.2");
}
function cursorAnimation(){
  Shery.mouseFollower({
    skew:true,
    duration:1,
    ease:"cubic-bezier(0.23,1,0.320,1)",

  })
    

    var video = document.querySelector("#video-container video");

    var videoContainer = document.querySelector("#video-container");
    videoContainer.addEventListener("mouseenter",function(){
      videoContainer.addEventListener("mousemove",function(dets){
        gsap.to(".mousefollower",{
          opacity:0,
        })
        gsap.to("#video-cursor",{
          left:dets.x - 520,
          y:dets.y - 350,
        })
      })
    });


    videoContainer.addEventListener("mouseleave",function(){
      gsap.to(".mousefollower",{
        opacity:1,
      })
      gsap.to("#video-cursor",{
        left:"70%",
        y:"-17%",
      })
    });

    var flag = 0;
    videoContainer.addEventListener("click",function(){
     if(flag == 0){
       video.play();
       video.style.opacity = 1;
       document.querySelector("#video-cursor").innerHTML=`<i class="ri-pause-mini-line"></i>`;
       gsap.to("#video-cursor",{
         scale:0.5,
        })
        flag = 1; 
    }
    else{
      flag = 0;
      video.pause();
       video.style.opacity = 0;
       document.querySelector("#video-cursor").innerHTML=`<i class="ri-play-fill"></i>`;
      gsap.to("#video-cursor",{
          scale:1,
        })
     }
    });

  }
    
function sheryAnimation(){
  Shery.imageEffect("#image-div",{
    style:5,
    config:{"a":{"value":2,"range":[0,30]},"b":{"value":-0.95,"range":[-1,1]},"zindex":{"value":-9996999,"range":[-9999999,9999999]},"aspect":{"value":0.7272749932567818},"ignoreShapeAspect":{"value":true},"shapePosition":{"value":{"x":0,"y":0}},"shapeScale":{"value":{"x":0.5,"y":0.5}},"shapeEdgeSoftness":{"value":0,"range":[0,0.5]},"shapeRadius":{"value":0,"range":[0,2]},"currentScroll":{"value":0},"scrollLerp":{"value":0.07},"gooey":{"value":true},"infiniteGooey":{"value":false},"growSize":{"value":4,"range":[1,15]},"durationOut":{"value":1,"range":[0.1,5]},"durationIn":{"value":1.5,"range":[0.1,5]},"displaceAmount":{"value":0.5},"masker":{"value":false},"maskVal":{"value":1,"range":[1,5]},"scrollType":{"value":0},"geoVertex":{"range":[1,64],"value":1},"noEffectGooey":{"value":true},"onMouse":{"value":0},"noise_speed":{"value":0.69,"range":[0,10]},"metaball":{"value":0.35,"range":[0,2]},"discard_threshold":{"value":0.34,"range":[0,1]},"antialias_threshold":{"value":0,"range":[0,0.1]},"noise_height":{"value":0.35,"range":[0,2]},"noise_scale":{"value":10,"range":[0,100]}},
    gooey:true,
  })
  Shery.makeMagnet("#nav h3" , {
    ease: "cubic-bezier(0.23, 1, 0.320, 1)",
    duration: 1,
  });
}

locomotiveAnimation();
loadAnimation();
cursorAnimation();
sheryAnimation();


document.addEventListener("mousemove",function(dets){
  gsap.to("#flag",{
    x:dets.x,
    y:dets.y,
  })
})

document.querySelector("#hero3").addEventListener("mouseenter",function(){
  gsap.to("#flag",{
    opacity:1
  })
})
document.querySelector("#hero3").addEventListener("mouseleave",function(){
  gsap.to("#flag",{
    opacity:0
  })
})


