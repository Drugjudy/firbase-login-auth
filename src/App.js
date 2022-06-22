import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Data from "./backend/getdata";
import Login from "./firbase/googleAuth";
import Google from "./firbase/goauth";
import Dataentry from "./backend/dataentry";
import Search from "./test/serch";
import Nab from "./frontend/navbar";


function App() {
  

  return (
    <>
<Nab />
    <Router>
      
      <Routes>
        <Route path="/login" element={<Login  />} />
        <Route path="/google" element={<Google  />} />
        <Route path="/data" element={<Data  />} />
        <Route path="/dataentry" element={<Dataentry  />} />
        <Route path="/search" element={<Search />} />
      </Routes>
    </Router> </>
  );
}

export default App;
