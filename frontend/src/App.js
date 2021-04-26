import "./App.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Reply from './components/Reply';
import User from './pages/User'
import { BrowserRouter, Route, Switch } from "react-router-dom";
function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route exact path="/user" component={User} />
        <Route  path="/Reply/:id" component={Reply} />
      </Switch>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
