import { createBrowserRouter, RouterProvider } from "react-router-dom";
import LoginPage from "./Pages/Login/LoginPage";
import AddAppartementPage from "./Pages/AddAppartement/AddAppartementPage";
import ApartmentProvider from './context/ApartmentContext';
import Apartments from "./Pages/Apartments/Apartments";
import SignUpPage from "./Pages/Login/SignUpPage";
import AuthProvider from "./context/AuthContext";
import HomePage from "./Pages/Home/HomePage";

const Router = createBrowserRouter([
  { path: "/apartments", element: <Apartments /> },
  { path: "login", element: <LoginPage/> },
  { path: "signup", element: <SignUpPage /> },
  {path:"home",element:<HomePage/>},

  { path: "register", element: <AddAppartementPage /> },
]);

const App = () => {
  return (
    <AuthProvider>
    <ApartmentProvider>
      <RouterProvider router={Router} />
    </ApartmentProvider>
    </AuthProvider>
  );
};

export default App;
