import React, { Suspense } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { MainLayout } from "./components/Layouts/MainLayout";
import { Loder } from "./components/Loader/Loder";
import ExploreAll from "./components/ExploreAll/ExploreAll";
import Login from "./components/Login&signup/Login";

const Dashboard = React.lazy(() => import("./components/Dashboard/Dashboard"));
const ContactUs = React.lazy(() => import("./components/ContactUs/ContactUs"));
const AboutUs = React.lazy(() => import("./components/AboutUs/AboutUs"));

function App() {
  return (
    <BrowserRouter>
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
    </BrowserRouter>
  );
}

export default App;
