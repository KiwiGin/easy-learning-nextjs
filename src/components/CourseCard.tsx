import Link from 'next/link';
import Image from 'next/image';
function CourseCard({courseName}: {courseName: string}) {

    // const handleCourseClick = () => {
    //     console.log('click')
    // }

  return (
    <>
    <Link href={`/teacher/cursos/${courseName}/activity_management`}>
        <div className="flex flex-col bg-white rounded-lg shadow-lg w-auto cursor-pointer hover:shadow-2xl transition duration-300 ease-in-out">
            <div className="flex justify-between items-center p-4 bg-[#CC99FF]">
                <div>
                    <h2 className="text-lg font-semibold">{courseName}</h2>
                    <p className="text-sm text-black">4to B</p>
                </div>
                <div>
                    <button className="bg-blue-500 text-white px-4 py-2 rounded-md">Ver</button>
                </div>
            </div>
            <div className="bg-gray-100 p-4">
                <p className="text-sm text-gray-400">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla nec nisi ut odio lacinia sodales. Sed nec nisl nec felis dictum ultricies. Nullam nec purus nec nisi vehicula tincidunt.</p>
            </div>
            <div className='flex flex-row gap-8 justify-end items-center h-full mr-5 py-1'>
                <Image src="/img/usuario.png" alt="" className="object-cover" width={24} height={24}/>
                <Image src="/img/carpeta.png" alt="" className='object-cover' width={24} height={24}/>
            </div>
        </div>
    </Link>
    </>
  )
}

export default CourseCard