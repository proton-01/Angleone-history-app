
import './App.css';
import Main from './components/Main';
import Login from "./components/Login"
import {BrowserRouter as Router,Routes,Route} from "react-router-dom";

function App() {
  return (
    <Router>

           <div className="App">
 
             <Routes>

                <Route  exact path="/" element={<Login/>}/>
                <Route  exact path="/main/" element={<Main/>}/>

             </Routes>
           </div> 

          </Router>
  );
}

export default App;
