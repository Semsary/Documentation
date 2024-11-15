import { zodResolver } from "@hookform/resolvers/zod";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { BsApple } from "react-icons/bs";
import { FaSquareFacebook } from "react-icons/fa6";
import { FcGoogle } from "react-icons/fc";
import LoginSchema from "../../Validations/LoginValidation";
import { useAuth } from "../../context/AuthContext";
import { Link, useNavigate } from "react-router-dom";
import handleFirebaseError from "../../Validations/Errors";
import LoginImage from "../../assets/Images/signup.jpg";
import Logo from "../../assets/Images/Logo/Logo (1).png";
import GoogleButton from "react-google-button";

const SignUpPage = () => {
  const { signUp } = useAuth();

  const navigate = useNavigate();
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

  const FormSubmit = async (data) => {
    try {
      setError(""); // Clear previous error
      setLoading(true);
      await signUp(data.email, data.password);
      console.log("done");
      navigate("/profile");
    } catch (error) {
      // استخدام الدالة الجديدة لمعالجة الأخطاء
      setError(handleFirebaseError(error.code));
    } finally {
      setLoading(false);
    }
    console.log(data);
  };

  return (
    // <div className="grid grid-cols-2">
    //   <div className="w-full h-screen">
    //     <img
    //       className="w-full max-h-screen object-cover"
    //       src={LoginImage}
    //       alt="login"
    //     />
    //   </div>

    <div className="flex items-center justify-center min-h-screen">
      <div className="w-full max-w-xl bg-white p-6 rounded-lg shadow-md">
        <img src={Logo} alt="logo" className="w-52 mx-auto" />
        <h2 className="text-2xl font-bold text-center mb-6">{Text.title}</h2>

        {/* Display error message */}
        {error && (
          <div
            className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative"
            role="alert"
          >
            <strong className="font-bold">{" خطأ! "}</strong>
            <span className="block sm:inline">{error}</span>
          </div>
        )}

        <form onSubmit={handleSubmit(FormSubmit)}>
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

          {/* <GoogleButton /> */}
          <button className="hidden bg-white shadow-sm w-full border-gray-800 font-semibold h-10 hover:bg-gray-100 text-gray-800 border-[1px] rounded-xl">
            <div className="flex flex-row-reverse mx-auto items-center justify-center gap-3">
              <FcGoogle size={27} />
              <span>Sign up with Google</span>
            </div>
          </button>

          {/*back to login */}
          <div className="text-center">
            <span> لديك حساب بالفعل؟</span>
            <Link to="/login" className="text-indigo-500">
              {" تسجيل الدخول "}
            </Link>
          </div>
          {/* </div> */}
        </div>
      </div>
    </div>
    // </div>
  );
};

export default SignUpPage;
