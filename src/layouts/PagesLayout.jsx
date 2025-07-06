import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const PagesLayout = ({ children }) => {
  return (
    <div className="min-h-screen flex flex-col h-screen">
      <div className="mb-14">
        <Navbar />
      </div>

      <main className="flex-1">{children}</main>

      <div className="mt-10">
        <Footer />
      </div>
    </div>
  );
};

export default PagesLayout;
