import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import View from "./pages/view/view.js";
import Header from "./components/header/Header.js";
import List from "./pages/list/list.js";
import Upload from "./pages/upload/upload.js";
import { Footer } from "./components/footer/Footer.js";

const App = () => {
  return (
    <>
      <Router>
        <Header />

        <Routes>
          <Route path="/video/player/:ID" element={<View />} />
          <Route path="/video/list" element={<List />} />
          <Route path="/video/upload" element={<Upload />} />
        </Routes>

        <Footer />
      </Router>
    </>
  );
};

export default App;
