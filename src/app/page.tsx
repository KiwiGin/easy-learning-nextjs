import Login from '../components/Login'
import Image from 'next/image';
export default function LoginPage() {

  console.log('LoginPage')

  return (
    <div className="">
      <div className="h-dvh flex flex-col justify-center p-4  bg-white">
        <div className="flex flex-row-reverse justify-center w-full">
          <Login />
          <div className="">
            <Image
              className="object-fit"
              src="/img/TESIS_1.png"
              alt="Login Image"
              width="500" // Specify the width of the image
              height="500" // Specify the height of the image
            />
          </div>
        </div>
      </div>
      <footer className="flex justify-center p-4 text-white bg-cyan-500">
        <p>EASY LEARNING 2023</p>
      </footer>
    </div>
  )
}
