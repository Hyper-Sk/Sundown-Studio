function loader1() {
  let loader1 = document.querySelector(".loader1");
  window.addEventListener("load", () => {
    setTimeout(() => {
      loader1.style.top = "-130%";
    }, 4000);
  });
}
loader1();

function loader2() {
  let loader2 = document.querySelector(".loader2");
  gsap.to(loader2, {
      y:0
  })
  window.addEventListener("load", () => {
    setTimeout(() => {
        gsap.to(loader2, {
            y:"-100dvh"
        })
    }, 1000);
  });
}
loader2();
