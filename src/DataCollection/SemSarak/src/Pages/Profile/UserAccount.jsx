import { useEffect, useState } from "react";
import Navbar from "../../components/Header/Navbar";
import { useUserContext } from "../../context/UserContext";
import { useFirebase } from "../../Firebase/useFirebase";
import { useAuth } from "../../context/AuthContext";
import { Link } from "react-router-dom";
import { analytics } from "../../Firebase/Firebase";
import { logEvent } from "firebase/analytics";

const UserAccount = () => {
  const { getUserId, getUserFullEmail } = useAuth();
  const Uid = getUserId();

    useEffect(() => {
      logEvent(analytics, "UserAccount");
    }, []);

  const [data, setData] = useState({
    name: "",
    age: "",
    gender: "",
    university: "",
    college: "",
    year: "",
    smoker: "",
    email: "",
    registerTime: "",
    type: "",
    from: "",
    to: "",
    location: "",
    time: "",
    number: "",
    image:
      "https://firebasestorage.googleapis.com/v0/b/semsarapp-dbd9a.firebasestorage.app/o/Avatars%2FAvatar.png?alt=media&token=57861da8-b98b-49b1-b878-3a231a72bc27",
    Govern: "",
    city: "",
    electricity: "",
    water: "",
    gas: "",
    internet: "",
    height: "",
    weight: "",
  });

  const { getLogedUserData } = useFirebase();

  useEffect(() => {
    const fetchUserData = async () => {
      const UserData = await getLogedUserData(Uid);
      console.log(UserData);
      setData(UserData);
    };

    fetchUserData();
  }, []);

  return (
    <>
      <Navbar />
      {data && (
        <div className=" min-h-screen py- 8 pt-32">
          <div className="max-w-4xl mx-auto bg-white p-8 rounded-xl shadow-xl space-y-10">
            {/* Profile Header */}
            <div className="flex items-center gap-10 space-x-6">
              <div className="flex md:flex-row flex-col gap-10 justify-between  w-full">
                <div className="flex items-center gap-10 space-x-6 md:flex-row flex-col">
                  <img
                    src={data?.image}
                    alt="User Avatar"
                    className="w-24 h-24 rounded-full object-cover border-4 border-indigo-600 shadow-lg"
                  />
                  <div>
                    <h1 className="text-3xl font-semibold text-gray-800">
                      {data.name}
                    </h1>
                    <p className="text-sm text-gray-500">{data.email}</p>
                    <p className="text-xs text-gray-400">
                      تم التسجيل في: {data.registerTime}
                    </p>
                  </div>
                </div>
                <div>
                <Link  
                  to="/profile"
                className="ButtonStyle1">تعديل الحساب</Link>

                </div>
              </div>
            </div>

            {/* User Info */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="p-6 bg-white rounded-xl shadow-lg hover:shadow-2xl transition-shadow">
                <h3 className="text-xl font-semibold text-gray-700 mb-4">
                  معلومات المستخدم
                </h3>
                <ul className="space-y-3 text-gray-600">
                  <li>
                    <strong>العمر:</strong> {data.age}
                  </li>
                  <li>
                    <strong>الجنس:</strong> {data.type
                    }
                  </li>
                  <li>
                    <strong>الجامعة:</strong> {data.university}
                  </li>
                  <li>
                    <strong>الكلية:</strong> {data.college}
                  </li>
                  <li>
                    <strong>السنة الدراسية:</strong> {data.year}
                  </li>
                  <li>
                    <strong>التدخين:</strong> {data.smoker}
                  </li>
                </ul>
              </div>

              <div className="p-6 bg-white rounded-xl shadow-lg hover:shadow-2xl transition-shadow">
                <h3 className="text-xl font-semibold text-gray-700 mb-4">
                  {" "}
                  معلومات الشقة المفضلة
                </h3>
                <ul className="space-y-3 text-gray-600">
                  
                  <li>
                    <strong>نطاق السعر:</strong> {data.priceFrom
                    } - {data.priceTo} جنيه
                  </li>
                  <li>
                    <strong>الموقع:</strong> {data.location}
                  </li>
                  <li>
                    <strong>نوع الايجار المفضل:</strong> {data.time}
                  </li>
                  <li>
                    <strong> تفضيلات الإقامة:</strong> {data.apartmentType}
                  </li>
                </ul>
              </div>
            </div>

            {/* City and Utilities Info */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="p-6 bg-white rounded-xl shadow-lg hover:shadow-2xl transition-shadow">
                <h3 className="text-xl font-semibold text-gray-700 mb-4">
                  معلومات المدينة
                </h3>
                <ul className="space-y-3 text-gray-600">
                  <li>
                    <strong>المحافظة:</strong> {data.Govern}
                  </li>
                  <li>
                    <strong>المدينة:</strong> {data.city}
                  </li>
                </ul>
              </div>

              <div className="p-6 bg-white rounded-xl shadow-lg hover:shadow-2xl transition-shadow">
                <h3 className="text-xl font-semibold text-gray-700 mb-4">
                  المرافق
                </h3>
                <ul className="space-y-3 text-gray-600">
                  <li>
                    <strong>الكهرباء:</strong> {data.electricity}
                  </li>
                  <li>
                    <strong>المياه:</strong> {data.water}
                  </li>
                  <li>
                    <strong>الغاز:</strong> {data.gas}
                  </li>
                  <li>
                    <strong>الإنترنت:</strong> {data.internet}
                  </li>
                </ul>
              </div>
            </div>

            {/* Additional Info */}
            <div className="p-6 bg-white rounded-xl shadow-lg hover:shadow-2xl transition-shadow">
              <h3 className="text-xl font-semibold text-gray-700 mb-4">
                معلومات إضافية
              </h3>
              <ul className="space-y-3 text-gray-600">
                <li>
                  <strong>الطول:</strong> {data.height} سم
                </li>
                <li>
                  <strong>الوزن:</strong> {data.weight} كجم
                </li>
              </ul>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default UserAccount;
