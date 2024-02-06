"use client"
// Importing required libraries
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { FaBars, FaTimes } from 'react-icons/fa';
import { ModeToggle } from '@/components/theme-toggle';


const Header: React.FC = () => {
  const [open, setOpen] = useState(false);
  const router = useRouter();
  const navigateTo = (route: string) => {
    router.push(route);
    setOpen(false);
  };

  return (
    <header className="p-5 text-black w-full bg-background text-foreground">
      <div className="max-w-5xl mx-auto flex justify-between">
        <div className="flex justify-center items-center" onClick={() => navigateTo('/')}>
          <h1 className="cursor-pointer">Re-curso</h1>
        </div>
        <div className="hidden md:flex">
          <button type="button" onClick={() => router.push('/create')} className="mr-5 hover:text-gray-900">
            Create
          </button>
          <button type="button" onClick={() => router.push('/explore')} className="mr-5 hover:text-gray-900">
            Explore
          </button>
          <ModeToggle />
        </div>
        <div className="md:hidden">
          <ModeToggle />
          <button onClick={() => setOpen(!open)} className='ml-2'>
            {open ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>
        </div>
      </div>
      {open && (
        <div className="md:hidden">
          <p onClick={() => navigateTo('/')} className="cursor-pointer mx-2">Create</p>
          <p onClick={() => navigateTo('/about')} className="cursor-pointer mx-2">Explore</p>
        </div>
      )}
    </header>
  )
}

export default Header;
