import { Route, Routes, BrowserRouter as Router, Navigate, useNavigate } from "react-router-dom";
import { routes } from "./routes";
import './App.css';
import { useEffect, useState } from "react";

function App() {

  const [token, setToken] = useState(localStorage.getItem("token"));

  useEffect(() => {
    const interval = setInterval(() => {
      const storedToken = localStorage.getItem("token");
      setToken(storedToken);
    }, 100);

    return () => {
      clearInterval(interval);
    }
  }, []);

  return (
    <Router>
      <div className="App">
        <Routes>
          {  /*   <Route
            path="/"
            element={
              token ? <Navigate to="/p2" /> : <Navigate to="/login" />
            }
          /> */}
          {routes.map((route, index) => (
            <Route
              key={index}
              exact
              path={route.path}
              element={route.component}
            />
          ))}</Routes>
      </div>
    </Router>
  );
}

export default App;
