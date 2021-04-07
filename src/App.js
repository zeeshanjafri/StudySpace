import "./App.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Error from "./pages/Error";
import HealthTest from "./pages/HealthTest";
import Group from "./components/Group";
import Sidebar from "./components/Nav";

function App() {
  return (
    <>
      <div className="border p-4 bg-blue-900 border-gray-50">
        <a href="/">
          <p className="text-3xl text-white">StudySpace</p>
        </a>
      </div>
      <BrowserRouter>
        <div className="flex flex-row border h-screen">
          <Sidebar />
          {/* This is the area where the different components are rendered based on route */}
          <Switch>
            <Route path="/" component={Home} exact />
            <Route path="/about" component={About} />
            <Route path="/group/financial-markets" component={Group} />
            <Route path="/health-test" component={HealthTest} />
            <Route component={Error} />
          </Switch>
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
// tailwindcss.com - create-react-app
// Node.js
// React Router
