import { useState } from "react";
import { Link } from "react-router-dom";
export default function LoginForm() {
  const [userEmail, setUserEmail] = useState<string>("");
  const [userPassword, setUserPassword] = useState<string>("");

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
          Log
          <span className="inline-block text-2xl font-bold text-green-500">
            ∞
          </span>
          in
        </h2>
        <div className="mt-4 text-center">
          <p>
            Not a Member?{" "}
            <Link to={'/sign-up'} className="text-blue-500 hover:underline">
              Sign up
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
        <button className="w-full rounded-md bg-blue-500 px-4 py-2 text-white hover:bg-blue-700 disabled:bg-gray-400">
          Sign up
        </button>
      </form>
    </div>
  );
}
