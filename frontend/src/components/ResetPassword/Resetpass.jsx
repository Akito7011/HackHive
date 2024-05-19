// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react';
import Axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';

const ResetPass = () => {
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error] = useState('');
  const [success, setSuccess] = useState(false);
  const { token } = useParams();
  const navigate = useNavigate();
  Axios.defaults.withCredentials = true;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      alert('Passwords do not match');
      return;
    }
    Axios.post(`http://localhost:3000/auth/reset-password/${token}`, {
      password
    })
      .then((response) => {
        if (response.data.status) {
          setSuccess(true);
          setTimeout(() => {
            setSuccess(false);
            navigate('/login');
          }, 3000);
        }
        console.log(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <form
      className="w-[500px] rounded-2xl absolute top-[20vh] left-[10vw] p-0 border-gray-400 border-[1px] font-Nunito"
      onSubmit={handleSubmit}
    >
      <div className="bg-[#1e78ff3e] text-[48px] font-semibold text-center rounded-t-2xl font-Nunito">
        Reset Password
      </div>
      <div>
        <div className="flex flex-col px-9 mb-8 gap-2">
          <label htmlFor="password" className="text-[17px]">
            Password
          </label>
          <input
            type="password"
            autoComplete="off"
            placeholder="New Password"
            onChange={(e) => setPassword(e.target.value)}
            className="justify-center items-center bg-transparent gap-4 text-[16px] border-[1px] border-[#8F8F8F] m-auto py-2 px-2 w-[430px] rounded-lg"
          />
        </div>
        <div className="flex flex-col px-9 mb-8 gap-2">
          <label htmlFor="confirmPassword" className="text-[17px]">
            Confirm Password
          </label>
          <input
            type="password"
            autoComplete="off"
            placeholder="Confirm New Password"
            onChange={(e) => setConfirmPassword(e.target.value)}
            className="justify-center items-center bg-transparent gap-4 text-[16px] border-[1px] border-[#8F8F8F] m-auto py-2 px-2 w-[430px] rounded-lg"
          />
        </div>
        {error && <p className="text-red-500 text-center">{error}</p>}
        {success && (
          <p className="text-green-500 text-center">
            Password changed successfully!
          </p>
        )}
        <div className="flex flex-row justify-center">
          <button className="justify-center items-center gap-4 text-[16px] text-white bg-[#1E78FF] m-auto py-3 px-2 mt-6 w-[430px] mx-auto rounded-lg font-semibold">
            Reset Password
          </button>
        </div>
      </div>
    </form>
  );
};

export default ResetPass;
