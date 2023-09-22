import React, { Suspense } from "react";
import "./App.css";
import {
  BrowserRouter as Router,
  Route,
  Routes as Switch,
} from "react-router-dom";
import RouteList from "./constants/Route.constants";
import PublicRoute from "./protected/PublicRoute";
import ProtectedRoute from "./protected/ProtectedRoute";
import Main from "./layout/Main";
import Signup from "./pages/signup";
import Login from "./pages/login";
import ForgetPassword from "./pages/forgetPassword";
import ResetPassword from "./pages/resetPassword";
import Aboutus from "./pages/aboutus";
import Home from "./pages/home";
import Result from "./pages/result";

const App = () => {
  return (
    <>
      <Suspense fallback={<Main />}>
        <Router>
          <Switch>
            <Route element={<PublicRoute redirectPage={RouteList.LOGIN} />}>
              <Route path={RouteList.SIGNUP} element={<Signup />} />
              <Route path={RouteList.LOGIN} element={<Login />} />
              <Route
                path={RouteList.FORGOT_PASSWORD}
                element={<ForgetPassword />}
              />
              <Route
                path={RouteList.PASSWORD_RESET}
                element={<ResetPassword />}
              />
              <Route path={RouteList.MAIN} element={<Home />} />
              <Route path={RouteList.ABOUTUS} element={<Aboutus />} />
              <Route path={RouteList.LIST} element={<Result />} />
            </Route>
            <Route element={<ProtectedRoute redirectPage={RouteList.LOGIN} />}>
              <Route path={`${RouteList.MAIN}`} element={<Main />} />
              {/* <Route path={RouteList.NOTFOUND} element={<NotFound />} /> */}
            </Route>
          </Switch>
        </Router>
      </Suspense>
    </>
  );
};

export default App;
