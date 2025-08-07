import { BrowserRouter, Routes, Route } from "react-router";
import MainLayout from "./layouts/MainLayout";
import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import Policy from "./pages/Policy";
import Gallery from "./pages/Gallery";
import Contact from "./pages/Contact";
import {  Toaster } from "react-hot-toast";
import ScrollToTop from "./layouts/ScrollToTop";
import { HelmetProvider } from "react-helmet-async";
function App() {
  return (
    <>
      <BrowserRouter>
      <ScrollToTop />
      <HelmetProvider>
        <Routes>
          <Route path="/" element={<MainLayout />}>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/policy" element={<Policy />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/contact" element={<Contact />} />
          </Route>
        </Routes>

        </HelmetProvider>
      </BrowserRouter>
      <Toaster />
    </>
  );
}

export default App;
