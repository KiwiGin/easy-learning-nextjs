'use client';
import Panel from '@/panels/Panel';
import Header from '../../components/Header'
import TeacherSideBar from '../../components/TeacherSideBar'
import { useState } from 'react';
import { usePathname } from 'next/navigation';

export default function TeacherPage() {
  const path = usePathname().split('/').pop();
  console.log(path);
  const [vista, setVista] = useState('datos');
  console.log(vista);
  const handleButtonClick = (view:string) => {
    setVista(view);
    console.log(vista);
  }
  return (
    <>
    <div className='h-full flex flex-col'>
      <Header />
      <div className='flex-grow flex flex-row'>
        <TeacherSideBar onButtonClick={handleButtonClick} page={'home'}/>
        <div className='w-full flex flex-col'>
          <div className='w-full'>
            <Panel vista={vista} role={path}/>
            {/* <div className='w-80 h-fit bg-slate-700'>
              <img src={welcome_student_character} alt="" />
            </div> */}
          </div>
        </div>
        
      </div>
    </div>
    </>
  )
}
