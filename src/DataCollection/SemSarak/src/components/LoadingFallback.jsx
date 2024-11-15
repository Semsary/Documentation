import Logo from "../assets/Images/Logo/MiniIcon.png";

const LoadingFallback = () => {
  return (
    <div className="flex justify-center items-center h-screen">
      <img src={Logo} className="w-10 -translate-x-[50px]" alt="" />
      <div className="border-t-4 border-mainColor border-solid w-16 h-16 rounded-full animate-spin"></div>
    </div>
  );
};

export default LoadingFallback;
