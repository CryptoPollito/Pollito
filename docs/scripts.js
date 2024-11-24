// Animation for the Hero Section
gsap.from("#hero h1", { duration: 1, y: -50, opacity: 0 });
gsap.from("#hero p", { duration: 1, y: 50, opacity: 0, delay: 0.5 });
gsap.from("#hero .btn", { duration: 1, scale: 0, opacity: 0, stagger: 0.3, delay: 1 });
