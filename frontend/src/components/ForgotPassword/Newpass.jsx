// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react';
import Axios from 'axios';
//import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

const Newpass = () => {
  const [email, setEmail] = useState('');
  const navigate = useNavigate();
  Axios.defaults.withCredentials = true;
  const handlesubmit = (e) => {
    e.preventDefault();
    Axios.post('http://localhost:3000/auth/forgot-password', {
      email
    })
      .then((response) => {
        if (response.data.status) {
          alert('check your email');
          navigate('/login');
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <form
      className="w-[500px] rounded-2xl absolute top-[20vh] left-[10vw] p-0 border-gray-400 border-[1px] font-Nunito  "
      onSubmit={handlesubmit}
    >
      <div className="bg-[#1e78ff3e] text-[48px] font-semibold text-center rounded-t-2xl font-Nunito  ">
        Forgot Password
      </div>
      <div>
        <div className="flex flex-col px-9 mb-8 gap-2 ">
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
          <div className="flex flex-row justify-center">
            <button className="justify-center items-center gap-4 text-[16px] text-white bg-[#1E78FF] m-auto py-3 px-2 mt-6 w-[430px] mx-auto rounded-lg font-semibold">
              Forgot Password
            </button>
          </div>
        </div>
      </div>
    </form>
  );
};

export default Newpass;
