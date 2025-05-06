import SectionWrapper from "../../Wrapper/SectionWrapper/SectionWrapper";
import { DateToText } from "../../../util/date";
import "./ProjectInfo.scss";
import { useEffect, useRef, useState } from "react";
import gsap from "gsap";

type portfolio = {
  start: string,
  end: string,
  title: string,
}

const ProjectInfo = () => {
  const dto:portfolio[] = [
    {
      start: '2025-03',
      end:'2025-04',
      title:'IT-TIME',
    },
    {
      start: '2024-12',
      end:'2025-01',
      title:'EZZ',
    },
    {
      start: '2024-06',
      end:'2024-05',
      title:'거산테크',
    },
    {
      start: '2024-04',
      end:'2024-05',
      title:'PORTFOLIO SITE',
    }, {
      start: '2024-03',
      end:'2024-04',
      title:'MEMO',
    }, {
      start: '2023-10',
      end:'2023-09',
      title:'한신대학교 시간표 추천',
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
  title
}:portfolio) => {

  return (
    // <a>
      <article className="project_card">
          <time dateTime={`${start}/${end}`} className="">
            {DateToText(start, end)}
          </time>

          <div className="line_animate">
              <div />
          </div>

          <h2>{title}</h2>
      </article>
    // </a>
  );
}