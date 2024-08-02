import Link from 'next/link'
import AsideButton from './AsideButton'
import Image from 'next/image';

export default function TeacherSideBar({onButtonClick, page, course}: {onButtonClick?: (view: string) => void; page: string; course?: string}) {
  if(page === 'home'){
    return (
      <aside className="w-96">
        <nav className="flex flex-col gap-4 h-full bg-[#D7E897]">
          <div className="flex flex-col bg-[#96919100] text-white font-bold text-center items-center justify-center gap-4 w-96 h-fit">
            <Image src="/default_avatar.svg" alt="" className="w-2/5 mt-5" width={80} height={80} />
            <div className="flex flex-col">
              <h2>Napoleon Alva, Jorge</h2>
              <p className="flex justify-center items-center">
                Sin mensajes
                <Image src="/notification_icon.svg" alt="" width={24} height={24}/>
              </p>
            </div>
          </div>
          <ul className="flex flex-col gap-4">
            <AsideButton icon="/test_icon.svg" label="Datos" link='/teacher/datos'/>
            <AsideButton icon="/courses_icon.svg" label="Cursos" link='/teacher/cursos' />
            <Link href="/word"><button className="bg-blue-500 text-white h-9 flex items-center pl-2 gap-3 w-full">Word</button></Link>
            <Link href="/md"><button className="bg-purple-500 text-white h-9 flex items-center pl-2 gap-3 w-full">Markdown</button></Link>
            <Link href="/quiz"><button className="bg-green-500 text-white h-9 flex items-center pl-2 gap-3 w-full">Quiz</button></Link>
          </ul>
        </nav>
      </aside>
    )

  }
  else if(page === 'management'){
    return (
      <aside className="w-96">
        <nav className="flex flex-col gap-4 h-full bg-[#D7E897]">
          <ul className="flex flex-col gap-4">
            <AsideButton icon="/test_icon.svg" label="Gestión de evaluaciones" link={`/teacher/cursos/${course}/activity_management`} />
            <AsideButton icon="/questions_icon.svg" label="Gestión de preguntas" link={`/teacher/cursos/${course}/question_management`} />
            <AsideButton icon="/report_icon.svg" label="Reportes" link={`/teacher/cursos/${course}/reports`}/>
            <AsideButton icon="/media_icon.svg" label="Recursos digitales" link='/' />
            {/* <Link to="/word"><button className="bg-blue-500 text-white h-9 flex items-center pl-2 gap-3 w-full">Word</button></Link>
            <Link to="/md"><button className="bg-purple-E500 text-white h-9 flex items-center pl-2 gap-3 w-full">Markdown</button></Link>
            <Link to="/quiz"><button className="bg-green-500 text-white h-9 flex items-center pl-2 gap-3 w-full">Quiz</button></Link> */}
          </ul>
          <div className="flex flex-col bg-[#96919100] text-white font-bold text-center items-center justify-center gap-4 w-96 h-fit">
            <Image src="/default_avatar.svg" alt="" className="w-2/6 mt-5" width={80} height={80} />
            <div className="flex flex-col">
              <h2>Napoleon Alva, Jorge</h2>
              <p className="flex justify-center items-center">
                Sin mensajes
                <Image src="/notification_icon.svg" alt="" width={24} height={24} />
              </p>
            </div>
          </div>
        </nav>
      </aside>
    )
  }
}
