import { ReactNode } from 'react'
import './mainWrapper.scss';

interface Props {
    children?: ReactNode;
}

const MainWrapper = ({ children }: Props)=> {
  return (
    <main className='main_container'>
      {children}
    </main>
  )
}

export default MainWrapper;