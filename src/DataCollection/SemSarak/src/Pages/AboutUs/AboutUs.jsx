import React from "react";
import Navbar from "../../components/Header/Navbar";
import { Link } from "react-router-dom";

const AboutUs = () => {
  return (
    <div className="bg-gray-100 min-h-screen">
      <Navbar />
      <section
        className="pt-32 px-5 sm:px-10 lg:px-32 bg-white"
        style={{ fontFamily: "Cairo" }}
      >
        <div className="max-w-6xl mx-auto">
          <h1 className="text-4xl font-bold text-center text-gray-800 my-8">
            عن المشروع
          </h1>
          <p className="text-lg text-gray-600 my-8">
            مرحبًا بك في{" "}
            <span className="font-bold text-mainColor">سمساري</span>! هنا في{" "}
            <span className="font-bold text-mainColor">سمساري</span>، نحن نسعى
            لتقديم لك تجربة فريدة في البحث عن الشقق والإقامات المناسبة لك، بكل
            سهولة وراحة. إذا كنت طالبًا جامعيًا تبحث عن مكان جديد للإقامة بالقرب
            من جامعتك، أو حتى ترغب في تغيير مكان سكنك، نحن هنا لنجعل هذه المهمة
            أسهل وأسرع بالنسبة لك.
          </p>

          <h2 className="text-2xl font-bold text-gray-800 mb-4">
            ما هو مشروع <span className="font-bold text-mainColor">سمساري</span>
            ؟
          </h2>
          <p className="text-lg text-gray-600 my-8">
            <span className="font-bold text-mainColor">سمساري</span> هو مشروع
            تخرج من كلية الحاسبات والمعلومات، وجاء ليحل لك مشكلة كبيرة – كيف تجد
            شقة مريحة وفي المكان المناسب لك، ولكن بطريقة مختلفة. نحن لا نبحث عن
            جمع بياناتك الشخصية، بل هدفنا جمع آراء الشباب مثلك حول الشقق المتاحة
            على الموقع. الموقع يعتمد على{" "}
            <span className="font-bold">الذكاء الاصطناعي</span> الذي يستخدم
            بيانات رأيك وتجاربك ليصبح أكثر ذكاء ويعرف كيفية تقديم اقتراحات شقق
            تلائمك بشكل أفضل في المرات القادمة. يعني كده كل ما تشارك رأيك، كل ما
            يصير النظام أفضل في مساعدتك أنت وزملائك في المستقبل!
          </p>

          <h2 className="text-2xl font-bold text-gray-800 mb-4">
            لماذا رأيك مهم؟
          </h2>
          <p className="text-lg text-gray-600 my-8">
            هدفنا الأساسي هو <span className="font-bold">جمع آراء الشباب</span>{" "}
            الذين يشاركون في تجاربهم مع الشقق والعقارات. هذه الآراء ليست فقط
            مهمة لتحسين الموقع، ولكن أيضًا لبناء{" "}
            <span className="font-bold">نظام توصية ذكي</span> يمكنه تقديم
            اقتراحات شقق بناءً على ذوقك وتفضيلاتك الشخصية. ما نحتاجه منك هو{" "}
            <span className="font-bold">رأيك الصريح</span> حول الشقق التي جربتها
            أو تابعتها. هل كانت الشقة مريحة؟ هل كانت قريبة من مكان الدراسة؟ كل
            هذه الملاحظات ستساعدنا في تحسين الخدمة وتقديم توصيات أفضل لك ولغيرك
            من الطلاب.
          </p>

          <h2 className="text-2xl font-bold text-gray-800 mb-4">
            كيف يعمل الموقع؟
          </h2>
          <p className="text-lg text-gray-600 my-8">
            الموقع سهل الاستخدام! كل ما عليك فعله هو البحث عن الشقق التي تهمك،
            وقراءة تقييمات وتجارب الطلاب الآخرين. إذا جربت شقة بنفسك، يمكنك ترك
            تقييمك ومشاركة تجربتك مع الآخرين. كل تقييم تقدمه يجعل النظام أذكى،
            مما يساعده على تقديم توصيات شقق دقيقة أكثر، بحيث تجد دائمًا الخيار
            الأنسب لك.
          </p>

          <h2 className="text-2xl font-bold text-gray-800 mb-4">
            كيف يمكنني مساعدتكم؟
          </h2>
          <ul className="list-disc pl-5 text-lg text-gray-600 my-8">
            <li>شارك تقييمك: إذا كنت قد زرت شقة، سجل رأيك وشاركه مع الجميع.</li>
            <li>
              انشر الموقع: إذا كان لديك أصدقاء أو زملاء في الجامعة يبحثون عن
              شقة، شارك الموقع معهم، لأن كل شخص يساهم معنا يساعد في تحسين
              الخدمة.
            </li>
            <li>
              تابعنا: تابعنا على وسائل التواصل الاجتماعي لكي تبقى على اطلاع
              بأحدث العروض والتحديثات.
            </li>
          </ul>

          <h2 className="text-2xl font-bold text-gray-800 mb-4">
            ماذا سيحدث بعد جمع الآراء؟
          </h2>
          <p className="text-lg text-gray-600 my-8">
            كل رأي أو تقييم تقدمه يساهم في{" "}
            <span className="font-bold">تحسين النظام</span> ليكون أكثر ذكاء
            وتقديم اقتراحات شقق أفضل لك. نحن نستخدم بيانات الآراء والتقييمات
            لبناء
            <span className="font-bold">نموذج ذكاء اصطناعي</span> قادر على تحليل
            التفضيلات بشكل دقيق لتقديم أفضل الخيارات لك. مع مرور الوقت، سنوسع
            المشروع ليشمل مناطق أخرى، مما يعني أن الجميع سيكون لديهم فرصة
            للاستفادة من هذه المنصة الرائعة.
          </p>

          <h2 className="text-2xl font-bold text-gray-800 mb-4">في النهاية</h2>
          <p className="text-lg text-gray-600 my-8">
            نحن هنا لنجعل حياتك أسهل. بتقديم رأيك، ستساعدنا على تحسين{" "}
            <span className="font-bold text-mainColor">سمساري</span> لتصبح
            المنصة التي يعتمد عليها كل الطلاب الجامعيين في إيجاد الشقق المناسبة
            لهم. شكرًا لك على دعمك، وكل تقييم تقدمه هو خطوة نحو تحسين الخدمة!
          </p>

          <div className="mt-8 mb-32">
            <h2 className="text-2xl font-bold mb-4">تواصل معنا</h2>
            <p className="mb-4">
              إذا كان لديك أي استفسار أو اقتراح أو ترغب في التواصل معنا لتحسين
              تجربتك، نحن هنا لمساعدتك. لا تتردد في الاتصال بنا!
            </p>
            <Link
              to="/contact"
              className="text-mainColor hover:text-mainColorHover hover:underline font-semibold"
            >
              اضغط هنا لتواصل معنا
            </Link>
          </div>

          <div className="text-center mt-16">
            <p className="text-gray-600">
              This is the demo version of the website, version 1.2.1 © 2024.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutUs;
