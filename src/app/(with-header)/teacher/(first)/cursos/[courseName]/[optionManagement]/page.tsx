'use client';
import Panel from '@/panels/Panel';
import Header from '../../../../../../../components/Header';
import TeacherSideBar from '../../../../../../../components/TeacherSideBar'
import { useState } from 'react';
export default function TeacherManagePage({ params }: { params: { courseName: string, optionManagement: string } }) {
    const path = params.courseName;
    console.log(path);
    // const [vista, setVista] = useState('activity_management');

    const vista = params.optionManagement;
    console.log(vista);
    // const handleButtonClick = (view:string) => {
    //     setVista(view);
    //     console.log(vista);
    // }
    return (
        <>
            <Panel vista={vista} role={path} />
            {/* <div className='w-80 h-fit bg-slate-700'>
                        <img src={welcome_student_character} alt="" />
                        </div> */}
        </>
    )
}
