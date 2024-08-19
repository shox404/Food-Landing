import Navbar from "./components/navbar";
import About from "./pages/about";
import Category from "./pages/category";
import Home from "./pages/home";

export default function App() {
  return (
    <>
      <Navbar />
      <Home />
      <About />
      <Category />
    </>
  );
}
