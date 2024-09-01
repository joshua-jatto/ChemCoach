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
      <div className="flex items-center justify-center bg-white shadow-xl ">
      
      <div className="max-w-4xl mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold text-green-500 mb-6">About ChemCoach</h1>
        <p className="mb-6">
            <strong>ChemCoach</strong> is a project inspired by Coding Coach, specifically developed to connect chemistry students with volunteer mentors. This platform aims to provide guidance and support to students by facilitating connections with experienced mentors in the field of chemistry.
        </p>
        <p className="mb-6">
            ChemCoach is designed to mimic the structure of Coding Coach but tailored to bridge the gap in learning and knowledge for chemistry students. The platform includes a landing page, sign-up/login functionality, and various features for both mentors and mentees.
        </p>

        <section className="bg-white shadow-md rounded-lg p-6 mb-6">
            <h2 className="text-2xl font-semibold text-blue-500 mb-4">Mentorship</h2>
            <p className="mb-4">
                At ChemCoach, we believe in the power of mentorship. Our platform connects chemistry students with experienced professionals who can offer valuable insights, answer questions, and provide guidance through academic and career challenges. Mentorship is a crucial component of personal and professional growth, and we are committed to making these connections as effective as possible.
            </p>
        </section>

        <section className="bg-white shadow-md rounded-lg p-6 mb-6">
            <h2 className="text-2xl font-semibold text-blue-500 mb-4">Career Guidance</h2>
            <p className="mb-4">
                Navigating a career in chemistry can be daunting. ChemCoach provides students with access to career guidance from industry professionals who can offer advice on career paths, job opportunities, and skill development. Whether you're looking for advice on graduate school, internships, or entering the workforce, our mentors are here to help you make informed decisions.
            </p>
        </section>

        <section className="bg-white shadow-md rounded-lg p-6 mb-6">
            <h2 className="text-2xl font-semibold text-blue-500 mb-4">Counseling and Support</h2>
            <p className="mb-4">
                Academic and career journeys can be filled with challenges. ChemCoach offers counseling and support to help students manage stress, overcome obstacles, and stay motivated. Our mentors are trained to provide empathetic support and practical advice to help students thrive both academically and personally.
            </p>
        </section>

        <section className="bg-white shadow-md rounded-lg p-6 mb-6">
            <h2 className="text-2xl font-semibold text-blue-500 mb-4">Practical Opportunities</h2>
            <p className="mb-4">
                Gaining practical experience is essential for chemistry students. ChemCoach facilitates access to internships, research opportunities, and hands-on projects that can enhance students' practical skills and build their resumes. Our goal is to connect students with opportunities that align with their interests and career goals.
            </p>
        </section>
      </div>
    </div>
    </div>
  );
}
