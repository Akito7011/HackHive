// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react';
import { FaGithub } from 'react-icons/fa';
import { FcGoogle } from 'react-icons/fc';
import Axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';

const LoginCard = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  Axios.defaults.withCredentials = true;

  const handlesubmit = (e) => {
    e.preventDefault();
    Axios.post('http://localhost:3000/auth/login', {
      email,
      password
    })
      .then((response) => {
        if (response.data.status) {
          // Store user data in local storage
          localStorage.setItem('user', JSON.stringify(response.data.user));
          navigate('/');
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <form
      className="w-[500px] rounded-2xl absolute top-[20vh] left-[10vw] p-0 border-gray-400 border-[1px] font-Nunito"
      onSubmit={handlesubmit}
    >
      <div className="bg-[#1e78ff3e] text-[48px] font-semibold text-center rounded-t-2xl font-Nunito">
        Login
      </div>
      <div>
        <div className="flex flex-row cursor-pointer justify-center items-center gap-4 text-[18px] border-[1px] border-[#8F8F8F] m-auto py-3 w-[430px] my-5 rounded-lg">
          <FcGoogle />
          <p>Continue with Google</p>
        </div>
        <div className="flex flex-row cursor-pointer justify-center items-center gap-4 text-[18px] border-[1px] border-[#8F8F8F] m-auto py-3 w-[430px] my-5 rounded-lg">
          <FaGithub />
          <p>Continue with Github</p>
        </div>
      </div>
      <div className="relative">
        <p className="text-center z-10 w-fit m-auto text-[14px]">OR</p>
        <hr className="absolute left-9 w-[197px] top-[12px] z-0 border-black" />
        <hr className="absolute right-9 w-[197px] top-[12px] z-0 border-black" />
      </div>
      <div>
        <div className="flex flex-col px-9 mb-8 gap-2">
          <label htmlFor="email" className="text-[17px]">
            Email
          </label>
          <input
            type="email"
            autoComplete="off"
            placeholder="Email"
            onChange={(e) => setEmail(e.target.value)}
            className="justify-center items-center bg-transparent gap-4 text-[16px] border-[1px] border-[#8F8F8F] m-auto py-2 px-2 w-[430px] rounded-lg"
          />
        </div>
        <div className="flex flex-col px-9 gap-2">
          <label htmlFor="password" className="text-[17px]">
            Password
          </label>
          <input
            type="password"
            placeholder="*********"
            onChange={(e) => setPassword(e.target.value)}
            className="justify-center bg-transparent items-center gap-4 text-[16px] border-[1px] border-[#8F8F8F] m-auto py-2 px-2 w-[430px] rounded-lg"
          />
        </div>
        <p className="text-right text-[#1E78FF] text-[14px] mx-8 my-0">
          <Link to="/ForgotPassword">Forgot Password?</Link>
        </p>
        <div className="flex flex-row justify-center">
          <button className="justify-center items-center gap-4 text-[16px] text-white bg-[#1E78FF] m-auto py-3 px-2 mt-6 w-[430px] mx-auto rounded-lg font-semibold">
            Login
          </button>
        </div>
        <div>
          <p className="text-right text-[#8F8F8F] text-[14px] mt-2 mx-8 mb-5">
            <Link to="/SignUp" className="text-[#1E78FF]">
              Dont have an Account?
            </Link>
          </p>
        </div>
      </div>
    </form>
  );
};

export default LoginCard;
