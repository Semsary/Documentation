import { Navigate, useLocation } from "react-router-dom";
import { useAuth } from "./AuthContext";
import { useUserContext } from "./UserContext";

const RequirdAuth = ({ children }) => {
  const { UserData } = useUserContext();

  const { currentUser } = useAuth();
  const location = useLocation();

  if (!currentUser) {
    return <Navigate to="/login" state={{ path: location.pathname }} />;
  }

  // console.log(UserData._firsStepFlag + " - " + UserData._secondStepFlag);
 

  // if (!UserData._firsStepFlag || !UserData._secondStepFlag) {
  //   return <Navigate to="/profile" state={{ path: location.pathname }} />;
  // }

  return children;
};

export default RequirdAuth;
