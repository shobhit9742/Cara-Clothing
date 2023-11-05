let tl = gsap.timeline();
tl.from("#header img, li", {
  y: -50,
  duration: 0.7,
  opacity: 0,
  stagger: 0.15,
});

tl.from("#hero h1,#hero h2,#hero h4,#hero p,#hero button", {
  y: 100,
  opacity: 0,
  duration: 1,

  // stagger:0.1,
});

tl.from("#hero h3", {
  scale: 0,
  opacity: 0,
});
tl.to("#hero h3", {
  y: 40,
  duration: 0.7,
  repeat: -1,
  yoyo: true,
});
