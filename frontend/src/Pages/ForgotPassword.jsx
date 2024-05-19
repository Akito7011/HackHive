// eslint-disable-next-line no-unused-vars
import React from 'react';
import Newpass from '../components/ForgotPassword/Newpass';
import HeadingSection from '../components/HeadingSection/HeadingSection';

const ForgotPassword = () => {
  return (
    <div className="min-h-screen overflow-hidden h-screen bg-custom-background bg-no-repeat bg-right">
      <HeadingSection title={'Join the Amazing Hackathon Community'} />
      <Newpass />
    </div>
  );
};

export default ForgotPassword;
