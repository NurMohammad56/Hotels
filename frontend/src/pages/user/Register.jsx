import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useRegisterUserMutation } from "../../redux/features/auth/authApi";

const Register = () => {
  const [username, setuserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const [registerUser, { isLoading }] = useRegisterUserMutation();
  const navigate = useNavigate();

  const handleRegister = async (e) => {
    e.preventDefault();
    const data = {
      username,
      email,
      password,
    };

    try {
      const response = await registerUser(data).unwrap();
      console.log("Register Response:", response); // Debugging API response
      alert("Register success!");
      navigate("/login");
    } catch (error) {
      console.error("Register Error:", error); // Log the error for debugging
      setMessage("Registration failed! Please try again.");
    }
  };

  return (
    <div className="max-w-sm bg-white mx-auto p-6 mt-10">
      <h2 className="text-2xl font-semibold pt-5">Please register</h2>
      <form
        onSubmit={handleRegister}
        className="space-y-5 max-w-sm mx-auto pt-8"
      >
        <input
          type="text"
          value={username}
          onChange={(e) => setuserName(e.target.value)}
          className="w-full bg-bgPrimary focus:outline-none px-5 py-2"
          placeholder="Username"
          required
        />
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full bg-bgPrimary focus:outline-none px-5 py-2"
          placeholder="Email"
          required
        />
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full bg-bgPrimary focus:outline-none px-5 py-2"
          placeholder="Password"
          required
        />
        {message && <p className="text-red-500">{message}</p>}
        <button
          className="w-full mt-5 bg-primary hover:bg-[#009808] text-white font-medium py-2 rounded-md"
          type="submit"
          disabled={isLoading}
        >
          Register
        </button>
      </form>
      <p className="w-full my-5 text-center">
        Already have an account? Please{" "}
        <Link to={"/login"} className="text-[#009808] italic">
          Login
        </Link>{" "}
        here.
      </p>
    </div>
  );
};

export default Register;
