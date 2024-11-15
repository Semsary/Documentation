import { Suspense, lazy } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ApartmentProvider from "./context/ApartmentContext";
import AuthProvider from "./context/AuthContext";
import UserProvider from "./context/UserContext";
import FetchDataProvider from "./context/FetchDataContext";
import LoadingFallback from "./components/LoadingFallback";
import Dashboard from "./Pages/Dashboard/Dashboard";

const LoginPage = lazy(() => import("./Pages/Login/LoginPage"));
const SignUpPage = lazy(() => import("./Pages/Login/SignUpPage"));
const HomePage = lazy(() => import("./Pages/Home/HomePage"));
const ProfileData = lazy(() => import("./Pages/Profile/ProfileData"));
const UserAccount = lazy(() => import("./Pages/Profile/UserAccount"));
const AboutUs = lazy(() => import("./Pages/AboutUs/AboutUs"));
const ContactUs = lazy(() => import("./Pages/ContactUs/ContactUs"));
const PageNotFound = lazy(() => import("./Pages/Errors/PageNotFound"));
const Apartments = lazy(() => import("./Pages/Apartments/Apartments"));
const RequirdAuth = lazy(() => import("./context/RequirdAuth"));
const ErrorPage = lazy(() => import("./Pages/Errors/ErrorPage"));
const AddAppartementPage = lazy(() =>
  import("./Pages/AddAppartement/AddAppartementPage")
);
const ApartmentDetails = lazy(() =>
  import("./Pages/ApartmentDetails/ApartmentDetails")
);

const Router = createBrowserRouter([
  {
    path: "/",
    element: <Apartments />,
    errorElement: <ErrorPage />,
  },
  {
    path: "apartment/:id",
    element: (
      <RequirdAuth>
        <ApartmentDetails />
      </RequirdAuth>
    ),
    errorElement: <ErrorPage />,
  },
  { path: "login", element: <LoginPage />, errorElement: <ErrorPage /> },
  {
    path: "signup",
    element: <SignUpPage />,
    errorElement: <ErrorPage />,
  },
  {
    path: "profile",
    element: <ProfileData />,
    errorElement: <ErrorPage />,
  },

  {
    path: "Test-home",
    element: (
      <RequirdAuth>
        <HomePage />
      </RequirdAuth>
    ),
    errorElement: <ErrorPage />,
  },
  {
    path: "add",
    element: (
      <RequirdAuth>
        <AddAppartementPage />
      </RequirdAuth>
    ),
    errorElement: <ErrorPage />,
  },
  {
    path: "account",
    element: (
      <RequirdAuth>
        <UserAccount />
      </RequirdAuth>
    ),
    errorElement: <ErrorPage />,
  },

  {
    path: "/about",
    element: <AboutUs />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/contact",
    element: <ContactUs />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/none-admin",
    element: <Dashboard />,
    errorElement: <ErrorPage />,
  },
  {
    path: "*",
    element: <PageNotFound />,
    errorElement: <ErrorPage />,
  },
]);

const App = () => {
  return (
    <AuthProvider>
      <ApartmentProvider>
        <UserProvider>
          <FetchDataProvider>
            <Suspense fallback={<LoadingFallback />}>
              <RouterProvider router={Router} />
            </Suspense>
          </FetchDataProvider>
        </UserProvider>
      </ApartmentProvider>
    </AuthProvider>
  );
};

export default App;
