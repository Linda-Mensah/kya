import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const PagesLayout = ({ children }) => {
  return (
    <div>
      <Navbar />
      {children}
      <Footer />
    </div>
  );
};

export default PagesLayout;
