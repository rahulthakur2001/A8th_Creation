import React, { Suspense, useEffect } from "react";
import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
import { MainLayout } from "./components/Layouts/MainLayout";
import { Loder } from "./components/Loader/Loder";
import ExploreAll from "./components/ExploreAll/ExploreAll";
import Login from "./components/Login&signup/Login";

const Dashboard = React.lazy(() => import("./components/Dashboard/Dashboard"));
const ContactUs = React.lazy(() => import("./components/ContactUs/ContactUs"));
const AboutUs = React.lazy(() => import("./components/AboutUs/AboutUs"));

function App() {
  const location = useLocation();

  useEffect(() => {
    const path = location.pathname;
    switch (path) {
      case "/":
        document.title = "Dashboard | React App";
        break;
      case "/about":
        document.title = "About Us | React App";
        break;
      case "/contact":
        document.title = "Contact Us | React App";
        break;
      case "/exploreAll":
        document.title = "Explore All | React App";
        break;
      case "/Login":
        document.title = "Login | React App";
        break;
      default:
        document.title = "Vite + React";
    }
  }, [location]);

  return (
    <Suspense fallback={<Loder />}>
      <Routes>
        <Route path="/Login" element={<Login />} />
        <Route element={<MainLayout />}>
          <Route path="/" element={<Dashboard />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/contact" element={<ContactUs />} />
          <Route path="/exploreAll" element={<ExploreAll />} />
        </Route>
      </Routes>
    </Suspense>
  );
}

function AppWrapper() {
  return (
    <BrowserRouter>
      <App />
    </BrowserRouter>
  );
}

export default AppWrapper;
