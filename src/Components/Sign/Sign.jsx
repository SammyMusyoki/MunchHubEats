import React, { useState } from 'react'
import { useUserAuth } from '../../utils/UserAuthContext';
import { useNavigate } from 'react-router-dom';

const Sign = () => {
    const { registerUser } = useUserAuth()
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirm_password, setConfirmPassword] = useState("");
    const [userRole, setUserRole] = useState("customer");
    const [blocked, setBlocked] = useState(null)
    const [activity, setActivity] = useState(null)


    const navigate = useNavigate()


    const userInfo = {
        username,
        email,
        password,
        confirm_password,
        type: userRole,
        blocked,
        activity
    };
    const handleRegister = (e) => {
        e.preventDefault();
        registerUser(userInfo, navigate);
    };
        const handleNavigateLogin = () => {
          window.location.href = "login";
        };
  return (
    <React.Fragment>
      <div className="w-96 mx-auto py-16">
        <div className="text-center my-3">
          <h1 className="text-2xl font-bold text-center">
            MunchHub Registration
          </h1>
          <p>
            Already have an account?{" "}
            <button
              type="button"
              onClick={handleNavigateLogin}
              className="text-yellow-400"
            >
              Login
            </button>
          </p>
        </div>
        <form className="border p-8">
          <div className="relative z-0 w-full mb-6 group">
            <input
              onChange={(e) => setUsername(e.target.value)}
              type="text"
              name="username"
              id="floating_first_name"
              className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-yellow-400 focus:outline-none focus:ring-0 focus:border-yellow-400 peer"
              placeholder=" "
              required
            />
            <label
              htmlFor="username"
              className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-yellow-400 peer-focus:dark:text-yellow-400 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              UserName
            </label>
          </div>
          <div className="relative z-0 w-full mb-6 group">
            <input
              onChange={(e) => setEmail(e.target.value)}
              type="email"
              name="email"
              id="floating_email"
              className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-yellow-400 focus:outline-none focus:ring-0 focus:border-yellow-400 peer"
              placeholder=" "
              required
            />
            <label
              htmlFor="email"
              className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-yellow-400 peer-focus:dark:text-yellow-400 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              Email address
            </label>
          </div>
          <div className="relative z-0 w-full mb-6 group">
            <input
              onChange={(e) => setPassword(e.target.value)}
              type="password"
              name="password"
              id="floating_password"
              className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-yellow-400 focus:outline-none focus:ring-0 focus:border-yellow-400 peer"
              placeholder=" "
              required
            />
            <label
              htmlFor="password"
              className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-yellow-400 peer-focus:dark:text-yellow-400 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              Password
            </label>
          </div>
          <div className="relative z-0 w-full mb-6 group">
            <input
              onChange={(e) => setConfirmPassword(e.target.value)}
              type="password"
              name="confirm_password"
              id="floating_repeat_password"
              className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-yellow-400 focus:outline-none focus:ring-0 focus:border-yellow-400 peer"
              placeholder=" "
              required
            />
            <label
              htmlFor="floating_repeat_password"
              className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-yellow-400 peer-focus:dark:text-yellow-400 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              Confirm password
            </label>
          </div>
          <div className="relative z-0 w-full mb-6 ">
            <select className="w-full border text-sm outline-none" value={userRole} onChange={(e) => setUserRole(e.target.value)}>
              {/* <option className='text-sm' value="">Select Role</option> */}
              <option className='text-sm' value="owner">Restaurant Owner</option>
              <option className='text-sm' value="employee">Employee</option>
              <option className='text-sm' value="customer">Customer</option>
            </select>
          </div>
          <button
            type="button"
            onClick={handleRegister}
            className="text-white bg-yellow-400 hover:bg-yellow-500 focus:ring-4 focus:outline-none focus:ring-yellow-400 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-yellow-400 dark:hover:bg-yellow-400 dark:focus:ring-yellow-400"
          >
            Register
          </button>
        </form>
      </div>
    </React.Fragment>
  );
}

export default Sign