import "./App.css";
import Login from "./Containers/Login";
import DashBoard from "./Containers/Dashboard";
import NotFound from "./Containers/NotFound";
import Layout from "./Containers/Layout";
import NeonatalCare from "./Containers/NeonatalCare";
import QA from "./Containers/QA";
import Register from "./Containers/Register";
import Profile from "./Containers/Profile";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { AuthProvider } from "./Auth";
import PrivateRoute from "./PrivateRoute";

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Layout>
          <Switch>
            <Route exact path="/" component={DashBoard} />
            <Route exact path="/dashboard" component={DashBoard} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/neonatalcare" component={NeonatalCare} />
            <Route exact path="/frequentquestions" component={QA} />
            <Route exact path="/register" component={Register} />
            <PrivateRoute extact path="/profile" component={Profile} />
            <Route component={NotFound} />
          </Switch>
        </Layout>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
