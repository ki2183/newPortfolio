import React, { useEffect, useRef } from "react";
import "./SectionWrapper.scss";
import gsap from "gsap";

interface Props {
    title?:string,
    children?: React.ReactNode,
    classname?: string,
}

const SectionWrapper = ({
    title,
    children,
    classname,
}: Props) => {
    const ref = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (!ref.current) return;
          const items = gsap.utils.toArray<HTMLElement>(
            ref.current.children
          );
    
          gsap.from(items, {
            x: 400,
            delay:3.9,
            opacity: 0,
            duration: 0.7,
            stagger: 0.1,
            ease: 'power2.out',
          });
        
      }, []);

    return (
        <section className="section_wrapper_container">
            <h2 className="sr-only">{title}</h2>
            <div className="section_wrapper_title">
                <span>{title}</span>
            </div>

            <div className={`section_wrapper_contents`}>
                <div ref={ref} className={`${classname}`}>
                    {children}
                </div>
            </div>
        </section>
    );
}


export default SectionWrapper;