import { useState } from 'react';
import {Link} from 'react-router-dom'
export default function Navbar() {

  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

  // Toggle menu visibility
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  }
  return (
    <nav className="p-2 shadow-md flex justify-center items-center hover:shadow-lg bg-white">
    <div className="container mx-auto flex justify-between items-center">
      <Link to={'/'} className="text-green-500 text-3xl font-bold">Chem<span className="inline-block text-xl font-bold text-blue-500 md:text-xl lg:text-2xl">∞</span>Coach</Link>
      
      {/* Hamburger Menu for mobile */}
      <button onClick={toggleMenu} className="md:hidden text-slate-600 hover:bg-slate-400 px-3 focus:outline-none" id="menu-btn">
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
        </svg>
      </button>
  
      {/* Menu Items */}
      <ul className="hidden md:flex space-x-4 list-none" id="menu-items">
        <li><Link to={'/about-us'} className="text-slate-600 hover:text-black px-3">About C<span className="font-bold inline-block">∞</span>C</Link></li>
        <li><Link to={'/find-mentor'} className="text-slate-600 hover:text-black px-3">Find a Mentor</Link></li>
        <li><Link to={'/become-mentor'} className="text-slate-600 hover:text-black px-3">Become a Mentor</Link></li>
        <li><Link to={'/support'} className="text-slate-600 hover:text-black px-3">Support</Link></li>
      </ul>
  
      {/* User Icon */}
      <div className="flex items-center space-x-4">
        <div className="flex items-center justify-center size-10 rounded-full bg-blue-500 text-white text-md font-bold">
          CC
        </div>
      </div>
    </div>
  
    {/* Mobile Menu Items */}
    {isMenuOpen && (
        <ul className="absolute top-16 left-0 w-full bg-white shadow-md flex flex-col space-y-2 p-4 md:hidden">
          <li><Link to={'/about-us'} className="text-slate-600 hover:text-black px-3">About C<span className="font-bold inline-block">∞</span>C</Link></li>
          <li><Link to={'/find-mentor'} className="text-slate-600 hover:text-black px-3">Find a Mentor</Link></li>
          <li><Link to={'/become-mentor'} className="text-slate-600 hover:text-black px-3">Become a Mentor</Link></li>
          <li><Link to={'/support'} className="text-slate-600 hover:text-black px-3">Support</Link></li>
        </ul>
      )}
  </nav>
  
  )
}
