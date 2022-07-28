//Dependencies
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
//Pages
import Home from "./Pages/Home.js"
import Index from "./Pages/Index.js";
import Show from "./Pages/Show.js";
import New from "./Pages/New.js";
import Edit from "./Pages/Edit.js";
//Components
import NavBar from "./Components/NavBar.js";
//Styling
import './App.css';

const App = () => {
  return (
    <div className="App">
      <Router>
        <NavBar />
        <main>
          <Routes>
            <Route path="/" element={ <Home /> }/>
            <Route path="/transactions" element={ <Index /> } />
            <Route path="/transactions/new" element={ <New/> } />
            <Route path="/transactions/:index" element={ <Show /> } />
            <Route path="/transactions/:index/edit" element={<Edit />} />
          </Routes>
        </main>
      </Router>
    </div>
  );
};

export default App;
