import { BrowserRouter, Routes, Route } from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";
import HeroSection from "./components/HeroSection";
import Story from "./pages/Story";
import Rates from "./pages/Rates";
import Benefits from "./pages/Benefits";
import FAQ from "./pages/FAQ";
import Discover from "./pages/Discover";
import BookNow from "./pages/BookNow";

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<HeroSection />} />
        <Route path="/story" element={<Story />} />
        <Route path="/rates" element={<Rates />} />
        <Route path="/benefits" element={<Benefits />} />
        <Route path="/faq" element={<FAQ />} />
        <Route path="/discover" element={<Discover />} />
        <Route path="/book-now" element={<BookNow />} />
      </Routes>
    </BrowserRouter>
  );
}