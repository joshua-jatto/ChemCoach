
export default function Navbar() {
  return (
    <nav  className="border-b-black p-4">
        <div className='container mx-auto  flex justify-between items-center'> 
            <div className=' text-green-500 text-3xl font-bold'>Chem<span className="text-xl text-blue-500 font-bold inline-block">∞</span>Coach</div>
            <ul className='hidden md:flex space-x-4 list-none'>
                <li className='text-slate-600 hover:text-black px-3'>⋆About C<span className="font-bold inline-block">∞</span>C</li>
                <li className='text-slate-600 hover:text-black px-3'>⋆Need a Mentor</li>
                <li className='text-slate-600 hover:text-black px-3'>⋆Become a Mentor</li>
                <li className='text-slate-600 hover:text-black px-3'>⋆Support</li>
            </ul>
            <div className="flex space-x-4">
            <button className="md:hidden  text-slate-600 hover:bg-slate-400 px-3">menu</button> {/*on hover show li items // on click show menu} */}
            {/* <div className="w-[40px] h-[40px] border-gray-700 bg-slate-400 rounded-full text-lg font-semibold p-auto">U</div>  */}
            <div className="flex items-center justify-center w-14 h-14 rounded-full bg-blue-500 text-white text-xl font-bold">
  C
</div>
  
            </div>
        </div>
    </nav>
  )
}
