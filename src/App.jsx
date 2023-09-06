import { BrowserRouter, Routes, Route } from "react-router-dom";

// Layouts
import LayoutAuth from "./layouts/LayoutAuth";
import LayoutAdmin from "./layouts/LayoutAdmin";
// Pages auth
import Login from "./pages/auth/Login";
import Register from "./pages/auth/Register";
import ForgetPassword from "./pages/auth/ForgetPassword";
// Pages admin
import Home from "./pages/admin/Home";
import Profile from "./pages/admin/Profile";

import Error404 from "./pages/Error404";
import Conducteurs from "./pages/admin/Conducteurs";
import Bus from "./pages/admin/Bus";
import Trajets from "./pages/admin/Trajets";
import Comptes from "./pages/admin/Comptes";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/forgot-password" element={<ForgetPassword />} />
        <Route path="/" element={<LayoutAdmin />}>
          <Route index element={<Home />} />
          <Route path="perfil" element={<Profile />} />
          <Route path="conducteurs" element={< Conducteurs />} />
          <Route path="bus" element={<Bus />} />
          <Route path="trajets" element={<Trajets />} />
          <Route path="comptes" element={<Comptes/>} />
        </Route>
        <Route path="*" element={<Error404 />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
