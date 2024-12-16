function sliderSection() {
  document.querySelector(".swiper").addEventListener("mousemove", (dets) => {
    console.log("first");
    gsap.to(".pointer", {
      x: dets.clientX,
      y: dets.clientY,
      opacity: 1,
    });
  });
  document.querySelector(".slider").addEventListener("mouseleave", (dets) => {
    console.log("first");
    gsap.to(".pointer", {
      opacity: 0,
    });
  });
}

sliderSection();
