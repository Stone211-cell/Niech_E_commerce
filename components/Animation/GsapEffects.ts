import { gsap } from "gsap";

export const animateTitle = (target: string) => {
    gsap.from(target, {
        y: -50,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
    });
};

export const animateFadeIn = (target: string, delay: number = 0) => {
    gsap.from(target, {
        opacity: 0,
        y: 20,
        duration: 0.8,
        delay: delay,
        ease: "power2.out",
    });
};

export const animateStagger = (target: string) => {
    gsap.from(target, {
        opacity: 0,
        y: 50,
        duration: 0.8,
        stagger: 0.2, // เรียงลำดับการเล่นทีละตัว
        ease: "back.out(1.7)",
    });
};
