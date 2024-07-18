import CourseCard from './CourseCard'

export default function CourseSelector() {
  const courseNames = [
    'Matemáticas',
    'Historia',
    'Física',
    'Química',
    'Biología',
    'Lenguaje',
    'Inglés',
    'Educación Física',
    'Arte',
    'Música',
  ]
  return (
    <>
      <div className="flex flex-row gap-52 justify-center m-8">
        <div className="flex flex-row justify-center items-center gap-4">
          <label
            htmlFor="course"
            className="block text-sm font-medium text-gray-700"
          >
            Curso
          </label>
          <select
            id="course"
            name="course"
            className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md"
          >
            {courseNames.map((courseName) => (
              <option key={courseName}>{courseName}</option>
            ))}
          </select>
        </div>

        <div className="flex flex-row justify-center items-center gap-4">
          <label
            htmlFor="grade"
            className="block text-sm font-medium text-gray-700"
          >
            Grado
          </label>
          <select
            id="grade"
            name="grade"
            className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md"
          >
            <option>Primero</option>
            <option>Segundo</option>
            <option>Tercero</option>
            <option>Cuarto</option>
            <option>Quinto</option>
            <option>Sexto</option>
            <option>Septimo</option>
          </select>
        </div>

        <div className="flex flex-row justify-center items-center gap-4">
          <label
            htmlFor="section"
            className="block text-sm font-medium text-gray-700"
          >
            Sección
          </label>
          <select
            id="section"
            name="section"
            className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md"
          >
            <option>A</option>
            <option>B</option>
            <option>C</option>
            <option>D</option>
            <option>E</option>
            <option>F</option>
            <option>G</option>
          </select>
        </div>
      </div>
      <div className="grid grid-cols-[repeat(auto-fill,_minmax(200px,_1fr))] gap-4 overflow-auto h-[580px] w-full list-none m-0 p-0 px-4">
        {courseNames.map((courseName) => (
          <CourseCard courseName={courseName} key={courseName} />
        ))}
      </div>
    </>
  )
}
