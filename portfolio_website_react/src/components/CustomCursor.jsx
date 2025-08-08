import { useRef, useEffect } from "react";
import { gsap } from "gsap";

const CustomCursor = () => {
  // refs for curssor elements
  const cursorRef = useRef(null);
  const cursorBorderRef = useRef(null);

  // hide cursor on mobile
  const isMobile =
    typeof window !== "undefined" &&
    window.matchMedia("(max-width: 768px)").matches;
  if (isMobile) {
    return null;
  }

  useEffect(() => {
    // get cursor elements
    const cursor = cursorRef.current;
    const cursorBorder = cursorBorderRef.current;

    // inititally position
    gsap.set([cursor, cursorBorder], {
      xPercent: -50,
      yPercent: -50,
    });
    // variables for curssor position with different
    const xTo = gsap.quickTo(cursor, "x", {
      duration: 0.2,
      ease: "power3.out",
    });
    const yTo = gsap.quickTo(cursor, "y", {
      duration: 0.2,
      ease: "power3.out",
    });
    const xToBorder = gsap.quickTo(cursorBorder, "x", {
      duration: 0.6,
      ease: "power1.out",
    });
    const yToBorder = gsap.quickTo(cursorBorder, "y", {
      duration: 0.6,
      ease: "power3.out",
    });

    // mouse move handler
    const handleMouseMove = (e) => {
      xTo(e.clientX);
      yTo(e.clientY);
      xToBorder(e.clientX);
      yToBorder(e.clientY);
    };

    // add mouse move listner
    window.addEventListener("mousemove", handleMouseMove);

    // add click animation
    document.addEventListener("mousedown", () => {
      gsap.to([cursor, cursorBorder], {
        scale: 0.6,
        duration: 0.2,
      });
    });
    document.addEventListener("mouseup", () => {
      gsap.to([cursor, cursorBorder], {
        scale: 1,
        duration: 0.2,
      });
    });
  }, []);

  return (
    <>
      <div
        ref={cursorRef}
        className="fixed top-0 left-0 w-[20px] h-[20px] bg-cyan-400 dark:bg-white rounded-full pointer-events-none z-[999] mix-blend-difference"
      ></div>
      <div
        ref={cursorBorderRef}
        className="fixed top-0 left-0 w-[40px] h-[40px] border rounded-full border-white pointer-events-none z-[999] mix-blend-difference opacity-50"
      ></div>
    </>
  );
};

export default CustomCursor;
