import { useEffect, useState, useCallback } from "react";
import { useFirebase } from "../../../Firebase/useFirebase";
import Rating from "../../../components/Rating";
import { useFetchDataContext } from "../../../context/FetchDataContext";

const RatingComponent = ({ id, comments }) => {
  const { getAllRatingsForApartment } = useFirebase();
  const [ratingData, setRatingData] = useState([]);
  const [displayRating, setDisplayRating] = useState(6);

  const { commentUpdated } = useFetchDataContext();

  useEffect(() => {
    console.log("commentUpdated : ", commentUpdated);
    console.log("Old", ratingData );
  }, [commentUpdated]);

  const fetchRatings = useCallback(async () => {
    if (ratingData.length === 0) {
      const ratings = await getAllRatingsForApartment(id);
      setRatingData(ratings);
    }
    console.log("Old", ratingData );

  }, [id, ratingData.length, getAllRatingsForApartment]);

  useEffect(() => {
    fetchRatings();
  }, [fetchRatings, commentUpdated]);

  useEffect(() => {
    if (comments) {
      fetchRatings();
    }
  }, [comments, fetchRatings, commentUpdated]);

  const formatTimestamp = (timestamp) => {
    const date = new Date(timestamp.seconds * 1000);
    return date.toLocaleString();
  };

  const calculateOverallRating = (rating) => {
    const categories = [
      "availabilityOfHouseholdEquipment",
      "decorAndDesign",
      "facilities",
      "furniture",
      "overallSatisfaction",
      "proximityToVitalAreas",
      "services",
      "valueForMoney",
    ];
    const totalRating = categories.reduce(
      (sum, category) => sum + (parseFloat(rating?.[category]?.rate) || 0),
      0
    );
    return (totalRating / categories.length).toFixed(1).replace(/\.0$/, "");
  };

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-2xl font-semibold text-center mb-4">
        تقييمات المستخدمين
      </h1>

      <div className="space-y-1">
        {ratingData.length > 0 ? (
          ratingData
            .sort((a, b) => b.timestamp - a.timestamp)
            .slice(0, displayRating)
            .map((rate, index) => {
              const overallRating = calculateOverallRating(rate.rating);
              const comment = rate.rating?.comment || "لا يوجد تعليق";
              const userName = rate.userName || "مستخدم";
              if(!rate.rating.displayName){
                rate.userName  = "مستخدم " ; 
              }

              const userImage =
                rate.image ||
                "https://firebasestorage.googleapis.com/v0/b/semsarapp-dbd9a.firebasestorage.app/o/Avatars%2F770117_people_512x512.png?alt=media&token=fff55841-d7d0-43b0-b3bc-d315536559c7";

              return (
                <div
                  key={index}
                  className="bg-white shadow-lg rounded-lg p-4 border border-gray-200 flex items-cent er md:flex-row justify-between flex-col"
                >
                  <div className="flex flex-row items-center ">
                    <img
                      src={userImage}
                      alt="User"
                      className="rounded-full w-10 h-10 object-cover mx-4"
                    />

                    <div className="flex-1">
                      <div className="font-medium text-sm mb-2">{userName}</div>
                      <div className="flex items-center">
                        {/* <span>{"تعليق: "}</span> */}
                        <q className="font-medium text-gray-400"> {comment} </q>
                      </div>
                    </div>
                  </div>
                  <div>
                    <div className="text-sm text-gray-500 ml-4">
                      {rate.timestamp
                        ? formatTimestamp(rate.timestamp)
                        : "غير متوفر"}
                    </div>
                    <div>
                      <span className="font-medium mr-2">التقييم العام:</span>
                      <Rating rating={overallRating} />
                    </div>
                  </div>
                </div>
              );
            })
        ) : (
          <div className="text-center text-gray-500">لا توجد تقييمات بعد</div>
        )}
      </div>
      {ratingData.length > displayRating && (
        <button
          className="block mx-auto mt-4 bg-blue-500 text-white px-4 py-2 rounded-lg"
          onClick={() => setDisplayRating(displayRating + 6)}
        >
          عرض المزيد
        </button>
      )}
    </div>
  );
};

export default RatingComponent;
