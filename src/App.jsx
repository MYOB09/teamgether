import { Button } from "./components/ui/button";
import Extension from "./Extension";
import MainContent from "./MainContent";
import Navbar from "./Navbar";
import Powered from "./Powered";
import Form from "./Form";
import Footer from "./Footer";

function App() {
  return (
    <>
      <Navbar />
      <div className="bg-[url('./assets/main-bg.jpg')]   ">
        <div className="bg-black/50">
          <MainContent />
        </div>
      </div>

      <Powered />
      <Form />
      <Footer />
    </>
  );
}

export default App;
