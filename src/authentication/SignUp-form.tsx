import { useState } from "react";
import { Link } from "react-router-dom";

export default function SignUpForm() {
  const [userEmail, setUserEmail] = useState<string>("");
  const [userPassword, setUserPassword] = useState<string>("");
  const [userConfirmPassword, setUserConfirmPassword] = useState<string>("");

  const [selectedOption, setSelectedOption] = useState("mentee");
  // const [errorMsg, setErrorMsg] = useState("");
  // const [loading, setLoading] = useState(false);
  // const navigate = useNavigate();
  // const { signup, userName, setUserName,setUserCredential, currentUser, updateProfile, userCredential} =
  // useAuth();

  //  function handleSignUp(e) {
  //   e.preventDefault();
  //   console.log(userEmail, userPassword, userConfirmPassword);
  //   if (userPassword !== userConfirmPassword) {
  //     setErrorMsg("Passwords do not match");
  //     return;
  //   }

  //   try {
  //     setLoading(true);

  //      signup(userEmail, userPassword, userName);

  //     // Update user profile with display name
  //     // console.log(user, 'userCredential.user')
  //     // await updateProfile(userCredential.user, {

  //     //   displayName: userName,
  //     // });

  //     // console.log("Signing up: ", userEmail);
  //     setLoading(false);
  //     navigate("/");
  //     // console.log(
  //     //   "Signing up: SUCESSFUL, proceed to Login ",
  //     //   userEmail,
  //     //   userName
  //     // );
  //   } catch (error) {
  //     console.error("error signing in FAILED!:", error.message);
  //     setLoading(false);
  //   }
  // }

  return (
    <div className="mx-auto mt-10 max-w-md rounded-lg bg-white p-6 shadow-md">
      <header className="mb-6 text-center">
        <h2 className="font-serif text-4xl text-blue-500">
          Sign
          <span className="inline-block text-2xl font-bold text-green-500">
            ∞
          </span>
          up
        </h2>
        <div className="mt-4 text-center">
          <p>
            Already a Member?{" "}
            <Link to="/login" className="text-blue-500 hover:underline">
              Log in
            </Link>
          </p>
        </div>
      </header>
      {/* {errorMsg && (
    <div className="mb-4 p-2 border-4 border-red-500 text-red-500">
      {errorMsg}
    </div>
  )} */}
      <form className="my-5 space-y-4">
        <input
          type="text"
          name="name"
          placeholder="Your name"
          required
          className="w-full rounded-md border border-gray-300 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <input
          type="email"
          name="userEmail"
          id="userEmail"
          value={userEmail}
          placeholder="Enter Email..."
          onChange={(e) => setUserEmail(e.target.value)}
          autoComplete="userEmail"
          className="w-full rounded-md border border-gray-300 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <input
          type="password"
          name="password"
          placeholder="Enter password..."
          value={userPassword}
          onChange={(e) => setUserPassword(e.target.value)}
          autoComplete="current-password"
          className="w-full rounded-md border border-gray-300 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <input
          type="password"
          name="confirmPassword"
          placeholder="Confirm password..."
          value={userConfirmPassword}
          onChange={(e) => setUserConfirmPassword(e.target.value)}
          autoComplete="current-password"
          className="w-full rounded-md border border-gray-300 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />

        {/* Radio Button Group */}
        <div className="flex flex-col space-y-2">
          <p className="text-sm font-light text-gray-500">Choose an Option</p>
          <div className="flex flex-row gap-5 items-center">
            <div className="flex flex-row items-center">
              <input
                type="radio"
                id="mentee"
                name="customRadio"
                value="mentee"
                checked={selectedOption === "mentee"}
                onChange={() => setSelectedOption("mentee")}
                className="hidden"
              />
              <label
                htmlFor="mentee"
                className={`flex cursor-pointer items-center space-x-2 rounded-lg ${
                  selectedOption === "mentee"
                    ? "border-blue-600"
                    : "border-gray-300"
                } transition duration-200 ease-in-out`}
              >
                <span
                  className={`inline-block h-4 w-4 rounded-full border-2 ${
                    selectedOption === "mentee"
                      ? "border-blue-600 bg-blue-600"
                      : "border-gray-300"
                  }`}
                />
                <span className="text-gray-700">Mentee</span>
              </label>
            </div>
            <div className="flex items-center">
              <input
                type="radio"
                id="mentor"
                name="customRadio"
                value="mentor"
                checked={selectedOption === "mentor"}
                onChange={() => setSelectedOption("mentor")}
                className="hidden"
              />
              <label
                htmlFor="mentor"
                className={`flex cursor-pointer items-center space-x-2 rounded-lg ${
                  selectedOption === "mentor"
                    ? "border-blue-600"
                    : "border-gray-300"
                } transition duration-200 ease-in-out`}
              >
                <span
                  className={`inline-block h-4 w-4 rounded-full border-2 ${
                    selectedOption === "mentor"
                      ? "border-blue-600 bg-blue-600"
                      : "border-gray-300"
                  }`}
                />
                <span className="text-gray-700">Mentor</span>
              </label>
            </div>
          </div>
        </div>
        <button className="w-full rounded-md bg-blue-500 px-4 py-2 text-white hover:bg-blue-700 disabled:bg-gray-400">
          Sign up
        </button>
      </form>
    </div>
  );
}
