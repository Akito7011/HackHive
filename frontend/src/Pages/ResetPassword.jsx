// eslint-disable-next-line no-unused-vars
import React from 'react';
import HeadingSection from '../components/HeadingSection/HeadingSection';
import ResetPass from '../components/ResetPassword/Resetpass';

const ResetPassword = () => {
  return (
    <div className="min-h-screen overflow-hidden h-screen bg-custom-background bg-no-repeat bg-right">
      <HeadingSection title={'Join the Amazing Hackathon Community'} />
      <ResetPass />
    </div>
  );
};

export default ResetPassword;
