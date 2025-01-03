import React, { Suspense, lazy } from "react";
import ReactDOM from "react-dom/client";
import Header from "./src/components/Header";
import Body from "./src/components/Body";
import { RouterProvider, createBrowserRouter, Outlet } from "react-router-dom";
import About from "./src/components/About";
import Contact from "./src/components/Contact";
import Error from "./src/components/Error";
import RestaurantMenuCard from "./src/components/RestaurantMenuCard";
import { Provider } from "react-redux";
import { AppStore } from "./src/utils/store/appStore";

const Grocery = lazy(()=> import("./src/components/Grocery"));

const AppLayout = () => {
  return (
    <Provider store={AppStore}>
    <div>
      <Header />
      <Outlet/>
    </div>
    </Provider>
  );
};

const appRouter = createBrowserRouter([
  { 
    path:"/", 
    element: <AppLayout/>,
    children:[
      {
        path:"/", 
        element: <Body/>
      },
      {
        path:"/about", 
        element: <About/>
      },
      {
        path:"/contact", 
        element: <Contact/>
      },
      {
        path:"/grocery", 
        element: <Suspense fallback={<h1>Please wait Grocery store is loading</h1>}><Grocery/></Suspense>
      },
      {
        path:"/restaurant/:resId", 
        element: <RestaurantMenuCard/>
      }
    ], 
    errorElement: <Error/>
  },
 
])
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={appRouter} />);
