import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className='container mx-auto p-4'>
      <div className="flex h-screen flex-col items-center">
        <div className="mt-[4rem] text-center text-4xl font-semibold">
          Welcome, great chemist... <span className="text-gray-500 text-xl">[Bio-chem]</span>
        </div>
        <div className="flex flex-col items-center justify-end md:space-y-10">
          <p className="p-10  text-center">
            ChemCoach is a platform dedicated to fostering mentorship
            relationships between chemistry students and experienced
            professionals. Whether you're seeking guidance or looking to share
            your expertise, ChemCoach is here to help you connect and grow in
            your academic and professional journey.
            <br />
            Let's build a better world.
          </p>
          <div className="flex flex-col items-center justify-evenly">
            <p className="text-4xl">Become a member:</p>
            <div className="m-10 flex space-x-4">
              <Link className="rounded-md bg-blue-500 px-6 py-2 text-white hover:bg-blue-700"
              to={"/sign-up"}>
                Sign Up
             </Link>
             
              <button className="rounded-md bg-green-500 px-6 py-2 text-white hover:bg-green-700">
                Login
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="flex h-screen items-center justify-center bg-white shadow-xl">
        <div className="flex flex-col items-center justify-center">
          <p className="text-4xl">See what our user's are saying:</p>
        </div>
      </div>
    </div>
  );
}
