import { ReactNode, useEffect, useRef } from 'react'
import './mainWrapper.scss';
import gsap from 'gsap';

interface Props {
    children?: ReactNode;
}

const MainWrapper = ({ children }: Props)=> {
  // 추후 애니메이션 도입
  const ref = useRef<HTMLElement>(null);
  return (
    <main ref={ref} className='main_container'>
      {children}
    </main>
  )
}

export default MainWrapper;