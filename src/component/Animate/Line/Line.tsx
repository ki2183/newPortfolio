import { useEffect, useRef } from "react";
import "./Line.scss";
import gsap from "gsap";

const Line = () => {
    const ref = useRef<HTMLDivElement>(null);

    useEffect(() => {
      gsap.from(ref.current, {
        transformOrigin: 'left',
        scaleX:0,
        delay:3,
        duration:0.4,
      });
    }, [])

    return (
        <div className="line_animate">
            <div ref={ref}/>
        </div>
    );
}

export default Line;