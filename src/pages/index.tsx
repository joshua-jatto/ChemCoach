
export default function Home() {
  return (<div className="container mx-auto">
  <div className="flex flex-col items-center justify-center h-screen">
    <h1 className="mt-15 p-10 text-2xl font-semibold text-center">
      Welcome, great chemist...
    </h1>
    <p className="px-10 text-center">
      ChemCoach is a platform dedicated to fostering mentorship relationships between chemistry students and experienced professionals. Whether you're seeking guidance or looking to share your expertise, ChemCoach is here to help you connect and grow in your academic and professional journey.
      <br />
      Let's build a better world.
    </p>
    <div className="flex space-x-4 mt-10">
      <button className="px-6 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-700">
        Sign Up
      </button>
      <button className="px-6 py-2 bg-green-500 text-white rounded-md hover:bg-green-700">
        Login
      </button>
    </div>
  </div>

  <div className="h-screen bg-slate-300 flex items-center justify-center">
    <p className="text-lg">Content for the next section goes here...</p>
  </div>
</div>

  )
}
