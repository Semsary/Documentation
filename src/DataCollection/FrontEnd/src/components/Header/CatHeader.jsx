import { useState } from "react";
import { IoIosArrowBack } from "react-icons/io";
import { Link } from "react-router-dom";

const CatHeader = () => {
  const [language, setLanguage] = useState("ar"); // To toggle between Arabic and English
  const [category, setCategory] = useState([
    { ar: "الرئيسية", en: "Home", route: "/" },
    { ar: "عن الجمعية", en: "About the Charity", route: "/about" },
    { ar: "رسالة الجمعية", en: "Our Mission", route: "/mission" },
    { ar: "برامجنا", en: "Our Programs", route: "/programs" },
    { ar: "أحدث الأخبار", en: "Latest News", route: "/news" },
    { ar: "الأنشطة والفعاليات", en: "Activities and Events", route: "/events" },
    { ar: "مجالات العمل", en: "Work Areas", route: "/work-areas" },
    {
      ar: "المشاريع الخيرية",
      en: "Charity Projects",
      route: "/charity-projects",
    },
    {
      ar: "المراكز والوحدات",
      en: "Centers and Units",
      route: "/centers-units",
    },
    { ar: "المتطوعين", en: "Volunteers", route: "/volunteers" },
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
