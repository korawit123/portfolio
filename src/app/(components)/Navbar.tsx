'use client'
import Link from "next/link"
import { useTheme } from '../context/ThemeContext'
import { SunIcon, MoonIcon, Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
export const Navbar = () => {
    const { theme, toggleTheme } = useTheme();

  return (
    <header className='sticky z-30 top-3 text-[#eef2f0]  dark:text-black'>
        <div className="mx-auto max-w-6xl mt-10 dark:bg-white flex content-center justify-center
                        bg-black h-14 rounded-full px-10 opacity-80">
            <nav className='flex flex-wrap content-center justify-between w-full'>
                <Link  className='text-xl font-medium w-[20%]' href=""><h1>Korawit Pimyotha</h1></Link>
                <ul className='flex gap-x-1 font-medium py-0.5'>
                    <li className='px-5 text-lg'><Link href="">About Me</Link></li>
                    <li className='px-5 text-lg'><Link href="">Experience</Link></li>
                    <li className='px-5 text-lg'><Link href="">Projects</Link></li>
                    <li className='px-5 text-lg'><Link href="">Skills</Link></li>
                </ul>
                <button className='w-[20%] ' onClick={() => toggleTheme()}>
                    <div className="flex justify-end">
                        {theme === 'dark' ? (
                        <>
                            <SunIcon className="h-5 w-5 " />
                        </>
                        ) : (
                        <>
                            <MoonIcon className="h-5 w-5 " />
                        </>
                        )}
                    </div> 
                </button>
            </nav>
        </div>
       
    </header>
  )
}
