import { Link } from 'react-router-dom'
import React from 'react'

export default function BecomeMember() {
  return (
    <div className="justify-cemter flex flex-col items-center justify-center">
            <h2 className="mb-0 mt-4 font-serif text-xl text-blue-500 md:text-2xl lg:text-4xl">
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

              <Link
                to={"/login"}
                className="rounded-md bg-green-500 px-6 py-2 text-white hover:bg-green-700"
              >
                Login
              </Link>
            </div>
          </div>
  )
}
