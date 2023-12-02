// COMPONENTS
import { Navbar, Footer } from "./components";

// SECTIONS
import {
  Hero,
  About,
  Explore,
  GetStarted,
  WhatsNew,
  World,
  Insights,
  Feedback,
} from "./sections";

function App() {
  return (
    <div className="bg-primary-black overflow-hidden">
      <Navbar />
      <Hero />
      <About />
      <Explore />
      <GetStarted />
      <WhatsNew />
      <World />
      <Insights />
      <Feedback />
      <Footer />
    </div>
  );
}

// 4:44

export default App;
