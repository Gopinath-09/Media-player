import { Route, Routes } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import AddSectionPage from "./pages/AddSectionPage";
import Header from "./components/Header";
//import Footer from "./components/Footer";

const App = () => {
  return (
    <main className="px-6 py-5">
      <Header />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/add" element={<AddSectionPage />} />
      </Routes>
      {/* <Footer/> */}
    </main>
  );
};

export default App;
