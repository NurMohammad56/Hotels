import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
const Register = () => {
  const { email, setEmail } = useState("");
  const { password, setPassword } = useState("");
  const { message, setMessage } = useState("");
  return (
    <div className="max-w-sm bg-white mx-auto p-6 mt-10">
      <h2 className="text-2xl font-semibold pt-5">Please register</h2>
      <form className="space-y-5 max-w-sm mx-auto pt-8">
        <input
          type="email"
          value={email}
          className="w-full bg-bgPrimary focus:outline-none px-5 py-2"
          placeholder="Email"
          required
        />
        <input
          type="password"
          value={password}
          className="w-full bg-bgPrimary focus:outline-none px-5 py-2"
          placeholder="Password"
          required
        />
        {message && <p className="text-red-500">{message}</p>}
        <button className="w-full mt-5 bg-primary hover:bg-[#009808] text-white font-medium py-2 rounded-md">
          Register
        </button>
      </form>
    </div>
  );
};
export default Register;
