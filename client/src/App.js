import { BrowserRouter, Route, Switch} from "react-router-dom";
import HomePage from './pages/HomePage/HomePage'
import Header from "./components/Header/.Header";

function App() {
  return (

    <BrowserRouter>
    <Header />
      <Switch>
        <Route path="/" exact component={HomePage}/>
        <Route path="/:difficulty" component={HomePage}/>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
