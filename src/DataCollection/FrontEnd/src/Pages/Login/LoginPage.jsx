import { zodResolver } from "@hookform/resolvers/zod";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { BsApple } from "react-icons/bs";
import { FaSquareFacebook } from "react-icons/fa6";
import { FcGoogle } from "react-icons/fc";
import LoginSchema from "../../Validations/LoginValidation";
import { useAuth } from "../../context/AuthContext";
import { useNavigate } from "react-router-dom";

const LoginPage = () => {
  const { signIn } = useAuth(); // Fixed typo: Changed 'singIn' to 'signIn'
  const navigate = useNavigate();
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const text = {
    title: "تسجيل الدخول",
    email: "البريد الالكتروني",
    password: "كلمة المرور",
    signUp: "تسجيل حساب",
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: zodResolver(LoginSchema) });

  const formSubmit = async (data) => {
    console.log("Form submission initiated:", data); // Debug log for form data
    try {
      setError("");
      setLoading(true);
      await signIn(data.email, data.password);
      console.log("Sign-in successful");
      navigate("/home"); // Ensure this path is valid and reachable
    } catch (error) {
      console.error("Sign-in failed:", error.message);
      setError("Error: " + error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="w-full max-w-xl bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-2xl font-bold text-center mb-6">{text.title}</h2>
        {error && <p className="text-red-500 text-center mb-4">{error}</p>}
        <form onSubmit={handleSubmit(formSubmit)}>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="email"
            >
              {text.email}
            </label>
            <input
              type="text"
              id="email"
              className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring focus:ring-indigo-300"
              placeholder="email@example.com"
              {...register("email")}
            />
            <p className="text-red-500 text-xs mt-1">{errors.email?.message}</p>
          </div>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="password"
            >
              {text.password}
            </label>
            <input
              type="password"
              id="password"
              className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring focus:ring-indigo-300"
              placeholder="********"
              {...register("password")}
            />
            <p className="text-red-500 text-xs mt-1">
              {errors.password?.message}
            </p>
          </div>

          <button
            disabled={loading}
            type="submit"
            className="w-full bg-indigo-500 text-white font-bold py-2 px-4 rounded-lg hover:bg-indigo-600"
          >
            {text.signUp}
          </button>
        </form>
        <div className="grid gap-3 mt-10">
          <button className="bg-white shadow-sm w-full border-gray-800 font-semibold h-10 hover:bg-gray-100 text-gray-800 border-[1px] rounded-xl">
            <div className="flex flex-row-reverse mx-auto items-center justify-center gap-3">
              <FcGoogle size={27} />
              <span>Sign in with Google</span>
            </div>
          </button>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
