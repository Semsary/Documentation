import { createContext, useContext, useState } from "react";

const RatingContext = createContext();

const RatingProvider = ({ children }) => {
  //   const { AddRating } = useFirebase();

  const [rating, setRating] = useState({
    apartmentId: "ss",
    userId: "ss",
    services: {
      name: "الخدمات",
      description: "الخدمات التى تقدمها الشقة",
      rate: 0,
    },
    facilities: {
      name: "المرافق",
      description: "التقييم العام للمرافق المتاحة في الشقة",
      rate: 0,
    },
    valueForMoney: {
      name: "القيمة مقابل السعر",
      description: "التقييم العام للقيمة مقابل السعر",
      rate: 0,
    },
    furniture: {
      name: "الأثاث",
      description: "التقييم العام لجودة الأثاث",
      rate: 0,
    },
    decorAndDesign: {
      name: "الديكور والتصميم",
      description: "التقييم العام للديكور والتصميم داخل الشقة",
      rate: 0,
    },
    proximityToVitalAreas: {
      name: "مدى القرب من المناطق الحيوية",
      description: "التقييم العام لمدى قرب الشقة من الأماكن الحيوية",
      rate: 0,
    },
    availabilityOfHouseholdEquipment: {
      name: "توافر المعدات المنزلية",
      description: "التقييم العام لتوافر المعدات المنزلية في الشقة",
      rate: 0,
    },
    overallSatisfaction: {
      name: "مدي رضاك عن الشقة",
      description: "التقييم العام لمدى رضاك عن الشقة بشكل عام",
      rate: 0,
    },
    comment: "jghk",
  });

  const handelRateChange = (category, newRate) => {
    setRating((prevRating) => ({
      ...prevRating,
      [category]: {
        ...prevRating[category],
        rate: newRate,
      },
    }));
    console.log("Updated rating in context:", rating);
  };

  return (
    <RatingContext.Provider value={{ handelRateChange }}>
      {children}
    </RatingContext.Provider>
  );
};

export default RatingProvider;

export const useRating = () => {
  return useContext(RatingContext);
};
