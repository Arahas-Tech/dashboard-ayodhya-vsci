import React from "react";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import NotFound from "pages/others/NotFound";
import HomePageTabs from "pages/home/HomePage3";
import LoginNew from "pages/admin/login/LoginNew";
// import LoginHome from "pages/admin/login/LoginHome";
// import DashboardLayout from "layout/DashboardLayout";
// import WasteManagement from "pages/dashboard/waste-management/WasteManagement";
// import WaterConservation from "pages/dashboard/water-conservation/WaterConservation";
// import CommunityWellBeings from "pages/dashboard/community-wellbeings/CommunityWellbeings";
// import GreenAndOpenSpaces from "pages/dashboard/green-and-open-spaces/GreenAndOpenSpaces";
// import HomePage from "pages/home/HomePage";
// import HomePage2 from "pages/home/HomePage2";

function AppRouter() {
  return (
    <>
      <Router basename="/">
        <Routes>
          <Route exact>
            <Route index element={<LoginNew />} />
            <Route path="home" element={<HomePageTabs />} />
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </Router>
    </>
  );
}

export default AppRouter;
