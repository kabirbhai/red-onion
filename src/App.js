import { Route, Routes } from "react-router-dom";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Footer from "./Pages/Shared/Footer/Footer";
import Header from "./Pages/Shared/Header/Header";
import Home from "../src/Pages/Home/Home/Home";
import Login from "../src/Pages/Login/Login/Login";
import Signup from "../src/Pages/Login/Signup/Signup";
import Breakfast from "../src/Pages/Home/Breakfast/Breakfast";
import NotFound from "./Pages/Shared/NotFound/NotFound";
import Lunch from "./Pages/Home/Lunch/Lunch";
import Dinner from "./Pages/Home/Dinner/Dinner";

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />}></Route>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
