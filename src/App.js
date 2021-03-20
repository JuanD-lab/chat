
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Join from './Components/Join'
import Signin from './Components/Signin'
import { useAuth } from "./hooks/useAuth";
import Chat from './Components/Chat'
import './App.css';


function App() {
  const { access } = useAuth()
  return (
    
      <div className="App">
        <Router>
          <Switch>
            <Route exact path="/">
              {access ? <Chat/> : <Join/>}
            </Route>
            <Route exact path="/signin"><Signin/></Route>
            <Route exact path="/chat"><Chat/></Route>
          </Switch>
        </Router>
      </div>
    
  );
}

export default App;
