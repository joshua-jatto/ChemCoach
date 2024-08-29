import  { useState } from 'react'
import { findMentor, applyForMentorship } from '../utilities/types'
export default function findMentor() {
  const [mentors, setMentors] = useState<findMentor[]>(applyForMentorship)
  return (
    <div className='container mx-auto p-4 divide-y-4 divide-green-500 '>
      <div   className='container mx-auto p-2 text-center'> <h2 className="text-xl md:text-4xl lg:text-2xl text-blue-500 font-serif">
  Find<span className="text-xl md:text-xl lg:text-2xl text-green-500 font-bold inline-block">∞</span>Mentor
</h2></div>
     

      {
        mentors && mentors.map(mentor => {
         return<div key={mentor.id} className="container max-w-xl p-4 bg-white shadow-lg rounded-lg space-y-3 mx-auto">
         <div className="flex flex-col md:flex-row items-center md:space-x-4">
           <div className="flex-shrink-0 mb-3 md:mb-0">
             <img src={mentor.picture} alt={mentor.fullName} className="w-20 h-20 md:w-24 md:h-24 rounded-full object-cover ring-2 ring-green-500 shadow-lg" />
           </div>
           <div className="flex flex-col text-center md:text-left">
             <h3 className="text-lg font-bold text-gray-800">
               {mentor.fullName}
             </h3>
             <p className="text-xs text-gray-500 mt-1">
               <span className="text-gray-700">{mentor.profession}</span> | {mentor.location}
             </p>
             <div className="mt-1">
               <p className="text-xs text-gray-600">
                 <span className="font-semibold">Experience:</span> {mentor.experience.join(', ')}
               </p>
               <p className="text-xs text-gray-400 mt-1">
                 Languages: {mentor.language?.join(', ')}
               </p>
             </div>
             <div className="text-xs text-gray-600 mt-2">
               Joined: {mentor.joined}
             </div>
           </div>
         </div>
         <div className="text-center mt-3">
           <p className="text-sm text-gray-700">
             {mentor.aboutSelf}
           </p>
         </div>
         <div className="text-center mt-3">
           <button className="px-4 py-1 bg-blue-600 text-white font-semibold text-xs w-full rounded-full shadow-lg hover:bg-blue-700 transition duration-300">
             Apply
           </button>
         </div>
       </div>
       
       
})
      }

    </div>


    
  )
}
