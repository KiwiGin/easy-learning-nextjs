import '../app/globals.css';
import Image from 'next/image';
export default function CardProfile({role}: {role?: string}) {
    console.log(role);
    if (role==='student') {
        return (
            <>
                <div className="flex flex-col h-full justify-center">
                    <div className='flex flex-col justify-center items-center'>
                        <div className='font-[orbitron]'>
                            <h1 className='text-7xl text-black'>BIENVENIDO ALUMNO</h1>
                        </div>
                        <br />
                        <br />
                        <div className="flex flex-row gap-16 justify-center items-center">
                            <div className="flex flex-col justify-center items-center">
                                <div className="w-full mb-5">
                                    <Image src="/img/profile.png" alt="" className="object-cover" width={112} height={112}/>
                                </div>
                                
                            </div>
                            <div className="flex flex-col text-3xl">
                                <div className="mb-5">
                                    <label>Apellidos: </label>
                                    <label>Guzmán Flores</label>
                                </div>
                                <div className="mb-5">
                                    <label>Nombres: </label>
                                    <label>Patrik Harold</label>
                                </div>
                                <div className="mb-5">
                                    <label>Grado: </label>
                                    <label>4to</label>
                                </div>
                                <div className="mb-5">
                                    <label>Sección: </label>
                                    <label>B</label>
                                </div>
                                <div className="mb-5">
                                    <label>Tutor: </label>
                                    <label>Jose, Carrion Burgues</label>
                                </div>
                                <div className="text-blue-700">
                                    <a href="#">Cambiar contraseña</a>
        
                                </div>
                            </div>
        
                        </div>
                    </div>
                    
                </div>
            </>
        )
    }else if (role==='teacher') {
        return (
            <>
                <div className="flex flex-col h-full justify-center">
                    <div className='flex flex-col justify-center items-center'>
                        <div className='font-[orbitron]'>
                            <h1 className='text-7xl text-black'>BIENVENIDO DOCENTE</h1>
                        </div>
                        <br />
                        <br />
                        <div className="flex flex-row gap-16 justify-center items-center">
                            <div className="flex flex-col justify-center items-center">
                                <div className="w-full mb-5">
                                    <Image src="/img/profile.png" alt="" className="object-cover" width={112} height={112}/>
                                </div>
                                
                            </div>
                            <div className="flex flex-col text-3xl uppercase">
                                <div className="mb-5">
                                    <label>Apellidos: </label>
                                    <label>Carrión Burgues</label>
                                </div>
                                <div className="mb-5">
                                    <label>Nombres: </label>
                                    <label>Jose</label>
                                </div>
                                <div className="mb-5">
                                    <label>Codigo de docente: </label>
                                    <label>1202375552308</label>
                                </div>
                                <div className="mb-5">
                                    <label>Tutor: </label>
                                    <label>4to B</label>
                                </div>
                                <div className="text-blue-700">
                                    <a href="#">Cambiar contraseña</a>
        
                                </div>
                            </div>
        
                        </div>
                    </div>
                    
                </div>
            </>
          )
    }
  
}
