import "./App.css";
import Create from "./components/Create/create";
import Read from "./components/Read/read";
import Update from "./components/Update/update";
import { BrowserRouter as Router, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="main">
        <div>
          <Route exact path='/' component={Read} />
        </div>
        <div>
          <Route exact path='/create' component={Create} />
        </div>
        <div>
          <Route exact path='/update' component={Update} />
        </div>
      </div>
    </Router>
  );
}

export default App;