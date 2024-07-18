import Image from 'next/image';
import AsideButton from './AsideButton'
import Link from 'next/link'

export default function StudentSideBar() {
  return (
    <aside className="w-96">
      <nav className="flex flex-col gap-4 h-max">
        <ul className="flex flex-col gap-4">
          <AsideButton icon="/test_icon.svg" label="Test" />
          <AsideButton icon="/semanal_test_icon.svg" label="Prueba Semanal" />
          <AsideButton icon="/homework_icon.svg" label="Tarea en casa" />
          {/* <AsideButton
            icon={reinforcement_icon}
            label="Evaluación de reforzamiento"
          /> */}
          <Link href="/word">
          <button className="bg-blue-500 text-white h-9 flex items-center pl-2 gap-3 w-full">Word</button></Link>
          <Link href="/md"><button className="bg-purple-500 text-white h-9 flex items-center pl-2 gap-3 w-full">Markdown</button></Link>
          <Link href="/quiz"><button className="bg-green-500 text-white h-9 flex items-center pl-2 gap-3 w-full">Quiz</button></Link>
        <div className="bg-[#969191] text-white font-bold text-center flex items-center justify-center gap-4 w-96 h-40">
          <Image src="/default_avatar.svg" alt="" className="w-20" width={80} height={80} />
          <div className="flex flex-col">
            <h2>PATRICK GUZMAN</h2>
            <p className="flex justify-center items-center">
              Sin mensajes
              <Image src="/notification_icon.svg" alt="" width={24} height={24}/>
            </p>
          </div>
        </div>
        </ul>
      </nav>
    </aside>
  )
}
