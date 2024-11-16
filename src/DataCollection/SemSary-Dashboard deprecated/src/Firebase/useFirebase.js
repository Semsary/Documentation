import {
  addDoc,
  collection,
  doc,
  getDoc,
  getDocs,
  increment,
  serverTimestamp,
  setDoc,
  updateDoc,
  query,
  where,
  limit,
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
      apartment.id = newId; // Save the id in apartment data
      await setDoc(apartmentRef, apartment);
      //console.log("Document written with ID: ", newId);
    } catch (e) {
      console.error("Error adding document: ", e);
    }
  };

  const addUserData = async (data, Uid) => {
    //console.log("from useFirebase: ", data);
    const userRef = doc(db, "users", Uid);
    try {
      await setDoc(userRef, data);
      //console.log("Document written with ID: ", Uid);
    } catch (e) {
      console.error("Error adding document: ", e);
    }
  };

  const getUserSavedData = async (Uid) => {
    const userRef = doc(db, "users", Uid);
    const docSnap = await getDoc(userRef);
    if (docSnap.exists()) {
      return docSnap.data();
    } else {
      //console.log("No such document!");
    }
  };

  const GetAppartements = async () => {
    const querySnapshot = await getDocs(collection(db, "apartements"));
    const appartements = [];
    querySnapshot.forEach((doc) => {
      appartements.push(doc.data());
    });
    return appartements;
  };

  const GetAppartementById = async (id) => {
    const docRef = doc(db, "apartements", id);
    const docSnap = await getDoc(docRef);
    if (docSnap.exists()) {
      return docSnap.data();
    } else {
      //console.log("No such document!");
    }
  };

  // Function to add or update a rating
  const addOrUpdateRating = async (userId, apartmentId, rating, userName ,email,image) => {
    try {
      const ratingRef = query(
        collection(db, "ratings"),
        where("userId", "==", userId),
        where("apartmentId", "==", apartmentId),
        limit(1)
      );

      const snapshot = await getDocs(ratingRef);

      if (!snapshot.empty) {
        const ratingDocId = snapshot.docs[0].id;
        const ratingDocRef = doc(db, "ratings", ratingDocId);

        await updateDoc(ratingDocRef, {
          rating: rating,
          timestamp: serverTimestamp(),
        });
        //console.log("Rating updated successfully");
      } else {
        await addDoc(collection(db, "ratings"), {
          apartmentId: apartmentId,
          userId: userId,
          rating: rating,
          userName: userName,
          email: email,
          image: image,
          timestamp: serverTimestamp(),
        });
        //console.log("Rating added successfully");
      }
    } catch (error) {
      console.error("Error adding/updating rating: ", error);
    }
  };

  const getAllRatingsForApartment = async (apartmentId) => {
    const ratingsRef = query(
      collection(db, "ratings"),
      where("apartmentId", "==", apartmentId)
    );

    const snapshot = await getDocs(ratingsRef);
    const ratings = [];
    snapshot.forEach((doc) => {
      ratings.push(doc.data());
    });

    return ratings;
  };

  const getUserEmailById = async (userId) => {
    const userRef = doc(db, "users", userId);
    const docSnap = await getDoc(userRef);
    if (docSnap.exists()) {
      return docSnap.data().email;
    } else {
      //console.log("No such document!");
    }
  };

  const SearchUser = async (id) => {
    const docRef = doc(db, "users", id);
    const docSnap = await getDoc(docRef);
    if (docSnap.exists()) {
      return docSnap.data();
    } else {
      //console.log("No such document!");
    }
  };

  const checkFirstFlag = async (Uid) => {
    const userRef = doc(db, "users", Uid);
    const docSnap = await getDoc(userRef);
    if (docSnap.exists()) {
      return docSnap.data()._firstStepFlag;
    } else {
      return "NoUser";
    }
  };

  const checkSecondFlag = async (Uid) => {
    const userRef = doc(db, "users", Uid);
    const docSnap = await getDoc(userRef);
    if (docSnap.exists()) {
      return docSnap.data()._secondStepFlag;
    } else {
      return "NoUser";
    }
  }

  const getLogedUserData = async (Uid) => {
    const userRef = doc(db, "users", Uid);
    const docSnap = await getDoc(userRef);
    // console.log("From Ues firebase ", Uid)
    if (docSnap.exists()) {
      return docSnap.data();
    } else {
      return "NoUser";
    }
  }

  const addSugetions = async (data) => {
    // add in suggestions doc with auto id
    const suggestionsRef = collection(db, "suggestions");
    await addDoc(suggestionsRef, {
      ...data,
      timestamp: serverTimestamp(),
    });

    //console.log("Document written with ID: ", suggestionsRef.id);
    
  }




  return {
    AddApartment,
    GetAppartements,
    addUserData,
    addOrUpdateRating,
    getAllRatingsForApartment,
    getUserSavedData,
    GetAppartementById,
    getUserEmailById,
    SearchUser,
    checkFirstFlag,
    checkSecondFlag,
    getLogedUserData,
    addSugetions,
  };
};
