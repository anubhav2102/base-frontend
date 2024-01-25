import './App.css';
import { Routes, Route} from "react-router-dom";
import LoginPage from "./components/login/LoginPage.jsx";
import DashboardPage from "./components/dashboard/DashboardPage.jsx";

function App() {
  return (
    <>
    <Routes>
      <Route exact element={<LoginPage/>} path="/" />
      <Route exact element={<DashboardPage/>} path="/dashboard" />
    </Routes>
    </>
  );
}

export default App;