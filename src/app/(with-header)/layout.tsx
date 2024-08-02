import Header from "@/components/Header";
import TeacherSideBar from "@/components/TeacherSideBar";

export default function MainLayout({ children }: { children: React.ReactNode }) {
    return (
        <>
            <div className='h-full flex flex-col'>
                <Header />
                <div className='flex-grow flex flex-row'>
                    {children}

                </div>
            </div>
        </>
    )
}   