import { zodResolver } from "@hookform/resolvers/zod";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { BsApple } from "react-icons/bs";
import { FaSquareFacebook } from "react-icons/fa6";
import { FcGoogle } from "react-icons/fc";
import LoginSchema from "../../Validations/LoginValidation";
import { useAuth } from "../../context/AuthContext";
import { useNavigate } from "react-router-dom";

const SignUpPage = () => {
  const { signUp } = useAuth();

  const Navigate = useNavigate();
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const Text = {
    title: "تسجيل حساب جديد",
    name: "الاسم الكامل",
    email: "البريد الالكتروني",
    password: "كلمة المرور",
    confirmPassword: "تأكيد كلمة المرور",
    signUp: "تسجيل حساب",
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: zodResolver(LoginSchema) });

  const FormSumit = async (data) => {
    try {
      setError("");
      setLoading(true);
      await signUp(data.email, data.password);
      console.log("done");
      Navigate("/home");
    } catch (error) {
        setError(error.message);
    }
    setLoading(false);
    console.log(data);
  };
  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="w-full max-w-xl bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-2xl font-bold text-center mb-6">{Text.title}</h2>
        <form onSubmit={handleSubmit(FormSumit)}>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="email"
            >
              {Text.email}
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
              {Text.password}
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
          <div className="mb-6">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="confirmPassword"
            >
              {Text.confirmPassword}
            </label>
            <input
              type="password"
              id="confirmPassword"
              className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring focus:ring-indigo-300"
              placeholder="********"
              {...register("confirmPassword")}
            />
            <p className="text-red-500 text-xs mt-1">
              {errors.confirmPassword?.message}
            </p>
          </div>
          <button
            disabled={loading}
            type="submit"
            className="w-full bg-indigo-500 text-white font-bold py-2 px-4 rounded-lg hover:bg-indigo-600"
          >
            {Text.signUp}
          </button>
        </form>
        {/* Sign up using social media */}
        <div className="grid gap-3 mt-10">
          <button className="bg-white shadow-sm w-full border-gray-800 font-semibold h-10 hover:bg-gray-100 text-gray-800 border-[1px] rounded-xl">
            <div className="flex flex-row-reverse mx-auto items-center justify-center gap-3">
              <FcGoogle size={27} />
              <span>Sign up with Google</span>
            </div>
          </button>
          {/* Add similar buttons for Facebook and Apple if needed */}
        </div>
      </div>
    </div>
  );
};

export default SignUpPage;
