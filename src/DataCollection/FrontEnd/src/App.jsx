import { createBrowserRouter, RouterProvider } from "react-router-dom";
import LoginPage from "./Pages/Login/LoginPage";
import AddAppartementPage from "./Pages/AddAppartement/AddAppartementPage";

const Router = createBrowserRouter([
  // { path: "/", element: <Home /> },
  { path: "login", element: <LoginPage /> },
  { path: "register", element: <AddAppartementPage /> },
]);

const App = () => {
  return <RouterProvider router={Router} />;
};

export default App;
