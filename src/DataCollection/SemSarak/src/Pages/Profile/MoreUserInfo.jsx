import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useAuth } from "../../context/AuthContext";
import { useUserContext } from "../../context/UserContext";
import { Link } from "react-router-dom";

const MoreUserInfo = () => {
  const { getUserId, getUserEmail } = useAuth();
  const { addUserMoreData } = useUserContext();

  const Texts = {
    title: "تفضيلاتك الشخصية",
    description:
      "سنستخدم هذه التفضيلات لتحسين التجربة وتقديم توصيات تتماشى مع اهتماماتك.",
  };

  const { register, handleSubmit } = useForm();

  const [selectedGovern, setSelectedGovern] = useState("");

  const handleFormSubmit = (data) => {
    // console.log(data);
    const Uid = getUserId();
    addUserMoreData(data, Uid);
  };

  return (
    <div className="mx-auto px-5 w-full max-w-3xl mt-40 text-right p-4">
      <div className="flex flex-col">
        <h1 className="text-2xl md:text-3xl font-semibold">{Texts.title}</h1>
        <p className="text-gray-500 mb-6 mt-4 text-sm md:text-base">
          {Texts.description}
          <Link to="/about" className="text-blue-600 hover:text-blue-400">
            {"لماذا نحتاج إلى هذه المعلومات؟"}
          </Link>
        </p>
        <form onSubmit={handleSubmit(handleFormSubmit)} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <label className="flex flex-col">
              الموقع الجغرافي المفضل
              <select
                required
                {...register("location")}
                className="inputStyle1 mt-1"
                onChange={(e) => setSelectedGovern(e.target.value)}
              >
                <option disabled value="اختر">
                  اختر
                </option>
                <option value="بالقرب من الجامعة">بالقرب من الجامعة</option>
                <option value="بالقرب من الأماكن الحيوية">
                  بالقرب من الأماكن الحيوية
                </option>
                <option value="قرب وسائل النقل">قرب وسائل النقل</option>
                <option value="قرب الخدمات العامة">قرب الخدمات العامة</option>
              </select>
            </label>

            <label className="flex flex-col">
              نوع الشقة المفضل
              <select
                required
                {...register("apartmentType")}
                className="inputStyle1 mt-1"
              >
                <option disabled value="">
                  اختر نوع الشقة
                </option>
                <option value="استوديو">استوديو</option>
                <option value="غرفة">غرفة</option>
                <option value="سرير">سرير مع افراد</option>
              </select>
            </label>

            <label className="flex flex-col">
              عدد الأفراد في الشقة
              <input
                type="number"
                min="1"
                required
                max="10"
                {...register("number")}
                className="inputStyle1 mt-1"
              />
            </label>

            <label className="flex flex-col">
              مدة الإيجار
              <select
                required
                {...register("time")}
                className="inputStyle1 mt-1"
              >
                <option disabled value="">
                  اختر المدة
                </option>
                <option value="ايجار يومي">ايجار يومي</option>
                <option value="ايجار شهري">ايجار شهري</option>
                <option value="ايجار موسمي">ايجار موسمي</option>
                <option value="ايجار سنوى">ايجار سنوي</option>
              </select>
            </label>

            <label className="flex flex-col mt-4">
              خدمة الغاز
              <select
                required
                {...register("gas")}
                className="inputStyle1 mt-1"
              >
                <option disabled value="">
                  اختر خدمة الغاز
                </option>
                <option value="شامل ضمن الإيجار">شامل ضمن الإيجار</option>
                <option value="غير شامل">
                  غير شامل، يتم احتساب الغاز حسب الاستهلاك
                </option>
                <option value="غير مهم">موافق في جميع الأحوال</option>
              </select>
            </label>

            <label className="flex flex-col mt-4">
              خدمة الكهرباء
              <select
                required
                {...register("electricity")}
                className="inputStyle1 mt-1"
              >
                <option disabled value="">
                  اختر خدمة الكهرباء
                </option>
                <option value="شامل ضمن الإيجار">شامل ضمن الإيجار</option>
                <option value="غير شامل">
                  غير شامل، يتم احتساب الكهرباء حسب الاستهلاك
                </option>
                <option value="غير مهم">موافق في جميع الأحوال</option>
              </select>
            </label>

            <label className="flex flex-col mt-4">
              خدمة الانترنت
              <select
                required
                {...register("internet")}
                className="inputStyle1 mt-1"
              >
                <option disabled value="">
                  اختر خدمة الانترنت
                </option>
                <option value="شامل ضمن الإيجار">شامل ضمن الإيجار</option>
                <option value="غير شامل">
                  غير شامل، يتم احتساب الانترنت حسب الاستهلاك
                </option>

                <option value="غير مهم">موافق في جميع الأحوال</option>
              </select>
            </label>

            <label className="flex flex-col mt-4">
              خدمة الماء
              <select
                required
                {...register("water")}
                className="inputStyle1 mt-1"
              >
                <option disabled value="">
                  اختر خدمة الماء
                </option>
                <option value="شامل ضمن الإيجار">شامل ضمن الإيجار</option>
                <option value="غير شامل">
                  غير شامل، يتم احتساب استهلاك المياه بشكل منفصل
                </option>
                <option value="غير مهم">موافق في جميع الأحوال</option>
              </select>
            </label>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <label className="flex flex-col">
              السعر المفضل للايجار الشهري (جنية)
              <div className="flex gap-2 mt-1">
                <input
                  placeholder="من"
                  type="number"
                  required
                  min="500"
                  max="10000"
                  {...register("priceFrom")}
                  className="inputStyle1"
                />
                <input
                  placeholder="إلى"
                  type="number"
                  min="500"
                  max="10000"
                  required
                  {...register("priceTo")}
                  className="inputStyle1"
                />
              </div>
            </label>
          </div>

          <button
            type="submit"
            className=" ButtonStyle1 w-full py-3 mt-4 text-lg font-medium"
          >
            حفظ التعديلات
          </button>

          <div
            className="py-20 w-1 h-1
          "
          ></div>
        </form>
      </div>
    </div>
  );
};

export default MoreUserInfo;
