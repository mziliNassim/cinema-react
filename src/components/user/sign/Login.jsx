import React from "react";
import { Link } from "react-router-dom";

const Login = () => {
  const handelSubmit = (e) => {
    e.preventDefault();
    alert("d<g");
  };

  return (
    <>
      <div className="min-h-[85vh] flex items-center justify-center p-2">
        <form
          onSubmit={handelSubmit}
          className="w-full p-10 mx-auto border md:w-8/12 xl:w-5/12 rounded-3xl border-cyan-400"
        >
          <h1 className="mb-8 text-5xl font-semibold text-cyan-400">Login!</h1>
          <p className="mb-5 font-semibold text-gray-300 text-balanc">
            Don't have Acount{" "}
            <Link to="/user/register" className="underline text-cyan-800">
              Sign in
            </Link>
          </p>

          {/* Email */}
          <div class="relative z-0 w-full mb-8 group">
            <input
              type="email"
              name="floating_email"
              id="floating_email"
              class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              placeholder=" "
              required
            />
            <label
              for="floating_email"
              class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              Email address
            </label>
          </div>

          {/* password */}
          <div class="relative z-0 w-full mb-8 group">
            <input
              type="password"
              name="floating_password"
              id="floating_password"
              class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              placeholder=" "
              required
            />
            <label
              for="floating_password"
              class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              Password
            </label>
          </div>

          {/* Terms & conditions */}
          <div class="flex items-start mb-5">
            <div class="flex items-center h-5">
              <input
                id="remember"
                type="checkbox"
                value=""
                class="w-4 h-4 border border-gray-300 rounded  bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800"
                required
              />
            </div>
            <label
              for="remember"
              class="ms-2 text-sm font-medium text-gray-500 "
            >
              Remember me!
            </label>
          </div>

          {/* Submit Button */}
          <div class="w-full group text-end">
            <button
              type="submit"
              class="text-white bg-cyan-400 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-cyan-400 dark:hover:bg-cyan-700 dark:focus:ring-bg-cyan-800"
            >
              Sign In
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default Login;
