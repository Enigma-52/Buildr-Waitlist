import React from 'react';

const ConfirmationPage = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-r from-purple-900 via-black to-purple-900 text-white p-4">
      <div className="fixed top-4 right-4 bg-black text-white px-6 py-3 rounded-full shadow-lg animate-pulse text-2xl font-bold">
       100+ Devs Joined!
      </div>
      <h1 className="text-4xl md:text-6xl font-bold mb-6">Thank You!</h1>
      <p className="text-xl md:text-3xl mb-6 text-center">
        You've successfully joined the <span className="text-purple-500">Buildr</span> waitlist.
      </p>
      <p className="text-lg md:text-xl mb-6 text-center">
        We can't wait to help you showcase your <span className="text-purple-500">Portfolio</span> and help you grow!
      </p>
      <p className="text-lg md:text-xl text-center">Stay tuned for updates!</p>
    </div>
  );
};

export default ConfirmationPage;
