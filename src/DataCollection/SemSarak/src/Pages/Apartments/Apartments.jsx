import React, { Suspense } from "react";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";

// Lazy load the sections
const HeroSection = React.lazy(() => import("./Sections/HeroSection"));
const LoadingFallback = React.lazy(() =>
  import("../../components/LoadingFallback")
);
const ApartmentCardsPage = React.lazy(() =>
  import("./Sections/ApartmentCardsPage")
);

const Apartments = () => {
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
