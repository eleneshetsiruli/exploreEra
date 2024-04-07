import "./App.css";
import { HomeComponent } from "./pages/HomeComponent";
import { Routes, Route } from "react-router-dom";
import { Registration } from "./pages/Registration";
import { SignIn } from "./pages/SignIn";
import { FlightsPage } from "./pages/FlightsPage";
function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<HomeComponent />} />
        <Route path="registration" element={<Registration />} />
        <Route path="signin" element={<SignIn />} />
        <Route path="flights" element={<FlightsPage />} />
      </Routes>
    </div>
  );
}

export default App;
