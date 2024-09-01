import BecomeMentorForm from "../components/becomeMentorForm";

export default function BecomeMentor() {
  return (
    <div className="mx-auto mt-10 max-w-md rounded-lg bg-white p-6 shadow-md">
    
    <div className="container mx-auto p-2 text-center">
      {" "}
      <h2 className="font-serif text-xl text-blue-500 md:text-4xl lg:text-2xl">
        Become
        <span className="inline-block text-xl font-bold text-green-500 md:text-xl lg:text-2xl">
          ∞
        </span>
        Mentor
      </h2>
    </div>
{/* NOTE: USER MUST BE AUTHENTICATED THEN NAVIGATED TO ACCESS THIS PAGE */}
    <BecomeMentorForm/>
  </div>

  )
}
