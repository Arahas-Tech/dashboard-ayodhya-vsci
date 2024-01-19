import React, { useLayoutEffect } from "react";

import {
  BrowserRouter as Router,
  Route,
  Routes,
  useLocation,
} from "react-router-dom";
import NotFound from "pages/others/NotFound";
import HomePageTabs from "pages/home/HomePageTabs";
import LoginNew from "pages/admin/login/LoginNew";
// import LoginHome from "pages/admin/login/LoginHome";

const Wrapper = ({ children }) => {
  const location = useLocation();
  useLayoutEffect(() => {
    document.documentElement.scrollTo(0, 0);
  }, [location.pathname]);
  return children;
};

function AppRouter() {
  return (
    <>
      <Router basename="/">
        <Wrapper>
          <Routes>
            <Route exact>
              <Route index element={<LoginNew />} />
              <Route path="dashboard" element={<HomePageTabs />} />
              <Route path="*" element={<NotFound />} />
            </Route>
          </Routes>
        </Wrapper>
      </Router>
    </>
  );
}

export default AppRouter;
