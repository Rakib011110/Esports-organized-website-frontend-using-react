import React, { useState } from "react";

const Newsletter = () => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (!email || !/^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email)) {
      setMessage("Please enter a valid email address.");
      return;
    }
    // Logic to handle subscription (e.g., API call)
    console.log("Subscribed with email:", email);
    setMessage("Thank you for subscribing!");
    setEmail("rakib088880@gmail.com");
  };

  return (
    <div className="bg-gradient-to-r  from-[#060d3b]  text-white py-16 px-6">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-4">Subscribe to Our Newsletter</h2>
        <p className="text-lg mb-8">
          Stay updated with the latest news, updates, and exclusive offers from
          Titans Arena!
        </p>
        <form
          onSubmit={handleSubscribe}
          className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full sm:w-2/3 px-4 py-2 rounded-md  focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button
            type="submit"
            className=" bg-[#4bf335] hover:bg-green-600 px-6 py-2 rounded-md text-white font-semibold transition duration-300">
            Subscribe
          </button>
        </form>
        {message && (
          <p
            className={`mt-4 ${
              message.includes("Thank you") ? "text-green-400" : "text-red-400"
            }`}>
            {message}
          </p>
        )}
      </div>
    </div>
  );
};

export default Newsletter;
