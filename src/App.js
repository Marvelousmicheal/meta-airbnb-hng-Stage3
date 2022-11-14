import "./App.css";

import Footer from "./components/Footer";
import Header from "./components/Header";
import Partner from "./components/Partner";
import SectionOne from "./components/SectionOne";
import SectionThree from "./components/SectionThree";
import SectionTwo from "./components/SectionTwo";


function App() {
  
  return (
    <div className="App">
      <>
        
        <div className="container">
          <main className="main">
            <Header />
            <SectionOne />
          </main>
        </div>
        <Partner />
        <div className="container">
          <main className="second-main main">
            <SectionTwo />
          </main>
        </div>
        <SectionThree />
        <Footer />
      </>
    </div>
  );
}

export default App;
