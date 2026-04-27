import { useEffect } from "react";

/**
 * IntersectionObserver-based scroll reveal.
 * Add `className="reveal"` to any element to enable.
 * Children inside a `.reveal` get a subtle staggered delay.
 */
export function useReveal() {
  useEffect(() => {
    const els = document.querySelectorAll<HTMLElement>(".reveal");
    els.forEach((el) => {
      const parent = el.parentElement;
      if (!parent) return;
      const siblings = Array.from(parent.children).filter((c) =>
        (c as HTMLElement).classList.contains("reveal")
      );
      const idx = siblings.indexOf(el);
      if (siblings.length > 1 && idx >= 0 && !el.style.transitionDelay) {
        el.style.transitionDelay = `${Math.min(idx * 80, 480)}ms`;
      }
    });
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("is-visible");
            io.unobserve(e.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -40px 0px" }
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);
}