import { forwardRef, useEffect, useRef } from "react";
import "./TiitleSection.scss";
import gsap from "gsap";
import { useResizeStore } from "../../../store/resizeStore";

const TitleSection = () => {


    return (
        <section className="title_container">
            <h2 className="sr-only">title section</h2>

            <FilpText>
                PORTFOLIO
            </FilpText>
        </section>
    );
}

export default TitleSection;

const CNT = 5;

type Props = React.ComponentProps<'div'>;

const FilpText = ({ children, ...props }: Props) => {
    if (typeof children !== 'string') {
        console.warn('children은 string으로 사용하세요', 'Section/TitleSection');
        return null;
      }
    
      const DELAY = 3.9;
      const textRefs = useRef<HTMLDivElement[]>([]);
      const titleRef = useRef<HTMLDivElement>(null);
      const containerRef = useRef<HTMLDivElement>(null);
      const animationRef = useRef<gsap.core.Tween[] | null>(null);
    
      useEffect(() => {
        const texts = textRefs.current;
        const container = containerRef.current;
        console.log(container?.clientHeight);
        
        if(!container) return;

        const containerHeight = container.getBoundingClientRect().height;
        const charHeight = containerHeight * (CNT - 1);
      
        // 기존 애니메이션 클린업
        if (animationRef.current) {
            animationRef.current.forEach(anim => anim.kill());
            animationRef.current = [];
        }
        
        // new animation addd
        texts.forEach((el, idx) => {
          if (!el) return;
          const type = idx % 2 === 0 ? "even" : "odd";
        
          const startY = (type === "odd" ? -charHeight : 0);
          const endY   = (type === "odd" ? 0 : -charHeight);
        
          const tween = gsap.fromTo(el, 
            { y: startY }, 
            { y: endY, delay: DELAY, ease: "power1.out" , duration: 1, overwrite: true }
          );
        
          animationRef.current?.push(tween);
        });

        gsap.from(titleRef.current, {
            delay: DELAY + 1,
            opacity:0,
            onComplete: ()=> {
                gsap.set(texts, {
                    opacity:0,
                });
            },
        });
      
      }, []);

    return (
      <div ref={containerRef} className="container_filptext" {...props}>
        <div id="fixed_title" className="container_charlist" ref={titleRef}>
            {children.split("").map((char, idx) => (
                <span key={`${char}+${idx}`}>{char}</span>
            ))}
        </div>

        {children.split("").map((char, idx) => (
          <CharList 
            idx={idx} 
            text={char}
            key={`${char}-${idx}`}
            ref={(el) => {if(el) textRefs.current[idx] = el}}
          />
        ))}
      </div>
    );
  };

  interface CharListProps {
    idx:number;
    text:string;
  }
  
  const CharList = forwardRef<HTMLDivElement, CharListProps>(({ idx, text }, ref) => (
    <div className="container_charlist" ref={ref}>
      {[...Array(CNT)].map((_, i) => (
        <span key={`${idx}-${i}`}>{text}</span>
      ))}
    </div>
  ));