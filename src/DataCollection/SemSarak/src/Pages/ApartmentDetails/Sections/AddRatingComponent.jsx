import { useEffect, useState } from "react";
import { useFirebase } from "../../../Firebase/useFirebase";
import { useAuth } from "../../../context/AuthContext";
import Rating from "../../../components/Rating";
import toast, { Toaster } from "react-hot-toast";
import { useFetchDataContext } from "../../../context/FetchDataContext";

const AddRatingComponent = ({ id }) => {
  const { addOrUpdateRating, getAllRatingsForApartment } = useFirebase();
  const { SearchUser } = useFirebase();
  const { getUserId } = useAuth();
  const Uid = getUserId();
  const Udata = SearchUser(Uid);
  const [userData, setUserData] = useState({
    name: "s",
    email: "s",
    type: "s",
  });

    const { Addcomment } = useFetchDataContext();

  
  

  useEffect(() => {
    const fetchUserData = async () => {
      const data = await Udata; // Wait for the data to resolve
      setUserData(data); // Set the resolved data in the state
    };


    fetchUserData(); // Call the async function
  }, [Uid, Udata]); // Include Uid and Udata as dependencies if they can change

  const [rating, setRating] = useState({
    services: { name: "الخدمات", rate: 0 },
    facilities: { name: "المرافق", rate: 0 },
    valueForMoney: { name: "القيمة مقابل السعر", rate: 0 },
    furniture: { name: "الأثاث", rate: 0 },
    decorAndDesign: { name: "الديكور والتصميم", rate: 0 },
    proximityToVitalAreas: { name: "مدى القرب من المناطق الحيوية", rate: 0 },
    availabilityOfHouseholdEquipment: {
      name: "توافر المعدات المنزلية",
      rate: 0,
    },
    overallSatisfaction: { name: "مدى رضاك عن الشقة", rate: 0 },
    comment: "",
    displayName : true
  });

  const handleRatingChange = (category, newRating) => {
    setRating((prevRating) => ({
      ...prevRating,
      [category]: {
        ...prevRating[category],
        rate: newRating,
      },
    }));
  };

  const HandelCheckName = () => {
    setRating((prevRating) => ({
      ...prevRating,
      displayName: !prevRating.displayName,
    }));
  };




  const handleCommentChange = (e) => {
    if (e.target.value.length > 300) {
      return;
    }
    setRating((prevRating) => ({
      ...prevRating,
      comment: e.target.value, // Update the comment in the state
    }));
  };


  // check if all ratings not equal to 0
  const checkRating = () => {
    for (const key in rating) {
      if (rating[key].rate === 0) {
        return false;
      }
    }
    return true;
  };

  const submitRating = () => {
    if (!checkRating()) {
      toast.error("الرجاء تقييم جميع العناصر");
      return;
    }


    try {
    addOrUpdateRating(
      Uid,
      id,
      rating,
      userData.name,
      userData.email,
      userData.image
    );
    Addcomment();
    toast.success("تم تقديم التقييم بنجاح");
    setTimeout(() => {
      toast("شكرا على مساهمتك في تحسين خدماتنا", {
        icon: "🫶",
      });
    }, 1000); // 1 second delay

  } catch (error) {
    toast.error("برجاء اكمال جميع بيانات الملف الشخصي لتتمكن من تقديم تقييم");
    }

  };

  const adDescription = {
    services: {
      name: "الخدمات",
      description:
        "تقييم جودة الخدمات المقدمة مثل الصيانة، الإنترنت، والاستقبال.",
    },
    facilities: {
      name: "المرافق",
      description:
        "تقييم المرافق المتاحة مثل حمام السباحة وصالة الألعاب الرياضية.",
    },
    valueForMoney: {
      name: "القيمة مقابل السعر",
      description: "تقييم مدى توافق سعر الشقة مع جودتها وخدماتها.",
    },
    furniture: {
      name: "الأثاث",
      description: "تقييم جودة وراحة الأثاث داخل الشقة.",
    },
    decorAndDesign: {
      name: "الديكور والتصميم",
      description: "تقييم جمال وأناقة تصميم الشقة الداخلية.",
    },
    proximityToVitalAreas: {
      name: "مدى القرب من المناطق الحيوية",
      description: "تقييم قرب الشقة من الأماكن المهمة .",
    },
    availabilityOfHouseholdEquipment: {
      name: "توافر المعدات المنزلية",
      description: "تقييم توفر المعدات المنزلية مثل الغسالة والثلاجة.",
    },
    overallSatisfaction: {
      name: "مدى رضاك عن الشقة",
      description: "تقييم عام للرضا عن الشقة بناءً على عدة عوامل.",
    },
    comment: {
      name: "التعليق",
      description: "مكان لكتابة تعليقاتك الشخصية حول تجربتك في الشقة.",
    },
  };

  return (
    <div className="p-6 mx-auto bg-white rounded-lg shadow-lg border border-gray-200">
      <h2 className="text-xl font-semibold text-gray-800 mb-6">تقييم الشقة</h2>
      <form onSubmit={(e) => e.preventDefault()}>
        <div className="grid md:grid-cols-2 grid-cols-1 gap-9">
          {Object.keys(adDescription).map(
            (key) =>
              key !== "comment" && (
                <div key={key} className=" gap-3">
                  <div className="text-gray-700 font-medium flex gap-2">
                    <p>{adDescription[key].name}:</p>
                    <p className="text-xs pt-1">
                      {adDescription[key].description}
                    </p>
                  </div>
                  <div className="flex flex-row gap-3">
                    <input
                      type="range"
                      min="1"
                      max="5"
                      required
                      value={rating[key].rate}
                      onChange={(e) => handleRatingChange(key, e.target.value)}
                      className="w-full"
                    />
                    <Rating rating={rating[key].rate} />
                  </div>
                  <hr className="mt-2" />
                </div>
              )
          )}
        </div>

        <div className="mb-6">
          <label
            htmlFor="comment"
            className="block text-gray-700 font-medium mb-2"
          >
            {adDescription.comment.name}:
          </label>
          <p className="text-xs text-gray-500 mb-4">
            {adDescription.comment.description}
          </p>
          <textarea
            value={rating.comment}
            onChange={handleCommentChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-200"
            rows="4"
            placeholder="أدخل تعليقك هنا"
            aria-label="Comment about the apartment"
          />

         <div className="flex justify-between">
          <div>
          <label className="text text-gray-500 mt-2">
            <input type="checkbox" name="" id="" className="mr-2"   onChange={HandelCheckName} />
            اخفاء اسمى من التعليقات العامة
          </label>
          </div>

          <div>

          <label className="text-xs text-gray-500 mt-2">
            {rating.comment.length}/300
          </label>
          </div>
          
         </div>
          
            
        </div>
        

        <button
          onClick={submitRating}
          className="w-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-lg transition duration-300 focus:outline-none focus:ring-2 focus:ring-blue-600"
        >
          تقديم التقييم
        </button>
      </form>
      <Toaster position="top-center" reverseOrder={false} />
    </div>
  );
};

export default AddRatingComponent;
