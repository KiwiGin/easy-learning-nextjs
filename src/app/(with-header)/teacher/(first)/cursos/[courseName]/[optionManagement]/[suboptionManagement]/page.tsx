'use client';
import Panel from '@/panels/Panel';
import Header from '@/components/Header';
import TeacherSideBar from '@/components/TeacherSideBar'
import { useState } from 'react';
export default function SubTeacherManagePage({ params }: { params: { courseName: string, optionManagement: string, suboptionManagement: string } }) {
    const course = params.courseName;
    console.log(course);
    // const [vista, setVista] = useState('activity_management');

    const vista = params.optionManagement;
    console.log(vista);

    const subvista = params.suboptionManagement;
    console.log(subvista);
    // const handleButtonClick = (view:string) => {
    //     setVista(view);
    //     console.log(vista);
    // }
    return (
        <>
            <Panel vista={subvista} role={course} />
            {/* <div className='w-80 h-fit bg-slate-700'>
                        <img src={welcome_student_character} alt="" />
                        </div> */}
        </>
    )
}
