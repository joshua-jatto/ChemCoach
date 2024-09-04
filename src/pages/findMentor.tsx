import { useState, useEffect } from "react";
import { findMentor } from "../utilities/types";
import applyForMentorship from "../utilities/mentorsData";
import SearchMentors from "../components/searchMentors";
import { useGlobal } from "../context/GlobalContext";
import ApplyForMentorshipModal from "../components/applyForMentorshipModal";


export default function findMentor() {
  const [mentors, setMentors] = useState<findMentor[]>(applyForMentorship);
  const { searched } = useGlobal();
  const [toggleModal, setToggleModal] = useState<boolean>(false);

  useEffect(() => {
    if (searched?.length) setMentors(searched);
  }, [searched]);

  function handleToggleModal(): void {
    return setToggleModal(!toggleModal);
  }

  return (
    <div className="container mx-auto divide-y-4 divide-green-500 p-4">
       {
          toggleModal ? <ApplyForMentorshipModal handleToggleModal={handleToggleModal}/> : null
        }
      <div className="container mx-auto p-2 text-center">
        {" "}
        <h2 className="font-serif text-xl text-blue-500 md:text-4xl lg:text-2xl">
          Find
          <span className="inline-block text-xl font-bold text-green-500 md:text-xl lg:text-2xl">
            ∞
          </span>
          Mentor
        </h2>
        <SearchMentors />
      </div>

      {/* NOTE: USER MUST BE AUTHENTICATED THEN NAVIGATED TO ACCESS THIS PAGE */}

      {mentors &&
        mentors.map((mentor) => {
          return (
            <div
              key={mentor.id}
              className="container mx-auto max-w-xl space-y-3 rounded-lg bg-white p-4 shadow-lg"
            >
              <div className="flex flex-col items-center md:flex-row md:space-x-4">
                <div className="mb-3 flex-shrink-0 md:mb-0">
                  <img
                    src={mentor.picture}
                    alt={mentor.fullName}
                    className="h-20 w-20 rounded-full object-cover shadow-lg ring-2 ring-green-500 md:h-24 md:w-24"
                  />
                </div>
                <div className="flex flex-col text-center md:text-left">
                  <h3 className="text-lg font-bold text-gray-800">
                    {mentor.fullName}
                  </h3>
                  <p className="mt-1 text-xs text-gray-500">
                    <span className="text-gray-700">{mentor.profession}</span> |{" "}
                    {mentor.location}
                  </p>
                  <div className="mt-1">
                    <p className="text-xs text-gray-600">
                      <span className="font-semibold">Experience:</span>{" "}
                      {mentor.experience.join(", ")}
                    </p>
                    <p className="mt-1 text-xs text-gray-400">
                      Languages: {mentor.language?.join(", ")}
                    </p>
                  </div>
                  <div className="mt-2 text-xs text-gray-600">
                    Joined: {mentor.joined}
                  </div>
                </div>
              </div>
              <div className="mt-3 text-center">
                <p className="text-sm text-gray-700">{mentor.aboutSelf}</p>
              </div>
              <div className="mt-3 text-center">
                <button
                  onClick={handleToggleModal}
                  className="w-full rounded-full bg-blue-600 px-4 py-1 text-xs font-semibold text-white shadow-lg transition duration-300 hover:bg-blue-700"
                >
                  Apply
                </button>
              </div>
            </div>
          );
        })}
        
    </div>
  );
}
