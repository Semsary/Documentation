import { Navigate, useLocation } from "react-router-dom";
import { useUserContext } from "./UserContext";

const RequiredCompleteProfile = ({ children }) => {
  const { UserData } = useUserContext();
    const location = useLocation();

  if (!UserData._firsStepFlag || !UserData._secondStepFlag) {
    return (
      <Navigate to="/profile" state={{ path: location.pathname }} />
    );
  }

  return children;
};

export default RequiredCompleteProfile;
