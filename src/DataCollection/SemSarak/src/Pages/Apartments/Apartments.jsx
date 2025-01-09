import React, { Suspense, useEffect } from "react";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import { logEvent } from "firebase/analytics";
import { analytics } from "../../Firebase/Firebase";

// Lazy load the sections
const HeroSection = React.lazy(() => import("./Sections/HeroSection"));
const LoadingFallback = React.lazy(() =>
  import("../../components/LoadingFallback")
);
const ApartmentCardsPage = React.lazy(() =>
  import("./Sections/ApartmentCardsPage")
);

// import { db } from "../../Firebase/Firebase";
// import { doc, getDoc, setDoc, updateDoc, increment } from "firebase/firestore";

const Apartments = () => {

    useEffect(() => {
      logEvent(analytics, "Home_page_view");
    }, []);


  // useEffect(() => {
  //   const updateVisitorCount = async () => {
  //     try {
  //       const visitorsRef = doc(
  //         db,
  //         "websiteData",
  //         "HomeVisitorCount"
  //       );
  //       const docSnap = await getDoc(visitorsRef);
  //       if (docSnap.exists()) {
  //         await updateDoc(visitorsRef, {
  //           count: increment(1),
  //         });
  //       } else {
  //         await setDoc(visitorsRef, {
  //           count: 1,
  //         });
  //       }
  //     } catch (error) {
  //       console.error("Error updating visitor count: ", error);
  //     }
  //   };

  //   updateVisitorCount();
  // }, []);

  return (
    <div>
      <Header />
      <Suspense fallback={<LoadingFallback />}>
        <HeroSection />
      </Suspense>
      <Suspense fallback={<LoadingFallback />}>
        <ApartmentCardsPage />
      </Suspense>
      <Footer />
    </div>
  );
};

export default Apartments;
