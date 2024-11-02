import { useState } from "react";
import { useForm } from "react-hook-form";

const Location = () => {
  const Texts = { title: "عنوان الشقة", description: "يمكنك تزويدنا بمعلومة مكان الشقة " };

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const [selectedGovern, setSelectedGovern] = useState("");

  const handleFormSubmit = (data) => console.log(data);

  const cityOptions = {
    القاهرة: ["القاهرة", "حلوان", "المعادي", "الشروق", "أخرى"],
    الجيزة: ["الجيزة", "الحوامدية", "البدرشين", "أكتوبر", "أخرى"],
    الإسكندرية: ["الإسكندرية", "برج العرب", "أبو قير", "سيدي بشر", "أخرى"],
    الأقصر: ["الأقصر", "القرنة", "البياضية", "إسنا", "أخرى"],
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

  return (
    <div className="mx-auto w-[700px] text-right">
      <div className="flex flex-col mx-auto">
        <h1 className="text-3xl font-semibold">{Texts.title}</h1>
        <p className="text-[#808080] mb-8 mt-5 text-s">{Texts.description}</p>
        <form onSubmit={handleSubmit(handleFormSubmit)}>
          <label htmlFor="in1">
            المحافظة
            <select
              id="in1"
              {...register("Govern")}
              className="inputStyle1 mb-8"
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
          <label htmlFor="in2">
            المدينة
            <select id="in2" {...register("city")} className="inputStyle1 mb-8">
              <option value="">اختر المدينة</option>
              {selectedGovern &&
                cityOptions[selectedGovern].map((city) => (
                  <option key={city} value={city}>
                    {city}
                  </option>
                ))}
            </select>
          </label>
      

          <button
            type="submit"
            className="w-full px-4 py-2 text-sm font-medium text-white bg-indigo-600 border border-transparent rounded-md shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            إرسال
          </button>
        </form>
      </div>
    </div>
  );
};

export default Location;
