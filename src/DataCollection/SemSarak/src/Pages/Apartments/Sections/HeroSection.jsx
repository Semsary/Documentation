import { Link } from "react-router-dom";
const HeroSection = () => {
  const HomeImage =
    "https://firebasestorage.googleapis.com/v0/b/semsarapp-dbd9a.firebasestorage.app/o/AppImages%2FHomeCover.jpg?alt=media&token=4d0f3f73-2ce0-48a1-88c2-095b28ef6043";

  return (
    <section
      className="text-gray-600 body-font relative mt-10"
      style={{ fontFamily: "Alexandria" }}
    >
      <img
        className="object-cover object-center rounded h-[50vh] w-full filter brightness-50"
        loading="lazy"
        alt="hero"
        src={HomeImage}
      />
      <div className="absolute inset-0 flex flex-col items-center justify-center bg-gradient-to-b from-[#00000003] to-[#00000089] p-8">
        <h1 className="text-white text-6xl font-bold mb-7">سـمـــســاري</h1>
        <p className="text-white text-xl mb-6 text-center max-w-lg">
          اكتشف شقتك الجديدة بلمسة زر. اختر الأنسب لك من مجموعة شققنا المتنوعة.
        </p>
        <Link
          to="/about"
          className="bg-white  text-mainColor hover:text-white px-6 py-3 rounded-lg text-lg hover:bg-mainColor transition duration-300 ease-in-out"
        >
          اعرف المزيد
        </Link>
      </div>
    </section>
  );
};

export default HeroSection;
