// eslint-disable-next-line no-unused-vars
import React from 'react';
import LoginCard from '../components/LoginCard/LoginCard';
//import LoginC from "../components/LoginCard/LoginC";
import HeadingSection from '../components/HeadingSection/HeadingSection';

const Login = () => {
  return (
    <div className="min-h-screen overflow-hidden h-screen bg-custom-background bg-no-repeat bg-right">
      <HeadingSection title={'Join the Amazing Hackathon Community'} />
      <LoginCard />
    </div>
  );
};

export default Login;
