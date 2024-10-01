import { NextUIProvider } from "@nextui-org/react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import IndexPage from "./pages/index";
import DocsPage from "./pages/docs";
import PricingPage from "./pages/pricing";
import BlogPage from "./pages/blog";
import AboutPage from "./pages/about";

function App() {
  return (
    <NextUIProvider>
      <Router>
        <Routes>
          <Route path="/" element={<IndexPage />} />
          <Route path="/docs" element={<DocsPage />} />
          <Route path="/pricing" element={<PricingPage />} />
          <Route path="/blog" element={<BlogPage />} />
          <Route path="/about" element={<AboutPage />} />
        </Routes>
      </Router>
    </NextUIProvider>
  );
}

export default App;
