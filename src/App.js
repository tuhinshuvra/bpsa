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
    if (!isLoggedIn) {
      // User is logged out, make sure to clear any sessions or tokens here
      // Remove the SessionTimer component from the DOM
    }
  }, [isLoggedIn]);



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
          {/* {signout(() => {
            setUser("");
            toast.success('User Logout Successfully')
            navigate("/login")
          })} */}

          <h2>You are log out from the system</h2>
        </div>
      )}
    </div>
  );
}
