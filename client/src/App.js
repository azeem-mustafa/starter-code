import { BrowserRouter, Route, Switch} from "react-router-dom";
import BeginnerPage from './pages/BeginnerPage/BeginnerPage';
import IntermediatePage from './pages/IntermediatePage/IntermediatePage';
import AdvancedPage from './pages/AdvancedPage/AdvancedPage';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/beginner" component={BeginnerPage}/>
        <Route path="/intermediate" component={IntermediatePage}/>
        <Route path="/advanced" component={AdvancedPage}/>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
