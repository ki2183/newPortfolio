
import SectionWrapper from '../../Wrapper/SectionWrapper/SectionWrapper';
import TypingText from '../../Typing/Typeing';
import './StackComponent.scss';

const StackInfo = () => {
  return (
    <SectionWrapper title='STACK' classname='stack_container'>
        <StackListComponent/>
    </SectionWrapper>
  );
}

export default StackInfo;


const DELAY = 6;
const INIT_DELAY = 4000;

type StackDto = {
  dto: string[];
  title: string;
};

const stackList: StackDto[] = [
  {
    title: 'FRONTEND',
    dto: [
      'HTML5 · CSS3 · Javascript',
      'React · Next.js · Typescript',
      'Tailwind · SCSS',
      'Zustand · Redux',
      'RESTful API · WebSocket',
    ],
  },
  {
    title: 'BACKEND',
    dto: ['Supabase · MongoDB'],
  },
  {
    title: 'TOOL',
    dto: ['Github · Notion · Figma'],
  },
  {
    title: 'DEPLOY',
    dto: ['Supabase · MongoDB'],
  },
];

const getTypingDelays = (dto: string[], baseDelay: number) => {
  let delays: number[] = [];
  let acc = baseDelay;
  console.log(dto[0].length)
  dto.forEach((text) => {
    delays.push(acc);
    acc += text.length * DELAY;
  });

  return delays;
};

const StackListComponent = () => {
  let acc = 0;

  return (
    <>
      {stackList.map((section, idx) => {
        const baseDelay = INIT_DELAY + acc * DELAY;
        acc += section.dto.reduce((sum, v) => sum + v.length, 0);

        return (
          <StackGroup
            key={`${section.title}-${idx}`}
            title={section.title}
            dto={section.dto}
            baseDelay={baseDelay}
          />
        );
      })}
    </>
  );
};

const StackGroup = ({
  title,
  dto,
  baseDelay,
}: {
  title: string;
  dto: string[];
  baseDelay: number;
}) => {
  const delays = getTypingDelays(dto, baseDelay);

  return (
    <div id={`item_${title}`} className="stack_group">
      <span className="stack_title">{title}</span>
      {dto.map((text, idx) => (
        <div key={`${text}-${idx}`}>
          <TypingText initText={text} startSEC={delays[idx]} delay={DELAY} />
        </div>
      ))}
    </div>
  );
};