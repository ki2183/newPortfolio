import SectionWrapper from "../../Wrapper/SectionWrapper/SectionWrapper";
import TypingText from "../../Typing/Typeing";
import "./Education.scss";

const EducationInfo = () => {
  return (
    <SectionWrapper title='EDUCATION' classname="education_container">
        <EducationList/>
    </SectionWrapper>
  );  
}

export default EducationInfo;

type EducationEntry = string[];

const dto: EducationEntry[] = [
  ["한신대학교 정보통신학부 학사", "Mar 2018 - Aug 2024"],
  ["Goorm x Kakao React 기반 프론트엔드 개발자 취업 특화 과정", "Aug 2024 - Apr 2025"],
];

const INIT_DELAY = 4000;
const DELAY = 8;

export const getTypingDelayByIndex = (index: number) => {
  let delay = INIT_DELAY;
  for (let i = 0; i < index; i++) {
    delay += dto[i].reduce((sum, text) => sum + text.length, 0) * DELAY;
  }
  return delay;
};

const EducationList = () => {
  return (
    <>
      {dto.map((data, idx) => (
        <EducationTyping
          key={idx}
          dto={data}
          baseDelay={getTypingDelayByIndex(idx)}
        />
      ))}
    </>
  );
};

const EducationTyping = ({
  dto,
  baseDelay = 0,
}: {
  dto: EducationEntry;
  baseDelay?: number;
}) => {
  let accumulatedDelay = baseDelay;

  return (
    <div className="education_group">
      {dto.map((text, idx) => {
        const start = accumulatedDelay;
        accumulatedDelay += text.length * DELAY + 80;

        return (
          <div key={`${text}-${idx}`}>
            <TypingText initText={text} startSEC={start} delay={DELAY} />
          </div>
        );
      })}
    </div>
  );
};