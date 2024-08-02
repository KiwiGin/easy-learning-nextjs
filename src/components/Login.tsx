"use client";

import {useState, useEffect} from 'react';
import { useRouter } from 'next/navigation'

export default function Login() {
    const router = useRouter()

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [loggedIn, setLoggedIn] = useState(false);
    const [isStudent, setIsStudent] = useState(false);
    const [isTeacher, setIsTeacher] = useState(false);

    const handleUsernameChange = (e:any) => {
        setUsername(e.target.value);
    };

    const handlePasswordChange = (e:any) => {
        setPassword(e.target.value);
    };

    const handleSubmit = (e:any) => {
        e.preventDefault();
        // Perform login logic here
        // Se validan credenciales
        // Se redirige a la página de inicio
        if (username === 'estudiante' && password === 'contraseña') {
            // Si las credenciales son válidas, establece el estado loggedIn a true
            setLoggedIn(true);
            setIsStudent(true);
        }
        if (username === 'docente' && password === 'contraseña') {
            // Si las credenciales son válidas, establece el estado loggedIn a true
            setLoggedIn(true);
            setIsTeacher(true);
        }
    };

    useEffect(() => {
        if (loggedIn) {
            if (isStudent) {
                router.push('/student');
            }
            if (isTeacher) {
                router.push('/teacher/datos');
            }
        }
    }, [loggedIn, isStudent, isTeacher, router]);

    return (
        <div className='flex-col p-4 text-center space-y-8 bg-gradient-to-b from-sky-300 from-80% w-2/5'>

            <form onSubmit={handleSubmit} className='flex flex-col  m-20 items-center'>
            <h1 className='text-white font-bold text-4xl'>INICIO DE SESIÓN</h1>
            <br />
            <br />
                <div className='flex flex-col justify-start items-start w-full'>
                    <label>Institución educativa</label>
                    <br />
                    <select className='h-10'>
                        <option value="option1">I.E.P. MARIA MONTESSORI - UGEL 06</option>
                    </select>
                    <br />
                    <label className='flex flex-col w-full text-left'>
                        Usuario
                        <input type="text" value={username} onChange={handleUsernameChange} className='h-10 px-2 mt-1 bg-transparent border-b border-black focus:outline-none focus:border-blue-500'/>
                    </label>
                    <br />
                    <br />
                    <label className='flex flex-col w-full text-left'>
                        Contraseña
                        <input type="password" value={password} onChange={handlePasswordChange} className='h-10 px-2 mt-1 bg-transparent border-b border-black focus:outline-none focus:border-blue-500'/>
                    </label>
                </div>

                <br />
                <a href="#" className='underline hover:underline-offset-4'>¿No recuerda su contraseña?</a>
                <br />
                <button type="submit" className="h-20 px-6 py-2 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 text-white shadow-md hover:shadow-xl w-4/5 font-bold text-xl">Ingresar</button>
            </form>
        </div>
    );
}