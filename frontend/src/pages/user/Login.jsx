import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useLoginUserMutation } from "../../redux/features/auth/authApi";
import { useDispatch } from "react-redux";
import { setUser } from "../../redux/features/auth/authSlice";
const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const dispatch = useDispatch();
  const [loginUser, { isLoading: loginLoading }] = useLoginUserMutation();
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    const data = {
      email,
      password,
    };
    try {
      const res = await loginUser(data).unwrap();
      let { user, token } = res;
      dispatch(setUser(user));
      localStorage.setItem("user", JSON.stringify(user));
      navigate("/");
    } catch (error) {
      setMessage("Please provide a valid email or password");
    }
  };
  return (
    <div className="max-w-sm bg-white mx-auto p-6 mt-10">
      <h2 className="text-2xl font-semibold pt-5">Please login</h2>
      <form onSubmit={handleLogin} className="space-y-5 max-w-sm mx-auto pt-8">
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
          disabled={loginLoading}
          className="w-full mt-5 bg-primary hover:bg-[#009808] text-white font-medium py-2 rounded-md"
        >
          Login
        </button>
      </form>
      <p className="w-full my-5 text-center">
        Don't have an account?{" "}
        <Link to={"/register"} className="text-[#009808] italic">
          Register
        </Link>{" "}
        here.
      </p>
    </div>
  );
};
export default Login;
