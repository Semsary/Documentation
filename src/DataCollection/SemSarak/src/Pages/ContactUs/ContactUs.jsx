import React, { useEffect } from "react";
import Navbar from "../../components/Header/Navbar";
import { useForm } from "react-hook-form";
import { useAuth } from "../../context/AuthContext";
import { analytics, db } from "../../Firebase/Firebase"; // تأكد من استيراد إعدادات Firebase الخاصة بك
import { addDoc, collection } from "firebase/firestore";
import { useFirebase } from "../../Firebase/useFirebase";
import toast, { Toaster } from "react-hot-toast";
import { logEvent } from "firebase/analytics";

const ContactUs = () => {
  const { getUserId, getUserEmail } = useAuth();
  const { register, handleSubmit, reset } = useForm();
  const {addSugetions} = useFirebase();
  const onSubmit = async (data) => {
    try {
      addSugetions(data);
      toast.success("شكرًا لتعليقك! لقد تم إرساله بنجاح 😊");
      reset(); 
    } catch (error) {
      console.error("Error submitting comment:", error);
      toast.error("عذرًا، حدث خطأ أثناء إرسال تعليقك. حاول مرة أخرى من فضلك.");
    }
  };

  const getDateTime = () => {
    const date = new Date();
    const time = date.toLocaleTimeString();
    return `${date.toLocaleDateString()} ${time}`;
  };


    useEffect(() => {
      logEvent(analytics, "ContactUs_page_view");
    }, []);

  return (
    <div>
      <Navbar />
      <div className="pt-64 mx-auto max-w-[700px]">
        <h2 className="text-2xl font-semibold text-center text-gray-800 mb-4">
          نحن هنا للاستماع لك
        </h2>
        <p className="text-center text-gray-600 mb-8">
          نحرص على تقديم أفضل تجربة لك، لذا نود أن نسمع آرائك ومقترحاتك حول أي
          جانب من خدماتنا. شاركنا أفكارك وتعليقاتك لتساعدنا في التحسين والتطوير
          🌟.
        </p>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="bg-white p-6 rounded-lg shadow-md"
        >
          <div className="mb-6">
            <label
              htmlFor="comment"
              className="block text-gray-700 font-medium mb-2"
            >
              تعليقك يهمّنا
            </label>
            <textarea
              {...register("comment", { required: true })}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-200"
              rows="4"
              placeholder="أكتب تعليقك أو اقتراحك هنا لنكون أفضل بفضل ملاحظاتك"
              aria-label="Comment about the apartment"
            />
          </div>

          {/* الحقول المخفية */}
          <input type="hidden" {...register("email")} value={getUserEmail()} />
          <input type="hidden" {...register("Uid")} value={getUserId()} />
          <input
            type="hidden"
            {...register("timestamp")}
            value={getDateTime()}
          />

          <button
            type="submit"
            className="w-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-lg transition duration-300 focus:outline-none focus:ring-2 focus:ring-blue-600"
          >
            أرسل تعليقك
          </button>
        </form>
      </div>
      <Toaster position="top-center" reverseOrder={false} />

    </div>
  );
};

export default ContactUs;
