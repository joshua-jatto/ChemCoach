import  { useState, ChangeEvent } from "react";
import applyForMentorship from "../utilities/mentorsData";
import { useGlobal } from "../context/GlobalContext";

export default function SearchMentors() {
  const [search, setSearch] = useState<string>("");
  const { setSearched} = useGlobal();

  function findSearch(e: ChangeEvent<HTMLInputElement>) {
    let { value } = e.target;
    setSearch(value);
    const searchVal = applyForMentorship.filter((mentor) => {
      return mentor.profession.toLowerCase().includes(value.toLowerCase()); //search applyForMentorship[] by profession
    });
    setSearched(searchVal) //set enter values as searched //
  }
  return (
    <>
      <input
        type="text"
        placeholder=" 🔎Try Searching fields or Location "
        value={search}
        onChange={(e) => findSearch(e)}
        className=" w-[80%] md:w-[30%] ring-2 rounded-sm my-5"
      />
    </>
  );
}
