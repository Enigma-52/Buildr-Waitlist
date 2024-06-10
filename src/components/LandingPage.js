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
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-r from-purple-900 via-black to-purple-900 text-white">
      <h1 className="text-6xl font-bold mb-6 animate-bounce">Buildr</h1>
      <p className="text-2xl mb-10 text-center">
        <span className="text-purple-500">Linktree</span> for Developers
      </p>
      <h2 className="text-5xl font-bold mb-6 text-center">
        One stop solution for your <span className="text-purple-500">Developer Portfolio</span> needs!
      </h2>
      <p className="text-3xl mb-10 text-center">
        Showcase your <span className="text-purple-500">Projects</span>, <span className="text-purple-500">Work experience</span>, <span className="text-purple-500">Social profiles</span>, and much more.
      </p>
      <h3 className="text-4xl mb-10 text-center">
        Become a <span className="text-purple-500">Buildr</span> today
      </h3>
      <p className="text-2xl mb-6">Sign up for early access!</p>
      <form onSubmit={handleSubmit} className="flex">
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter your email address"
          className="px-6 py-3 rounded-full bg-gray-800 border border-gray-700 focus:outline-none text-xl shadow-lg"
          required
        />
        <button type="submit" className="px-6 py-3 bg-purple-500 text-white rounded-full hover:bg-purple-600 text-xl shadow-lg transform transition-transform duration-200 hover:scale-105">
          Join the Hype
        </button>
      </form>
    </div>
  );
};

export default LandingPage;
