import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from './components/Home';
import Navbar from './components/NavBar';

const App = () => {

  return (
    <Home />
    // <Router>
    //   <div>
    //     <Navbar />
    //     <Routes>
    //       <Route path="/" element={Home}></Route>
    //       {/* <Route exact path="/cart/:id?" component={Cart}></Route> */}
    //       {/* <Route exact path="/search" element={SearchResults}></Route> */}
    //       {/* <Route path="/searchresults/:query" component={SearchResults} exact></Route> */}
    //     </Routes>
    //   </div>
    // </Router>

  )
}

export default App
