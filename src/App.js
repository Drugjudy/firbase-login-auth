import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Login from "./firbase/googleAuth";
import Google from "./firbase/goauth";

import Search from "./test/serch";
import Nab from "./frontend/navbar";
import App1 from "./frontend/test/test";
import AddReview from "./frontend/test/add-review";
import Login1 from "./frontend/test/login";


function App() {
  

  return (
    <>
<Nab />
    <Router>
      
      <Routes>
        <Route path="/l" element={<Login1  />} />
        <Route path="/" element={<App1  />} />
        <Route path="/r" element={<AddReview  />} />
        <Route path="/login" element={<Login  />} />
        <Route path="/google" element={<Google  />} />
    
  
        <Route path="/search" element={<Search />} />
      </Routes>
    </Router> </>
  );
}

export default App;
