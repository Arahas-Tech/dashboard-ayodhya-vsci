import React from "react";

import LoginHome from "pages/admin/login/LoginHome";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import DashboardLayout from "layout/DashboardLayout";
import NotFound from "pages/others/NotFound";
import WasteManagement from "pages/dashboard/waste-management/WasteManagement";
import WaterConservation from "pages/dashboard/water-conservation/WaterConservation";
import CommunityWellBeings from "pages/dashboard/community-wellbeings/CommunityWellbeings";
import GreenAndOpenSpaces from "pages/dashboard/green-and-open-spaces/GreenAndOpenSpaces";
// import HomePage from "pages/home/HomePage";
// import HomePage2 from "pages/home/HomePage2";
import HomePageTabs from "pages/home/HomePage3";

function AppRouter() {
  return (
    <>
      <Router basename="/">
        <Routes>
          <Route exact>
            <Route index element={<LoginHome />} />
            <Route path="home" element={<HomePageTabs />} />
            <Route path="/dashboard">
              <Route
                path="/dashboard/water-conservation"
                element={
                  <DashboardLayout>
                    <WaterConservation />
                  </DashboardLayout>
                }
              />
              <Route
                path="/dashboard/waste-management"
                element={
                  <DashboardLayout>
                    <WasteManagement />
                  </DashboardLayout>
                }
              />
              <Route
                path="/dashboard/community-wellbeing"
                element={
                  <DashboardLayout>
                    <CommunityWellBeings />
                  </DashboardLayout>
                }
              />
              <Route
                path="/dashboard/green-spaces-and-open-spaces"
                element={
                  <DashboardLayout>
                    <GreenAndOpenSpaces />
                  </DashboardLayout>
                }
              />
            </Route>

            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </Router>
    </>
  );
}

export default AppRouter;
