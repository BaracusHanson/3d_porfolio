import { useScroll } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import gsap from "gsap";
import { useEffect, useRef } from "react";

export const ScrollManager = ({ section, onSectionChange }) => {
  const data = useScroll();
  const lastScroll = useRef(0);
  const lastScroll2 = useRef(0);
  // console.log(lastScroll2);
  const lastScroll3 = useRef(0);
  const lastScroll4 = useRef(0);
  const isAnimating = useRef(false);
  //   console.log(data);

  useEffect(() => {
    const sectionHeight = section * data.el.clientHeight;
    console.log("hauteur de section", sectionHeight);

    gsap.to(data.el, {
      duration: 1.5,
      scrollTop: sectionHeight,
      onStart: () => {
        isAnimating.current = true;
      },
      onComplete: () => {
        isAnimating.current = false;
      },
    });
  }, [section]);

  useFrame(() => {
    if (isAnimating.current) {
      lastScroll.current = data.scroll.current;
      return;
    }

    const curSection = Math.floor(data.scroll.current * data.pages);

    // Défilement vers le bas
    if (data.scroll.current > lastScroll.current) {
      if (curSection === 0) {
        onSectionChange(1);
      }
      if (curSection === 1) {
        onSectionChange(2);
        lastScroll2.current = data.scroll.current;
      }
      if (curSection === 2) {
        onSectionChange(3);
        lastScroll3.current = data.scroll.current;
      }
      if (curSection === 3) {
        onSectionChange(4);
        lastScroll4.current = data.scroll.current;
      }
    }

    // Défilement vers le haut
    if (data.scroll.current < lastScroll.current) {
      if (
        curSection === 3 &&
        data.scroll.current < lastScroll4.current - 1 / data.pages
      ) {
        onSectionChange(3);
      }
      if (
        curSection === 2 &&
        data.scroll.current < lastScroll3.current - 1 / data.pages
      ) {
        onSectionChange(2);
      }
      if (
        curSection === 1 &&
        data.scroll.current < lastScroll2.current - 1 / data.pages
      ) {
        onSectionChange(1);
      }
      if (curSection === 0 && data.scroll.current < 1 / (data.pages - 1)) {
        onSectionChange(0);
      }
    }

    lastScroll.current = data.scroll.current;
  });

  return null;
};
