import {
  addDoc,
  collection,
  doc,
  getDoc,
  getDocs,
  increment,
  setDoc,
  updateDoc,
} from "firebase/firestore";
import { db } from "./Firebase.js";

export const useFirebase = () => {
  const AddApartment = async (apartment) => {
    const counterRef = doc(db, "counters", "apartments");
    try {
      const counterDoc = await getDoc(counterRef);
      let newId = 1;
      if (counterDoc.exists()) {
        newId = counterDoc.data().count + 1;
        await updateDoc(counterRef, {
          count: increment(1),
        });
      } else {
        await setDoc(counterRef, { count: 1 });
      }

      const apartmentRef = doc(db, "apartements", newId.toString());
      await setDoc(apartmentRef, apartment);
      console.log("Document written with ID: ", newId);
    } catch (e) {
      console.error("Error adding document: ", e);
    }
  };

  const GetAppartements = async () => {
    const querySnapshot = await getDocs(collection(db, "apartements"));
    const appartements = [];
    querySnapshot.forEach((doc) => {
      appartements.push(doc.data());
    });

    console.log(appartements);
    return appartements;
  };

  return {
    AddApartment,
    GetAppartements,
  };
};
