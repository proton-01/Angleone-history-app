
import './App.css';
import Main from './components/Main';
import Login from "./components/Login";
import ShowHistory from "./components/ShowHistory";
import {BrowserRouter as Router,Routes,Route} from "react-router-dom";

function App() {
  return (
    <Router>

           <div className="App">
 
             <Routes>

                <Route  exact path="/" element={<Login/>}/>
                <Route  exact path="/main/" element={<Main/>}/>
                <Route  exact path="/showhistory" element={<ShowHistory/>}/>

             </Routes>
           </div> 

          </Router>
  );
}

export default App;
