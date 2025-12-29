import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Welcome from "./pages/Welcome";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Account from "./pages/Account";
import "./styles.css";
import BottomNav from "./components/BottomNav";

export default function App() {
return (
<Router>
<div className="app">
<Routes>
<Route path="/" element={<Welcome />} />
<Route path="/login" element={<Login />} />
<Route path="/register" element={<Register />} />
<Route path="/account" element={<Account />} />

</Routes>
<BottomNav />
</div>
</Router>
);
}