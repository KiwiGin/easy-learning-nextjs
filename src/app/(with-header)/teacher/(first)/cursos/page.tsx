'use client';
import Panel from '@/panels/Panel';
import Header from '../../../../../components/Header'
import TeacherSideBar from '../../../../../components/TeacherSideBar'
import { useState } from 'react';
import { usePathname } from 'next/navigation';

export default function CursosPage() {
  const path = usePathname().split('/')[1];
  console.log(path);
  // const [vista, setVista] = useState('datos');
  // console.log(vista);
  // const handleButtonClick = (view: string) => {
  //   console.log(view);
  //   setVista(view);
  // }
  return (
    <>
      <TeacherSideBar page={'home'} />
            <div className='w-full flex flex-col'>
                <div className='w-full'>
                
                <Panel vista={"cursos"} role={path} />
          {/* <div className='w-80 h-fit bg-slate-700'>
              <img src={welcome_student_character} alt="" />
            </div> */}

                </div>
            </div>
      
          

    </>
  )
}
