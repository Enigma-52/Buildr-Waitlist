import React from 'react';

const ConfirmationPage = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-r from-purple-900 via-black to-purple-900 text-white">
      <h1 className="text-6xl font-bold mb-6">Thank You!</h1>
      <p className="text-3xl mb-10 text-center">
        You've successfully joined the <span className="text-purple-500">Buildr</span> waitlist.
      </p>
      <p className="text-xl mb-10 text-center">
        We can't wait to help you showcase your <span className="text-purple-500">Portfolio</span> and help you grow!
      </p>
      <p className="text-xl">Stay tuned for updates!</p>
    </div>
  );
};

export default ConfirmationPage;
