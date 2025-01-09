import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useAuth } from "../../context/AuthContext";
import { useUserContext } from "../../context/UserContext";
import { Link } from "react-router-dom";
import toast, { Toaster } from "react-hot-toast";

const MianInfo = ({ handleNext }) => {
  const { getUserId, getUserEmail } = useAuth();
  const { addUserMainData } = useUserContext();

  const redirectToHome = () => {
    setTimeout(() => {
      // Navigate("/");
      // notify2();
      handleNext();
    }, 500);
  };

  const Texts = {
    title: "معلوماتك الأساسية",
    description:
      "سنستخدم هذه المعلومات لتدريب النظام على تقديم خدمات تتناسب مع تفضيلاتك.",
  };

  // const { addLocation, getLocaion } = useApartmentContext();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const [formData, setFormData] = useState({
    Govern: "",
    city: "",
    floorNumber: "",
  });

  const getDateTime = () => {
    const date = new Date();
    const time = date.toLocaleTimeString();
    return `${date.toLocaleDateString()} ${time}`;
  };
  const [selectedGovern, setSelectedGovern] = useState("");

  const handleFormSubmit = (data) => {
    // setFormData(data);
    // console.log(data);
    addUserMainData(data, getUserId());
    toast.success(" تم حفظ تسجيل بياناتك بنجاح");
    redirectToHome();

    // addLocation(data.city, data.Govern, data.floorNumber);
  };

  const cityOptions = {
    الأقصر: ["الأقصر", "القرنة", "البياضية", "إسنا", "ارمنت", "أخرى"],
    القاهرة: ["القاهرة", "حلوان", "المعادي", "الشروق", "أخرى"],
    الجيزة: ["الجيزة", "الحوامدية", "البدرشين", "أكتوبر", "أخرى"],
    الإسكندرية: ["الإسكندرية", "برج العرب", "أبو قير", "سيدي بشر", "أخرى"],
    أسوان: ["أسوان", "دراو", "كوم أمبو", "أبو سمبل", "أخرى"],
    المنيا: ["المنيا", "ملوي", "مغاغة", "العدوة", "أخرى"],
    سوهاج: ["سوهاج", "جرجا", "المراغة", "طهطا", "أخرى"],
    قنا: ["قنا", "نجع حمادي", "دشنا", "قفط", "أخرى"],
    الشرقية: ["الزقازيق", "بلبيس", "العاشر من رمضان", "منيا القمح", "أخرى"],
    الغربية: ["طنطا", "المحلة الكبرى", "زفتى", "سمنود", "أخرى"],
    الدقهلية: ["المنصورة", "طلخا", "ميت غمر", "المنزلة", "أخرى"],
    البحيرة: ["دمنهور", "كفر الدوار", "إدكو", "المحمودية", "أخرى"],
    "بني سويف": ["بني سويف", "الواسطي", "الفشن", "سمسطا", "أخرى"],
    مطروح: ["مرسى مطروح", "الحمام", "العلمين", "الضبعة", "أخرى"],
    "البحر الأحمر": ["الغردقة", "رأس غارب", "سفاجا", "القصير", "أخرى"],
    الإسماعيلية: ["الإسماعيلية", "فايد", "التل الكبير", "القنطرة شرق", "أخرى"],
    بورسعيد: ["بورسعيد", "بورفؤاد", "الزهور", "الضواحي", "أخرى"],
    السويس: ["السويس", "عتاقة", "الأربعين", "الجناين", "أخرى"],
    دمياط: ["دمياط", "فارسكور", "الزرقا", "رأس البر", "أخرى"],
    الفيوم: ["الفيوم", "إطسا", "سنورس", "طامية", "أخرى"],
    "كفر الشيخ": ["كفر الشيخ", "دسوق", "بلطيم", "بيلا", "أخرى"],
    المنوفية: ["شبين الكوم", "السادات", "منوف", "الباجور", "أخرى"],
    القليوبية: ["بنها", "قليوب", "شبرا الخيمة", "طوخ", "أخرى"],
    "الوادي الجديد": ["الخارجة", "الداخلة", "الفرافرة", "بلاط", "أخرى"],
    "شمال سيناء": ["العريش", "الشيخ زويد", "رفح", "بئر العبد", "أخرى"],
    "جنوب سيناء": ["شرم الشيخ", "دهب", "نويبع", "رأس سدر", "أخرى"],
    أسيوط: ["أسيوط", "ديروط", "أبنوب", "منفلوط", "أخرى"],
    حلوان: ["حلوان", "15 مايو", "التبين", "المعصرة", "أخرى"],
  };

  const collegesInEgypt = [
    "الحاسبات والمعلومات",
    "الطب البشري",
    "طب الأسنان",
    "الطب البيطري",
    "الصيدلة",
    "الهندسة",
    "التخطيط العمراني",
    "الفنون التطبيقية",
    "العلوم",
    "كلية الألسن",
    "الزراعة",
    "البيئة",
    "التكنولوجيا الحيوية",
    "الآداب",
    "التربية",
    "الإعلام",
    "اللغات والترجمة",
    "التجارة",
    "إدارة الأعمال",
    "الاقتصاد والعلوم السياسية",
    "الحقوق",
    "القانون الدولي",
    "التربية الرياضية",
    "التربية النوعية",
    "التربية الفنية",
    "الفنون الجميلة",
    "الموسيقى",
    "السياحة والفنادق",
    "الإرشاد السياحي",
    "الإنتاج الحيواني",
    "التكنولوجيا الزراعية",
    "التمريض",
    "العلوم الصحية",
    "التكنولوجيا الصناعية",
    "العلوم التكنولوجية",
    "الدراسات العليا",
    "الدراسات البيئية",
  ];

  const universitiesInEgypt = [
    "جامعة الأقصر",
    // الجامعات الحكومية
    "جامعة القاهرة",
    "جامعة عين شمس",
    "جامعة الإسكندرية",
    "جامعة حلوان",
    "جامعة المنصورة",
    "جامعة أسيوط",
    "جامعة الزقازيق",
    "جامعة طنطا",
    "جامعة بنها",
    "جامعة جنوب الوادي",
    "جامعة كفر الشيخ",
    "جامعة الفيوم",
    "جامعة بني سويف",
    "جامعة المنيا",
    "جامعة سوهاج",
    "جامعة دمنهور",
    "جامعة الوادي الجديد",
    "جامعة العريش",
    "جامعة مطروح",
    "جامعة بورسعيد",
    "جامعة السويس",
    "جامعة دمياط",
    "جامعة قناة السويس",
    "جامعة مدينة السادات",
    "جامعة أسوان",

    // الجامعات الخاصة
    "جامعة مصر للعلوم والتكنولوجيا",
    "جامعة أكتوبر للعلوم الحديثة والآداب",
    "جامعة 6 أكتوبر",
    "جامعة مصر الدولية",
    "جامعة المستقبل",
    "جامعة النهضة",
    "جامعة بدر",
    "جامعة حورس",
    "جامعة الجيزة الجديدة",
    "جامعة دراية",
    "جامعة سفنكس",
    "جامعة ميريت",
    "الأهرام الكندية",

    // الجامعات الأهلية
    "جامعة الملك سلمان الدولية",
    "جامعة العلمين الدولية",
    "جامعة الجلالة",
    "جامعة المنصورة الجديدة",

    // الجامعات الدولية
    "الجامعة الأمريكية بالقاهرة",
    "الجامعة البريطانية في مصر",
    "الجامعة الألمانية بالقاهرة",
    "الجامعة الفرنسية في مصر",
    "الجامعة الكندية في مصر",
    "الجامعة المصرية الصينية",
    "الجامعة الروسية في مصر",
    "جامعة النيل",
    "جامعة زويل للعلوم والتكنولوجيا",
    "الجامعة المصرية اليابانية للعلوم والتكنولوجيا",

    // الأكاديميات والمعاهد
    "الأكاديمية العربية للعلوم والتكنولوجيا والنقل البحري",
    "معهد السادات",
    "معهد الدراسات التعاونية والإدارية",
    "معهد الدراسات البيئية والتنمية المستدامة",
    "آخرى",
  ];

  return (
    <div className="mx-auto px-5  w-full mt-20 sm:w-[700px] text-right fadeInAnmation">
      <div className="flex flex-col mx-auto">
        <h1 className="text-3xl font-semibold">{Texts.title}</h1>
        <p className="text-[#808080] my-2 mt-5 text-s">
          {Texts.description}
          <Link to="/about" className="text-blue-600 hover:text-blue-400">
            {"لماذا نحتاج إلى هذه المعلومات؟"}
          </Link>
        </p>
        <form
          onSubmit={handleSubmit(handleFormSubmit)}
          className="fadeInAnmation"
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <label
              htmlFor="name"
              className="col-span-1 sm:col-span-2 lg:col-span-4"
            >
              الاسم عربي (اختياري)
              <input
                type="text"
                id="name"
                {...register("name")}
                className="inputStyle1 my-2"
                placeholder="أدخل الاسم  (اختياري) "
              />
            </label>

            <label htmlFor="in1" className="col-span-1 sm:col-span-2">
              المحافظة
              <select
                required
                id="in1"
                {...register("Govern")}
                className="inputStyle1 my-2"
                onChange={(e) => setSelectedGovern(e.target.value)}
              >
                <option value="">اختر المحافظة</option>
                {Object.keys(cityOptions).map((govern) => (
                  <option key={govern} value={govern}>
                    {govern}
                  </option>
                ))}
              </select>
            </label>

            <label htmlFor="in2" className="col-span-1 sm:col-span-2">
              المدينة
              <select
                id="in2"
                required
                {...register("city")}
                className="inputStyle1 my-2"
              >
                <option value="">اختر المدينة</option>
                {selectedGovern &&
                  cityOptions[selectedGovern].map((city) => (
                    <option key={city} value={city}>
                      {city}
                    </option>
                  ))}
              </select>
            </label>

            <label htmlFor="in4" className="col-span-1 sm:col-span-2">
              الجامعة
              <select
                required
                id="in4"
                {...register("university")}
                className="inputStyle1 my-2"
              >
                <option value="">اختر الجامعة</option>
                {universitiesInEgypt.map((university) => (
                  <option key={university} value={university}>
                    {university}
                  </option>
                ))}
              </select>
            </label>

            <label htmlFor="in3" className="col-span-1 sm:col-span-2">
              الكلية
              <select
                required
                id="in3"
                {...register("college")}
                className="inputStyle1 my-2"
              >
                <option value="">اختر الكلية</option>
                {collegesInEgypt.map((college) => (
                  <option key={college} value={college}>
                    {college}
                  </option>
                ))}
              </select>
            </label>

            <label htmlFor="in5" className="col-span-1 sm:col-span-2">
              السنة الدراسية
              <select
                id="in5"
                required
                {...register("year")}
                className="inputStyle1 my-2"
              >
                <option disabled value="">
                  اختر السنة الدراسية
                </option>
                <option value="الأولى">الأولى</option>
                <option value="الثانية">الثانية</option>
                <option value="الثالثة">الثالثة</option>
                <option value="الرابعة">الرابعة</option>
                <option value="الخامسة">الخامسة</option>
                <option value="السادسة">السادسة</option>
                <option value="السابعة">السابعة</option>
                <option value="خريج">خريج</option>
              </select>
            </label>

            <label htmlFor="in6" className="col-span-1 sm:col-span-2">
              الجنس
              <select
                id="in6"
                required
                {...register("type")}
                className="inputStyle1 my-2"
              >
                <option disabled value="">
                  اختر النوع
                </option>
                <option value="ذكر">ذكر</option>
                <option value="أنثى">أنثى</option>
              </select>
            </label>

            <label htmlFor="in8" className="col-span-1 sm:col-span-2">
              السن
              <input
                type="number"
                min={12}
                max={100}
                id="in8"
                {...register("age")}
                className="inputStyle1 my-2"
                placeholder="أدخل السن"
              />
            </label>

            <label htmlFor="in9" className="col-span-1 sm:col-span-2">
              الوزن*
              <input
                type="number"
                min={30}
                max={200}
                id="in9"
                {...register("weight")}
                className="inputStyle1 my-2"
                placeholder="أدخل الوزن"
              />
            </label>

            <label htmlFor="in10" className="col-span-1 sm:col-span-2">
              الطول*
              <input
                type="number"
                min={100}
                max={250}
                id="in10"
                {...register("height")}
                className="inputStyle1 my-2"
                placeholder="أدخل الطول"
              />
            </label>

            <label htmlFor="in11" className="col-span-1 sm:col-span-2">
              مدخن؟*
              <select
                id="in11"
                required
                {...register("smoker")}
                className="inputStyle1 my-2"
              >
                <option disabled value="">
                  اختر النوع
                </option>
                <option value="نعم">نعم</option>
                <option value="لا">لا</option>
              </select>
            </label>

            {/* Hidden Inputs */}
            <input
              type="hidden"
              id="in7"
              {...register("email")}
              value={getUserEmail()}
            />

            <input
              type="hidden"
              id="in8"
              {...register("Uid")}
              value={getUserId()}
            />

            <input
              type="hidden"
              id="in9"
              {...register("registerTime")}
              value={getDateTime()}
            />

            <button
              type="submit"
              className="ButtonStyle1 w-full col-span-1 sm:col-span-2 lg:col-span-4"
            >
              حفظ التعديلات
            </button>

            {/* add note */}

            <div
              className="flex w-full flex-col gap-4 p-4 bg-gray-100 rounded-md
            col-span-1 sm:col-span-2 lg:col-span-4
            "
            >
              <div className="flex flex-col gap-2">
                <p className="text-[#808080] text-sm">
                  <span className="text-red-500">*</span>
                  <span>
                    لماذا نطلب معلومات مثل الطول، الوزن، وهل الشخص مدخن؟
                  </span>
                </p>
                <p className="text-gray-700 text-sm">
                  الهدف الرئيسي من الموقع هو جمع البيانات اللازمة لبناء نظام
                  توصيات (Recommendation System) يعتمد على الذكاء الاصطناعي
                  لتحسين تجربتك. المعلومات التي نقوم بجمعها مثل الطول، الوزن،
                  وعادة التدخين تساعدنا في تقديم توصيات أكثر دقة وملائمة لك.
                </p>
                <p className="text-gray-700 text-sm mt-2">
                  نحن نؤكد لك أن البيانات التي نطلبها ليست بيانات شخصية (مثل
                  اسمك أو عنوانك)، وبالتالي لا توجد أي مخاطر على خصوصيتك. نحن
                  ملتزمون بتوفير بيئة آمنة لك أثناء إدخال بياناتك.
                </p>
                <p className="text-gray-700 text-sm mt-2">
                  يمكنك عدم إدخال اسمك إذا كنت ترغب في الحفاظ على خصوصيتك.
                  الموقع لن يطلب منك أي معلومات يمكن أن تكشف عن هويتك.
                </p>
              </div>

              <div className="flex flex-col gap-2 mt-4">
                <p className="text-[#808080] text-sm">
                  <span className="text-red-500">*</span>
                  <span>ماذا لو لم أكن أعرف وزني أو طولي بالضبط؟</span>
                </p>
                <p className="text-gray-700 text-sm">
                  لا داعي للقلق! يمكنك إدخال هذه المعلومات بشكل تقريبي، حتى لو
                  لم تكن دقيقة 100%. النظام سيعمل بشكل جيد باستخدام القيم
                  التقريبية، وبالتالي لن يؤثر ذلك على دقة التوصيات المقدمة لك.
                </p>
              </div>
            </div>

            <div className="pb-32"></div>
          </div>
        </form>
      </div>

      <Toaster position="top-center" reverseOrder={false} />
    </div>
  );
};

export default MianInfo;
