'use client'

import Image from "next/image";
import { useRouter, usePathname } from 'next/navigation'

export default function TestWeeklyManagement() {
  const router = useRouter();
  const pathname = usePathname()

  const handleClick = (path:string) => {
    //add the path to the current URL instead of replacing it
    router.push(pathname + path);
  };

  return (
    <>
      <div className="bg-lime-100 h-full">
        <h1 className="text-black text-2xl font-bold p-4">Evaluaciones Semanales</h1>
        <div className="grid grid-cols-3 gap-4 p-4">
          <div className="hover:cursor-pointer" onClick={() => handleClick('/create_test_weekly')}>
            <Image src="/test_weekly/crear_evaluacion_semanal.svg" alt="" width={250} height={250} />
            <p>Crear Evaluación Semanal</p>
          </div>
          <div className="hover:cursor-pointer" onClick={() => handleClick('/storage_test_weekly')}>
            <Image src="/test_weekly/evaluaciones_semanales_anteriores.svg" alt="" width={250} height={250} />
            <p>Evaluaciones Semanales Anteriores</p>
          </div>
          <div className="hover:cursor-pointer" onClick={() => handleClick('/asign_test')}>
            <Image src="/test_weekly/asignar_evaluacion.svg" alt="" width={250} height={250} />
            <p>Asignar Evaluación</p>
          </div>
        </div>
      </div>
    </>
  );
}
