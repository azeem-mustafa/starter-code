import { BrowserRouter, Route, Switch} from "react-router-dom";
import HomePage from './pages/HomePage/HomePage'

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={HomePage}/>
        <Route path="/:difficulty" component={HomePage}/>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
