import { useEffect, useRef, useState } from "react";
import "./WelcomeSection.scss";
import gsap from "gsap";

const WelcomeSection= () => {
    const containerRef = useRef<HTMLDivElement>(null);
    const textRef = useRef<HTMLDivElement>(null);
    const s = "안녕하세요!";
    const e = "WELCOME :D";
    const DELAY = 0.2;

    useEffect(()=>{
        gsap.from(containerRef.current, {
            delay:3.5,
            duration:0.5,
            top:0,
            onComplete:()=> {
                gsap.to(containerRef.current, {
                    display:'none'
                });
            },
        });
        gsap.to(textRef.current, {
            delay:3.6,
            duration:1,
            scale:0.2,
            y:-100,
        });

    }, []);

    return (
        <section ref={containerRef} className="welcome_container">
            <h2 className="sr-only">welcome Section</h2>
                <div ref={textRef} className="welcome_frame">
                { 
                    e.split("")
                      .map((start, idx) => (
                        <div key={`char-${idx}-${start}`}>
                            <TranslationTextAnimation 
                                start={s[idx]} 
                                end={e[idx]} 
                                idx={idx} 
                                startDelaySec={0.5 + idx * DELAY}
                            />
                        </div>
                      )
                    )
                }
                </div>
        </section>
    );
}

export default WelcomeSection;

const randomText = {
    ko: [
        ["나","캢","팂","뜨","또","토","안","트","넘","세","꺼","맶","느","어","밀","찞","빫","니"],
        ["빫", "메","호","우","빠","뽀","이","취","쁗","없","큭","하","고","땋","싶","푶","찧","퀸"],
        ["또","토","안","트","넘","쁗","없","큭","하","고","땋","싶","빫", "메","호","우","세","꺼"],
    ],
    en: [
        ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R'],
        ['S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J'],
        ['K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z', 'A', 'B'] 
    ]
}

interface Props {
    start:string,
    end:string,
    startDelaySec:number,
    idx:number,
}

const TranslationTextAnimation = ({
    idx,
    end,
    start,  
    startDelaySec = 0.5,
}: Props) => {
    const [text, setText] = useState<string>(start);
    const DELAY = 10;

    const TextArr = [
        start, 
        ...randomText.ko[idx % 3], 
        ...randomText.en[idx % 3], 
        end
    ], len = TextArr.length;

    useEffect(()=>{
        setTimeout(async () => {
            for (let i = 0; i < len; i++) {
                await new Promise(res => setTimeout(res, DELAY));
                setText(TextArr[i]);
              }
        }, 1000 * startDelaySec);
    }, []);

    return <>{text}</>
};

const Line = () => {
    const lineRef = useRef(null);
    const DELAY = 2.7;

    useEffect(() => {
        gsap.from(lineRef.current, {
            scaleX: 0,
            transformOrigin:'left',
            delay:DELAY,
            duration:0.3,
        });
    }, []);

    return (
        <div className="line">
            <div ref={lineRef}/>
        </div>
    )
}