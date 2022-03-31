import "./App.css";
import { Button } from "react-bootstrap";
import Header from "./components/Header";
import { BrowserRouter } from "react-router-dom";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Header />
        <Button variant="primary">Primary</Button>
        <button>genaral</button>
      </BrowserRouter>
    </div>
  );
}

export default App;
