import CarrierSlide from "../components/fieldsSlide";
import BecomeMember from "../components/becomeMember";

export default function Home() {
  return (
    <div className="container mx-auto p-4">
      <div className="flex h-auto flex-col items-center">
        <div className="mt-[4rem] text-center font-serif text-4xl font-semibold text-blue-600">
          Welcome, Great chemist...{" "}
        </div>
        <div className="flex flex-col items-center justify-end md:space-y-10">
          <p className="bg-white p-10 text-center shadow-xl">
            <blockquote>
              ChemCoach is a platform dedicated to fostering mentorship
              relationships between chemistry students and experienced
              professionals. Whether you're seeking guidance or looking to share
              your expertise, ChemCoach is here to help you connect and grow in
              your academic and professional journey.
            </blockquote>
            <br />
            Let's build a better world.
            <br />
            <span className="translate-x-8 text-xs text-green-500">
              {<CarrierSlide />}
            </span>
          </p>

          <BecomeMember />
        </div>
      </div>

      <div className="flex flex-col items-center justify-center bg-white shadow-xl">
        <section className="mb-6 rounded-lg bg-white p-10 shadow-md">
          <h2 className="mb-4 text-3xl font-semibold text-green-500">
            Esteemed Mentor
          </h2>
          <h2 className="mb-4 text-2xl font-semibold text-green-500">
            Why Volunteering to Mentor is Important and Impactful
          </h2>
          <p className="mb-4">
            Volunteering as a mentor is a profoundly impactful way to contribute
            to the future of the chemistry field. By sharing your knowledge and
            experience, you provide students with invaluable guidance that goes
            beyond textbook learning. Here’s why your role as a mentor is so
            crucial:
          </p>
          <ul className="mb-4 list-inside list-disc p-5 text-xs">
            <li className="mb-2">
              <strong>Shape Future Professionals:</strong> Your insights and
              advice can help shape the careers of aspiring chemists. By
              offering practical advice and sharing your journey, you help
              students navigate their academic and career paths with greater
              confidence.
            </li>
            <li className="mb-2">
              <strong>Bridge the Gap:</strong> Mentors bridge the gap between
              academic theory and real-world application. Your real-world
              experience provides students with a deeper understanding of how
              their studies apply to actual chemistry careers, enhancing their
              educational experience.
            </li>
            <li className="mb-2">
              <strong>Inspire and Motivate:</strong> Your passion and dedication
              can inspire students to pursue their goals with enthusiasm. By
              demonstrating commitment and success in your own career, you
              motivate students to strive for excellence.
            </li>
            <li className="mb-2">
              <strong>Build a Support Network:</strong> Mentoring helps create a
              supportive network where students can seek guidance and
              encouragement. This network can be crucial for their personal and
              professional growth, offering support through challenges and
              celebrating successes.
            </li>
            <li className="mb-2">
              <strong>Give Back to the Community:</strong> Volunteering your
              time and expertise is a way to give back to the community that
              supported you. It’s a fulfilling way to contribute to the growth
              and development of the next generation of chemists.
            </li>
          </ul>
          <p className="mb-4">
            By becoming a mentor, you play a vital role in shaping the future of
            chemistry and making a lasting difference in the lives of students.
            Your contribution is not only valued but essential in helping them
            achieve their academic and career goals.
          </p>
        </section>

        <section className="mb-6 rounded-lg bg-white p-6 shadow-md">
          <h2 className="mb-4 text-3xl font-semibold text-blue-500">
            Dearest Mentee
          </h2>
          <h2 className="mb-4 text-2xl font-semibold text-blue-500">
            Why Students Need to Seek Mentorship Early in Their Studies and
            Careers
          </h2>
          <p className="mb-4">
            Seeking mentorship early in your academic journey and career can be
            a game-changer. Mentors provide the guidance, support, and insights
            that are crucial for navigating the complexities of the chemistry
            field. Here’s why starting early is so important:
          </p>
          <ul className="mb-4 list-inside list-disc p-5 text-xs">
            <li className="mb-2">
              <strong>Build a Strong Foundation:</strong> Early mentorship helps
              you build a solid foundation of knowledge and skills. Mentors can
              guide you through fundamental concepts and provide advice on how
              to approach your studies effectively.
            </li>
            <li className="mb-2">
              <strong>Gain Clarity and Direction:</strong> Mentors can help you
              identify your strengths, interests, and potential career paths.
              This clarity allows you to make informed decisions about your
              academic and professional journey, avoiding costly detours.
            </li>
            <li className="mb-2">
              <strong>Access to Opportunities:</strong> Mentors often have
              access to a network of professionals and opportunities that may
              not be readily available to students. Early mentorship can open
              doors to internships, research projects, and other practical
              experiences.
            </li>
            <li className="mb-2">
              <strong>Overcome Challenges:</strong> The academic and career
              paths in chemistry can be challenging. A mentor can provide
              guidance and support when you encounter obstacles, helping you
              navigate difficulties with greater ease and confidence.
            </li>
            <li className="mb-2">
              <strong>Develop Professional Skills:</strong> Beyond academic
              knowledge, mentors help you develop essential professional skills
              such as communication, networking, and problem-solving, which are
              critical for career success.
            </li>
            <li className="mb-2">
              <strong>Boost Confidence and Motivation:</strong> Having a mentor
              who believes in your potential can significantly boost your
              confidence. Early encouragement and support can keep you motivated
              and focused on your goals.
            </li>
          </ul>
          <p className="mb-4">
            By seeking mentorship early, you set yourself up for success. The
            insights and guidance from experienced mentors will not only enhance
            your academic performance but also prepare you for a successful
            career in chemistry.
          </p>
        </section>
        <BecomeMember/>

      </div>
    </div>
  );
}
