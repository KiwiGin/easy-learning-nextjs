'use client'

import Image from "next/image";
import { useRouter, usePathname } from 'next/navigation'

export default function QuestionManagement() {
  const router = useRouter();
  const pathname = usePathname()

  const handleClick = (path:string) => {
    //add the path to the current URL instead of replacing it
    router.push(pathname + path);
  };

  return (
    <>
      <div className="bg-lime-100 h-full">
        <h1 className="text-black text-2xl font-bold p-4">Gestión de Preguntas</h1>
        <div className="grid grid-cols-2 gap-96 p-4">
          <div className="hover:cursor-pointer" onClick={() => handleClick('/storage_questions')}>
            <Image src="/question_management/banco_preguntas.svg" alt="" width={250} height={250} />
            <p>Banco de Preguntas</p>
          </div>
          <div className="hover:cursor-pointer" onClick={() => handleClick('/create_question')}>
            <Image src="/question_management/crear_pregunta.svg" alt="" width={250} height={250} />
            <p>Crear Pregunta</p>
          </div>
          
        </div>
      </div>
    </>
  );
}
