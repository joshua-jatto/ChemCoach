import { Link } from "react-router-dom";
import CarrierSlide from "../components/fieldsSlide";

export default function Home() {
  return (
    <div className="container mx-auto p-4">
      <div className="flex h-screen flex-col items-center">

        <div className="mt-[4rem] text-blue-600 text-center font-serif text-4xl font-semibold">
          Welcome, Great chemist...{" "}

        </div>
        <div className="flex flex-col items-center justify-end md:space-y-10">
          <p className=" bg-white p-10 text-center shadow-xl">
            ChemCoach is a platform dedicated to fostering mentorship
            relationships between chemistry students and experienced
            professionals. Whether you're seeking guidance or looking to share
            your expertise, ChemCoach is here to help you connect and grow in
            your academic and professional journey.
            <br />
            Let's build a better world.
            <br />
      <span className="text-xs translate-x-8 text-green-500">{<CarrierSlide/>}</span>

          </p>
          
          <div className="justify-cemter flex flex-col items-center justify-center">
            <h2 className="mt-4 mb-0 text-xl font-serif text-blue-500 md:text-2xl lg:text-4xl">
              Become
              <span className="inline-block text-xl font-bold text-green-500 md:text-xl lg:text-2xl">
                ∞
              </span>
              Member
            </h2>
            <div className="m-5 mr-10 flex space-x-4">
              <Link
                className="rounded-md bg-blue-500 px-6 py-2 text-white hover:bg-blue-700"
                to={"/sign-up"}
              >
                Sign Up
              </Link>

              <Link to={"/login"} className="rounded-md bg-green-500 px-6 py-2 text-white hover:bg-green-700">
                Login
              </Link>
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
