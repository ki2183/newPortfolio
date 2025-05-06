import { useEffect, useState } from "react";

interface Props {
    initText: string;
    startSEC: number;
    delay: number;
}

const TypingText = ({
  initText,
  delay = 20,
  startSEC = 1000,
}: Props) => {
  const [text, setText] = useState('');

  useEffect(() => {
    let i = 0;

    const typing = () => {
      if (i <= initText.length) {
        const current = initText.slice(0, i) + '|';
        setText(current);
        i++;
        setTimeout(typing, delay);
      } else {
        setText(initText); 
      }
    };

    const timer = setTimeout(typing, startSEC); 

    return () => clearTimeout(timer);
  }, [initText, startSEC]);

  return <>{text}</>;
};

export default TypingText;