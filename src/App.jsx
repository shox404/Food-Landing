import Navbar from "./components/navbar";
import Team from "./pages/Team/Team";
import Customer from "./pages/Customer/Customer";
import Work from "./pages/Work/Work";
import Footer from "./pages/Footer/Footer";
import Home from "./pages/home";
import About from "./pages/about";
import Categoty from "./pages/category";
import Murojatuchun from "./pages/murojatuchun";

export default function App() {
  return (
    <>
      <Navbar />
      <Home />
      <About />
      <Categoty />
      <Team />
      <Customer />

      <Murojatuchun />
      <Work />
      <Footer />
    </>
  );
}
