/*let tl = gsap.timeline({ delay: 0.5 });
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
});*/

gsap.to(".sattelite", {
  opacity: 0,
  duration: 1,
  ease: "power2.out",
  delay: 5,
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
