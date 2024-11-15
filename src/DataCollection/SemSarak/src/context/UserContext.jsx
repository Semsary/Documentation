import { createContext, useContext, useState, useEffect } from "react";
import { useFirebase } from "../Firebase/useFirebase";
import { useAuth } from "./AuthContext";

const UserContext = createContext();

const UserProvider = ({ children }) => {
  const { addUserData, getUserSavedData, getLogedUserData } = useFirebase();
  const [Uid, setUid] = useState(null);
  const { getUserId, getUserFullEmail } = useAuth();
  const [LogedUserData, setLogedUserData] = useState(null);

  const [UserData, setUserData] = useState({
    apartmentType: "",
    electricity: "",
    gas: "",
    internet: "",
    location: "",
    number: "",
    priceFrom: "",
    priceTo: "",
    time: "",
    water: "",
    Govern: "",
    Uid: "",
    city: "",
    college: "",
    email: "",
    name: "",
    registerTime: "",
    type: "",
    university: "",
    year: "",
    _firsStepFlag: false,
    _secondStepFlag: false,
    _thirdStepFlag: false,
  });

  const addUserMainData = async (data, Uid) => {
    setUserData((prevData) => ({
      ...prevData,
      ...data,
      Uid,
      email: getUserFullEmail(),
      image:
        "https://firebasestorage.googleapis.com/v0/b/semsarapp-dbd9a.firebasestorage.app/o/Avatars%2FAvatar.png?alt=media&token=57861da8-b98b-49b1-b878-3a231a72bc27",
      _firsStepFlag: true,
    }));

    setUid(Uid);
  };

  // create to retun object of user data after featch getLogedUserData(Uid) and return it
  const getUserData = async () => {
    const data = await getLogedUserData(Uid);
    return data;
  }
  

  /// text function
  useEffect(() => {
    // console.log("from UserContext: ", UserData);
  }, [UserData]);

  const addUserMoreData = async (data, Uid) => {
    setUserData((prevData) => ({
      ...prevData,
      ...data,
      Uid,
      email: getUserFullEmail(),
      _secondStepFlag: true,
    }));

    setUid(Uid);
  };

  useEffect(() => {
    if (UserData && Uid) {
      addUserData(UserData, Uid);
    }
  }, [UserData, Uid]);

  useEffect(() => {
    const Uid = getUserId();
    const Email = getUserId();
    const fetchUserData = async () => {
      try {
        const data = await getUserSavedData(Uid); // Await the promise
        if (data) {
          // console.log("from UserContext: ", data);
          setUserData(data);
        } else {
          // console.log("No user data found");
        }
      } catch (error) {
        // console.error("Error fetching user data:", error);
      }
    };

    fetchUserData();
  }, []);

  return (
    <UserContext.Provider
      value={{
        UserData,
        addUserMainData,
        addUserMoreData,
        getUserData,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export default UserProvider;

export const useUserContext = () => {
  return useContext(UserContext);
};
