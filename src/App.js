import { Toaster, toast } from "react-hot-toast";
import { RouterProvider } from "react-router-dom";
import router from "./routes/Router";
import { useState, useEffect } from "react";
import SessionTimer from "./utlis/SessionTimer";
import { signout } from "./utlis/helper";
import { useContext } from "react";
import { AllContext } from "./hooks/ContextData";

export default function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(true);
  const { user, setUser } = useContext(AllContext);

  const handleLogout = () => {
    setIsLoggedIn(false);
  };

  useEffect(() => {
    if (!isLoggedIn) { }
  }, [isLoggedIn]);

  function navigateToRoute(routePath) {
    window.location.href = routePath;
  }


  return (
    <div>
      {isLoggedIn ? (
        <div>
          <RouterProvider router={router}></RouterProvider>
          <Toaster
            containerStyle={{
              marginTop: '145px',
            }}
          />
          <SessionTimer onLogout={handleLogout} />
        </div>
      ) : (
        <div>
          {signout(() => {
            setUser("");
            toast.success('User Logout Successfully')
            navigateToRoute("/login")
          })}
          {/* <h2 className=" text-primary fw-bold text-center my-auto">If the idel time is more than 5 minutes, you are logged out from the system.</h2> */}
        </div>
      )}
    </div>
  );
}
