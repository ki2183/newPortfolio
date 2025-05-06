import SectionWrapper from "../../Wrapper/SectionWrapper/SectionWrapper";
import { DateToText } from "../../../util/date";
import "./ProjectInfo.scss";

type portfolio = {
  start: string,
  end: string,
  title: string,
  link: string,
}

const ProjectInfo = () => {
  const dto:portfolio[] = [
    {
      start: '2025-03',
      end:'2025-04',
      title:'IT-TIME',
      link:'https://melted-muscle-989.notion.site/IT-TIME-1d189e654db58046aa5fe8439560b8f2',
    },
    {
      start: '2024-12',
      end:'2025-01',
      title:'EZZ',
      link:'https://melted-muscle-989.notion.site/EZZ-1df89e654db580b7b7aef4dda8fdaae6?pvs=74',
    },
    {
      start: '2024-06',
      end:'2024-05',
      title:'거산테크',
      link:'https://www.geosantech.kr/',
    },
    {
      start: '2024-04',
      end:'2024-05',
      title:'OLD PORTFOLIO SITE',
      link:'https://portfolio-six-lime-42.vercel.app/',
    }, {
      start: '2024-03',
      end:'2024-04',
      title:'MEMO',
      link:'https://memo-vercel.vercel.app/',
    }, {
      start: '2023-10',
      end:'2023-09',
      title:'한신대학교 시간표 추천',
      link:'https://resister-course-vercel.vercel.app/',
    },
  ];
  return (
    <SectionWrapper title='PROJECTS' classname="projects_container">
        {
          dto.map(props => (
            <Project key={`${props.end}-${props.title}`} {...props}/>
          ))
        }
    </SectionWrapper>
  );  
}

export default ProjectInfo;

const Project = ({
  end,
  start,
  title,
  link,
}:portfolio) => {

  return (
    <a href={link} className="project_link" style={{ display : "block" }}>
      <article className="project_card">
          <time dateTime={`${start}/${end}`} className="">
            {DateToText(start, end)}
          </time>

          <div className="line_animate">
              <div />
          </div>

          <h2>{title}</h2>
      </article>
    </a>
  );
}