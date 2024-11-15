import React from "react";
import { useAuth } from "../../context/AuthContext";
import { useNavigate } from "react-router-dom";
import toast, { Toaster } from "react-hot-toast";

const HomePage = () => {
  const { currentUser, logOut } = useAuth();
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await logOut();
      toast.success("تم تسجيل الخروج بنجاح");
      navigate("/login");
    } catch (error) {
      toast.error("خطأ في تسجيل الخروج");
      console.error("Failed to log out:", error);
    }
  };

  const goToProfileSettings = () => {
    navigate("/profile-settings"); // Redirect to profile settings page
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-4xl font-bold mb-4">Home Page</h1>
      <h2 className="text-lg mb-6">
        {currentUser ? currentUser.email : "Please log in"}
      </h2>
      <div className="flex space-x-4">
        <button
          onClick={goToProfileSettings}
          className="px-4 py-2 text-white bg-blue-500 hover:bg-blue-600 rounded transition"
        >
          Go to Profile Settings
        </button>
        <button
          onClick={handleLogout}
          className="px-4 py-2 text-white bg-red-500 hover:bg-red-600 rounded transition"
        >
          Log Out
        </button>
      </div>
      <Toaster position="top-center" reverseOrder={false} />
    </div>
  );
};

export default HomePage;
