import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import { getUser } from './utilities/users-service';
import "./App.css";

//pages
import AuthPage from "./pages/Authpage/Authpage";
import NewOrderPage from "./pages/NewOrderPage/NewOrderPage";
import OrderHistoryPage from "./pages/OrderHistoryPage/OrderHistoryPage";
import Navbar from "./components/Navbar/Navbar";

function App() {
  const [user, setUser] = useState(getUser());
  //return fetch("/api/orders/history").then((res) => res.json());
  return (
    <div className="App">
      {user ? (
        <>
        
        <Navbar user={user.name} setUser={setUser} />
        <Routes>
          <Route path="/orders/new" element={<NewOrderPage />} />
          <Route path="/orders" element={<OrderHistoryPage />} />
        </Routes>
        </>
      ) : (
        <AuthPage setUser={setUser} />
      )}
    </div>
  );
}

export default App;
