import { useScroll } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import gsap from "gsap";
import { useEffect, useRef } from "react";
import { SectionContext } from "./SectionContext";
import { useContext } from "react";

export const ScrollManager = () => {
  const { section, setSection } = useContext(SectionContext);
  const data = useScroll();
  const lastScroll = useRef(0);

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
        setSection(1);
      }
      if (curSection === 1) {
        setSection(2);
      }
      if (curSection === 2) {
        setSection(3);
      }
      if (curSection === 3) {
        setSection(4);
      }
    }

    // Défilement vers le haut
    if (data.scroll.current < lastScroll.current) {
      if (
        curSection === 3 &&
        data.scroll.current < lastScroll4.current - 1 / data.pages
      ) {
        setSection(3);
      }
      if (
        curSection === 2 &&
        data.scroll.current < lastScroll3.current - 1 / data.pages
      ) {
        setSection(2);
      }
      if (
        curSection === 1 &&
        data.scroll.current < lastScroll2.current - 1 / data.pages
      ) {
        setSection(1);
      }
      if (curSection === 0 && data.scroll.current < 1 / (data.pages - 1)) {
        setSection(0);
      }
    }

    lastScroll.current = data.scroll.current;
  });

  return null;
};
