import React, { Suspense, useEffect } from "react";
import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
import { MainLayout } from "./components/Layouts/MainLayout";
import  Loder  from "./components/Loader/Loder";
import Login from "./components/Login&signup/Login";

const Dashboard = React.lazy(() => import("./components/Dashboard/Dashboard"));
const ContactUs = React.lazy(() => import("./components/ContactUs/ContactUs"));
const AboutUs = React.lazy(() => import("./components/AboutUs/AboutUs"));
const ExploreAll = React.lazy(()  => import("./components/ExploreAll/ExploreAll"));


function App() {
  const location = useLocation();

  useEffect(() => {
    const path = location.pathname;
    switch (path) {
      case "/":
        document.title = "A8th Creation | Great Design & Logos";
        break;
      case "/about":
        document.title = "About Us | A8th Creation";
        break;
      case "/contact":
        document.title = "Contact Us | A8th Creation";
        break;
      case "/exploreAll":
        document.title = "Explore All | A8th Creation";
        break;
      case "/login":
        document.title = "Login | A8th Creation";
        break;
      default:
        document.title = "A8th Creation | Great Design & Logos";
    }
  }, [location]);

  return (
    <Suspense fallback={<Loder />}>
      <Routes>
        <Route path="/login" element={<Login />} />
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
