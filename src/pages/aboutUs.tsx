export default function AboutUs() {
  return (
    <div className="container mx-auto divide-y-2 divide-green-500 p-4">
      <div className="container mx-auto p-2 text-center">
        {" "}
        <h2 className="font-serif text-xl text-blue-500 md:text-4xl lg:text-2xl">
          About
          <span className="inline-block text-xl font-bold text-green-500 md:text-xl lg:text-2xl">
            ∞
          </span>
          Us
        </h2>
      </div>
      <div>
        <p className="line-clamp-10 md:line-clamp-20 ">
        ChemCoach
ChemCoach is a project inspired by Coding Coach, specifically developed to connect chemistry students with volunteer mentors. This platform aims to provide guidance and support to students by facilitating connections with experienced mentors in the field of chemistry.

Project Overview
ChemCoach is designed to mimic the structure of Coding Coach but tailored to bridge the gap in learning and knowlegde of chemistry students. The platform includes a landing page, sign-up/login functionality, and various features for both mentors and mentees.
        </p>
      </div>
    </div>
  );
}
