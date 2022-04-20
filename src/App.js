import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useEffect } from 'react';
import LoginPage from "./pages/LoginPage";
import SignupPage from "./pages/SignupPage";
import ErrorPage from "./pages/ErrorPage";
import DashboardPage from "./pages/DashboardPage";
import ProfilePage from "./pages/ProfilePage";
import AuthenticatedOutlet from "./components/AuthenticatedOutlet";

function App() {

  useEffect(() => {
    document.title = "Cloud Media Project";
  }, []);

  return (
    <Router>
      <Routes>
        <Route path="/login" element={<LoginPage/>} />
        <Route path="/signup" element={<SignupPage/>} />

        <Route path="/" element={<AuthenticatedOutlet/>} >
          <Route path="" element={<DashboardPage/>} />
        </Route>
        <Route path="/profile" element={<AuthenticatedOutlet/>} >
          <Route path="" element={<ProfilePage/>} />
        </Route>

        <Route path="*" element={<ErrorPage/>} />
      </Routes>
    </Router>
  );
}

export default App;
