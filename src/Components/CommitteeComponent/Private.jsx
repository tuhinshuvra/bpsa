import { useContext } from "react";
import { Navigate } from "react-router-dom";
import { AllContext } from "../../hooks/ContextData";

const Private = ({ children }) => {
  const { user, loading } = useContext(AllContext);
  // console.log(user);

  if (loading) {
    return <progress className="progress w-56"></progress>;
  }

  if (!user) {
    return <Navigate to="/login" replace />;
  }

  return children;
};

export default Private;
