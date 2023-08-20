// import "./App.css";
import Header from "./components/Header";
import Body from "./components/Body";
import Footer from "./components/Footer";
import { Route } from "react-router-dom";
import Routing from "./components/Routing";
import { BrowserRouter } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        {/* <Body /> */}
        <Routing />
        {/* <Footer /> */}
      </BrowserRouter>
    </div>
  );
}

export default App;
