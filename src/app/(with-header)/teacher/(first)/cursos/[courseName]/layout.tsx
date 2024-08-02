'use client';

import TeacherSideBar from "@/components/TeacherSideBar";

export default function Layout({ children, params }: { children: React.ReactNode; params: {courseName: string} }) {
    let courseN = params.courseName;
    console.log(courseN);
    return (
        <>
            <TeacherSideBar page={'management'} course={courseN}/>
                <div className='w-full flex flex-col'>
                    <div className='w-full'>
                        {children}
                    </div>
                </div>
        </>
    )
}