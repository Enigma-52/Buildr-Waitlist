import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {db, doc , setDoc , getDocs , collection} from '../utils/firebase.utils'

const LandingPage = () => {
  const [email, setEmail] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const userId = "user_emails";

    const data = {
        email : email
    };

    const querySnapshot = await getDocs(collection(db, "waitlist"));
    querySnapshot.forEach(async (doc) => {
      if (doc.id === userId) {
        const emails = doc.data().emails || [];
        const updatedEmails = [...emails, email];
        await setDoc(doc.ref, { emails: updatedEmails }, { merge: true });
        console.log("Emails updated successfully!");
      }
    });
    navigate('/confirmation');
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-r from-purple-900 via-black to-purple-900 text-white p-4">
      <h1 className="text-4xl md:text-6xl font-bold mb-6 animate-bounce">Buildr</h1>
      <p className="text-xl md:text-2xl mb-6 text-center pb-5">
        <span className="text-purple-500">Linktree</span> for Developers
      </p>
      <h2 className="text-3xl md:text-5xl font-bold mb-6 text-center">
        One stop solution for your <span className="text-purple-500">Developer Portfolio</span> needs!
      </h2>
      <p className="text-lg md:text-3xl mb-6 text-center">
        Showcase your <span className="text-purple-500">Projects</span>, <span className="text-purple-500">Work experience</span>, <span className="text-purple-500">Social profiles</span>, and much more.
      </p>
      <h3 className="text-2xl md:text-4xl mb-6 text-center py-6">
        Become a <span className="text-purple-500">Buildr</span> today
      </h3>
      <p className="text-xl md:text-2xl mb-4">Sign up for early access!</p>
      <form onSubmit={handleSubmit} className="flex flex-col md:flex-row items-center w-full max-w-md">
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter your email address"
          className="w-full md:w-auto px-4 py-2 md:px-6 md:py-3 rounded-full bg-gray-800 border border-gray-700 focus:outline-none text-lg md:text-xl shadow-lg mb-4 md:mb-0 md:mr-4"
          required
        />
        <button type="submit" className="w-full md:w-auto px-4 py-2 md:px-6 md:py-3 bg-purple-500 text-white rounded-full hover:bg-purple-600 text-lg md:text-xl shadow-lg transform transition-transform duration-200 hover:scale-105">
          Join the Hype
        </button>
      </form>
    </div>
  );
};

export default LandingPage;