import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AuthProvider } from "./AuthContext";
import Login from "./Login";
import Dashboard from "./Dashboard";
import ProtectedRoute from "./ProtectedRoute";

function App() {
  return (
    <AuthProvider>



      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route
            path="/dashboard"
            element={



              <ProtectedRoute>
                <Dashboard />
              </ProtectedRoute>



            }
          />
        </Routes>
      </BrowserRouter>









    </AuthProvider>
  );
}

export default App;
