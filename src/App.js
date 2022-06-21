import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Login from "./firbase/googleAuth";
import Google from "./firbase/goauth";


function App() {
  

  return (
    <Router>
      
      <Routes>
        <Route path="/" element={<Login  />} />
         <Route path="/go" element={<Google  />} />
      </Routes>
    </Router>
  );
}

export default App;
