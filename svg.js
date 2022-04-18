gsap.registerPlugin(ScrollTrigger);

gsap.to("#cloud1", {
  scrollTrigger: {
    trigger: "#cloud1",
    start: "top center",
    toggleActions: "restart none none none",
    markers: true,
  },
  y: 80,
  duration: 1,
});

gsap.to("#cloud2", { x: 1000 }, 0);
gsap.to("#cloud3", { x: -1000 }, 0);
gsap.to("#cloud4", { x: -700, y: 25 }, 0);

let tl = gsap.timeline({ delay: 0.5 });
tl.from("nav", { duration: 0.6, ease: "power2.out", y: -80 });
tl.from(".toggle-container", { opacity: 0, duration: 0.6, ease: "power2.out" });
tl.from(".ulLinks", { opacity: 0, duration: 0.6, ease: "power2.out" });
tl.from(".header_text2", {
  duration: 2,
  ease: "power2.out",
  y: -60,
});
tl.from(".profilepic", {
  duration: 0.6,
  x: 60,
  ease: "power2.out",
});

gsap.to("#middle", {
  opacity: 0,
  duration: 1,
  ease: "power2.out",
  delay: 6,
});

gsap.to("#last", {
  opacity: 0,
  duration: 1,
  ease: "power2.out",
  delay: 7,
});

gsap.to(".n", {
  opacity: 0,
  duration: 1,
  ease: "power2.out",
  delay: 8,
});
