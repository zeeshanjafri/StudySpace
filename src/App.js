import "./App.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Error from "./pages/Error";
import Group from "./components/Group";
import Sidebar from "./components/Nav";
import HealthTest from "./pages/HealthTest"

function App() {
  return (
    <>
      <div className="border p-4 bg-blue-900 border-gray-50 px-4 mx-auto flex flex-wrap items-center justify-between">
        <a href="/">
          <p className="text-3xl text-white px-5">StudySpace</p>
        </a>

        <nav className="px-5">
        <a href="/"
          className="text-2xl text-white px-5"> Profile
        </a>
        <a href="/"
          className="text-2xl text-white px-5"> Messages
        </a>
        </nav>

      </div>
      <BrowserRouter>
        <div className="flex flex-row border h-auto">
          <Sidebar />
          {/* This is the area where the different components are rendered based on route */}
          <Switch>
            <Route path="/" component={Home} exact />
            <Route path="/about" component={About} />
            <Route path="/group/:groupName" component={Group} />
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
