import React from "react";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import NotFound from "pages/others/NotFound";
import HomePageTabs from "pages/home/HomePageTabs";
import LoginNew from "pages/admin/login/LoginNew";
// import LoginHome from "pages/admin/login/LoginHome";

function AppRouter() {
  return (
    <>
      <Router basename="/">
        <Routes>
          <Route exact>
            <Route index element={<LoginNew />} />
            <Route path="dashboard" element={<HomePageTabs />} />
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </Router>
    </>
  );
}

export default AppRouter;
