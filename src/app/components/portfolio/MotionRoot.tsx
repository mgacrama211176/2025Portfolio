"use client";

import { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { MotionPathPlugin } from "gsap/MotionPathPlugin";

export default function MotionRoot() {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger, MotionPathPlugin);

    const ctx = gsap.context(() => {
      // hero word-mask entrance
      const heroInners = document.querySelectorAll(".hero .wm > span");
      gsap.from(heroInners, {
        yPercent: 110,
        duration: 1,
        ease: "power3.out",
        stagger: 0.08,
      });
      gsap.from(".hero-status, .hero-tag, .hero-foot", {
        y: 18,
        opacity: 0,
        duration: 0.9,
        ease: "power3.out",
        stagger: 0.08,
        delay: 0.4,
      });

      // section heading word-mask reveal — wrap text nodes & elements in .wm > span
      gsap.utils.toArray<HTMLElement>(".reveal-h").forEach((h) => {
        const wrapWords = (textNode: Text) => {
          const frag = document.createDocumentFragment();
          const parts = (textNode.nodeValue || "").split(/(\s+)/);
          parts.forEach((p) => {
            if (!p) return;
            if (/^\s+$/.test(p)) {
              frag.appendChild(document.createTextNode(p));
              return;
            }
            const wm = document.createElement("span");
            wm.className = "wm";
            const inner = document.createElement("span");
            inner.textContent = p;
            wm.appendChild(inner);
            frag.appendChild(wm);
          });
          textNode.parentNode?.replaceChild(frag, textNode);
        };
        Array.from(h.childNodes).forEach((node) => {
          if (node.nodeType === Node.TEXT_NODE) {
            wrapWords(node as Text);
          } else if (node.nodeType === Node.ELEMENT_NODE) {
            const wm = document.createElement("span");
            wm.className = "wm";
            const inner = document.createElement("span");
            h.insertBefore(wm, node);
            inner.appendChild(node);
            wm.appendChild(inner);
          }
        });
        const inners = h.querySelectorAll(":scope > .wm > span");
        gsap.from(inners, {
          yPercent: 110,
          duration: 1,
          ease: "power3.out",
          stagger: 0.07,
          scrollTrigger: { trigger: h, start: "top 88%", toggleActions: "play none none none" },
        });
      });

      // fade-up
      gsap.utils.toArray<HTMLElement>(".fade-up").forEach((el) => {
        gsap.fromTo(
          el,
          { y: 24, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.9,
            ease: "power3.out",
            scrollTrigger: { trigger: el, start: "top 90%", toggleActions: "play none none none" },
          },
        );
      });

      // featured experience photo parallax
      gsap.utils.toArray<HTMLElement>(".parallax-photo img").forEach((img) => {
        gsap.fromTo(
          img,
          { yPercent: -10, scale: 1.12 },
          {
            yPercent: 6,
            scale: 1,
            ease: "none",
            scrollTrigger: {
              trigger: img.closest(".parallax-photo") as Element,
              start: "top bottom",
              end: "bottom top",
              scrub: 1,
            },
          },
        );
      });

      // scroll-following orange blur
      const scrollBlob = document.createElement("div");
      scrollBlob.className = "scroll-blob";
      document.body.appendChild(scrollBlob);
      gsap.to(scrollBlob, {
        scrollTrigger: {
          trigger: document.body,
          start: "top top",
          end: "bottom bottom",
          scrub: 0.6,
        },
        motionPath: {
          path: [
            { x: "12vw", y: "20vh" },
            { x: "70vw", y: "60vh" },
            { x: "20vw", y: "110vh" },
            { x: "78vw", y: "170vh" },
            { x: "15vw", y: "230vh" },
            { x: "70vw", y: "310vh" },
            { x: "25vw", y: "400vh" },
            { x: "75vw", y: "500vh" },
            { x: "30vw", y: "620vh" },
          ],
          curviness: 1.5,
        },
        ease: "none",
      });

      // about photo parallax
      const aboutImg = document.querySelector(".about-photo img");
      if (aboutImg) {
        gsap.fromTo(
          aboutImg,
          { scale: 1.15, yPercent: -8 },
          {
            scale: 1,
            yPercent: 0,
            ease: "none",
            scrollTrigger: { trigger: ".about-photo", start: "top bottom", end: "bottom top", scrub: 1 },
          },
        );
      }

      // hero portrait parallax
      const heroImg = document.querySelector(".hero-portrait img");
      if (heroImg) {
        gsap.to(heroImg, {
          yPercent: -10,
          ease: "none",
          scrollTrigger: { trigger: ".hero", start: "top top", end: "bottom top", scrub: 1 },
        });
      }

      // hero blob parallax
      const heroBlob = document.querySelector(".hero-blob");
      if (heroBlob) {
        gsap.to(heroBlob, {
          yPercent: 30,
          xPercent: -10,
          ease: "none",
          scrollTrigger: { trigger: ".hero", start: "top top", end: "bottom top", scrub: 1 },
        });
      }

      // nav scrolled border
      const nav = document.getElementById("nav");
      ScrollTrigger.create({
        start: 0,
        end: "max",
        onUpdate: (self) => nav?.classList.toggle("scrolled", self.scroll() > 16),
      });

      // magnetic buttons
      document.querySelectorAll<HTMLElement>(".btn, .nav-cta, .contact-cv").forEach((btn) => {
        const onMove = (e: MouseEvent) => {
          const r = btn.getBoundingClientRect();
          const x = e.clientX - r.left - r.width / 2;
          const y = e.clientY - r.top - r.height / 2;
          gsap.to(btn, { x: x * 0.2, y: y * 0.2, duration: 0.4, ease: "power3.out" });
        };
        const onLeave = () => {
          gsap.to(btn, { x: 0, y: 0, duration: 0.5, ease: "elastic.out(1, .4)" });
        };
        btn.addEventListener("mousemove", onMove);
        btn.addEventListener("mouseleave", onLeave);
      });

      // smooth-scroll with offset
      document.querySelectorAll<HTMLAnchorElement>('a[href^="#"]').forEach((a) => {
        a.addEventListener("click", (e) => {
          const id = a.getAttribute("href")?.slice(1);
          if (!id) return;
          const el = document.getElementById(id);
          if (!el) return;
          e.preventDefault();
          const top = el.getBoundingClientRect().top + window.scrollY - 64;
          window.scrollTo({ top, behavior: "smooth" });
        });
      });
    });

    return () => {
      ctx.revert();
      document.querySelectorAll(".scroll-blob").forEach((n) => n.remove());
    };
  }, []);

  return null;
}
