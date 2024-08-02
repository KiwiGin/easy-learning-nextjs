'use client';
import Header from '../../../components/Header'
import StudentSideBar from '../../../components/StudentSideBar'
import CardProfile from '../../../components/CardProfile'
import { usePathname } from 'next/navigation';
// import welcome_student_character from '../assets/welcome_student_character.svg'

export default function StudentPage() {
  const path = usePathname().split('/').pop();
  console.log(path);
  return (
    <>
      <StudentSideBar />
      <div className='w-full flex flex-col bg-slate-200'>
        <div className='h-full'>
          <CardProfile role={path} />
          {/* <div className='w-80 h-fit bg-slate-700'>
              <img src={welcome_student_character} alt="" />
            </div> */}
        </div>
      </div>
    </>
  )
}