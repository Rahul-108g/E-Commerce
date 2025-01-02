import { Outlet } from "react-router-dom";
import "./App.css";
import Navbar from "./Component/Navbar";
import Navbar2 from "./Component/Navbar2";
import Navbar3 from "./Component/Navbar3";

function App() {
  return (
    <>
      <Navbar />
      {/* <Navbar2 /> */}
      <Navbar3 />
      <Outlet />
    </>
  );
}

export default App;
