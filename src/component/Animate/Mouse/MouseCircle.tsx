import { useEffect, useRef, useState } from "react";
import gsap from "gsap";


const MouseCircle = () => {
    const circleRef = useRef<HTMLDivElement>(null);
    const [isHoveringLink, setIsHoveringLink] = useState(false);
  
    useEffect(() => {
      const move = (e: MouseEvent) => {
        gsap.to(circleRef.current, {
          x: e.clientX,
          y: e.clientY,
          duration: 0.65,
          ease: 'power3.out',
        });
      };
  
      const handleHover = (e: MouseEvent) => {
        const target = e.target as HTMLElement;
        if (target.closest('a')) {
          setIsHoveringLink(true);
        } else {
          setIsHoveringLink(false);
        }
      };
  
      window.addEventListener('mousemove', move);
      window.addEventListener('mouseover', handleHover);
      window.addEventListener('mouseout', handleHover);
  
      return () => {
        window.removeEventListener('mousemove', move);
        window.removeEventListener('mouseover', handleHover);
        window.removeEventListener('mouseout', handleHover);
      };
    }, []);
  
    useEffect(() => {
      gsap.to(circleRef.current, {
        width: isHoveringLink ? 60 : 25,
        height: isHoveringLink ? 60 : 25,
        duration: 0.5,
        ease: 'power3.out',
      });
    }, [isHoveringLink]);
  
    return (
      <div
        ref={circleRef}
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: 50,
          height: 50,
          borderRadius: '50%',
          backgroundColor: 'white',
          mixBlendMode: 'difference',
          pointerEvents: 'none',
          transform: 'translate(-50%, -50%)',
          zIndex: 9999,
        }}
      />
    );
  };
  
  export default MouseCircle;