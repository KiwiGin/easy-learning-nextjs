'use client'

import Image from "next/image";
import { useRouter, usePathname } from 'next/navigation'

export default function ActivityManagement() {
  const router = useRouter();
  const pathname = usePathname()

  const handleClick = (path:string) => {
    //add the path to the current URL instead of replacing it
    router.push(pathname + path);
  };

  return (
    <>
      <div className="bg-lime-100 h-full">
        <h1 className="text-black text-2xl font-bold p-4">Gestión de Evaluaciones</h1>
        <div className="grid grid-cols-3 gap-4 p-4">
          <div className="hover:cursor-pointer" onClick={() => handleClick('/test_weekly_management')}>
            <Image src="/evaluaciones_semanales.svg" alt="" width={250} height={250} />
            <p>Evaluaciones Semanales</p>
          </div>
          <div className="hover:cursor-pointer" onClick={() => handleClick('/homework_management')}>
            <Image src="/tarea_domiciliaria.svg" alt="" width={250} height={250} />
            <p>Tareas Domiciliarias</p>
          </div>
          <div className="hover:cursor-pointer" onClick={() => handleClick('/reforzamiento_management')}>
            <Image src="/reforzamiento.svg" alt="" width={250} height={250} />
            <p>Reforzamiento</p>
          </div>
        </div>
      </div>
    </>
  );
}
