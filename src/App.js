import "./App.css";
import "./media-queries.css";
import Home from "./components/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import PlaceToRent from "./components/PlaceToRent";

function App() {
  return (
    <div className="App">
      <>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/placeToRent" element={<PlaceToRent />}></Route>
          </Routes>
        </BrowserRouter>
      </>
    </div>
  );
}

export default App;
