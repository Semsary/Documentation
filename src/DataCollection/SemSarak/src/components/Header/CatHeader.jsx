import { useState } from "react";
import { IoIosArrowBack } from "react-icons/io";
import { Link } from "react-router-dom";

const CatHeader = () => {
  const [language, setLanguage] = useState("ar"); // To toggle between Arabic and English
 const [category, setCategory] = useState([
   { ar: "الرئيسية", en: "Home", route: "/" },
   { ar: "عن الموقع", en: "About the Website", route: "/about" },
   { ar: "خدماتنا", en: "Our Services", route: "/services" },
   { ar: "الشقق المتاحة", en: "Available Apartments", route: "/apartments" },
   { ar: "التقييمات", en: "Reviews", route: "/reviews" },
   { ar: "أسعار الإيجار", en: "Rental Prices", route: "/pricing" },
   { ar: "الأنشطة والفعاليات", en: "Activities and Events", route: "/events" },
   { ar: "المناطق المتاحة", en: "Available Areas", route: "/areas" },
   { ar: "المساعدة والدعم", en: "Help and Support", route: "/support" },
   { ar: "التسجيل", en: "Sign Up", route: "/signup" },
 ]);

  return (
    <div className="hidden lg:block ">
      <div className="container px-1 mx-auto flex flex-row pt-2 justify-between">
        <div
          className={`flex  mx-auto ${
            language === "ar" ? "gap-11 flex-row-reverse" : "gap-6 flex-row"
          }`}
        >
          {category.map((item, index) => {
            return (
              <div
                className="hover:border-primaryDark hover:cursor-pointer border-b-4 border-white pb-2
              transition duration-100 ease-in transform "
                key={index}
              >
                <Link to={item.route}>
                  {language === "ar" ? item.ar : item.en}
                </Link>
              </div>
            );
          })}
        </div>
      </div>
      <hr />
    </div>
  );
};

export default CatHeader;
