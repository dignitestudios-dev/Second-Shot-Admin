import { Navigate, Route, Routes } from "react-router";
import "./App.css";
import DashboardLayout from "./layouts/DashboardLayout";
import AuthLayout from "./layouts/AuthLayout";
import { Authroutes } from "./routes/authentication/Authroutes";
import { Approutes } from "./routes/app/AppRoutes";

function App() {
  return (
    <Routes>
      <Route
        path="/"
        // element={
        //   <div className="text-7xl">
        //     Project Template || Please read readme file
        //   </div>
        // }
        element={<Navigate to="/auth/login"/>}
      />

      <Route path="app" element={<DashboardLayout />}>
        {Approutes?.map((Link, i) => (
          <Route path={Link.url} key={i} element={Link.page} />
        ))}
      </Route>

      <Route path="auth" element={<AuthLayout />}>
        {Authroutes?.map((Link, i) => (
          <Route path={Link.url} key={i} element={Link.page} />
        ))}
      </Route>

      <Route
        path="*"
        element={<div className="text-7xl">Page Not Found</div>}
      />
    </Routes>
  );
}

export default App;
