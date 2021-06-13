import "./App.css";
import Login from "./Containers/Login";
import DashBoard from "./Containers/Dashboard";
import NotFound from "./Containers/NotFound";
import Layout from "./Containers/Layout";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Switch>
          <Route exact path="/" component={DashBoard} />
          <Route exact path="/dashboard" component={DashBoard} />
          <Route exact path="/login" component={Login} />
          <Route component={NotFound} />
        </Switch>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
