import { Toaster } from "react-hot-toast";
import { RouterProvider } from "react-router-dom";
import router from "./routes/Router";


export default function App() {
  return (
    <div>
      <RouterProvider router={router}></RouterProvider>
      <Toaster
        containerStyle={{
          marginTop: '145px',
        }}
      />
    </div>
  );
}
