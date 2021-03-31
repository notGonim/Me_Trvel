import { BrowserRouter as Router, Route, Redirect, Switch } from "react-router-dom";
import { NewPlaces } from "./places/pages/NewPlaces";
import { User } from "./users/pages/User";


function App() {
  return (
    <Router>
      <Switch>
        <Route path='/' exact component={User} />
        <Route path='/places/new' exact component={NewPlaces} />
        <Redirect path='/' />
      </Switch>
    </Router>
  );
}

export default App;
