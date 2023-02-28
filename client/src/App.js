import "./App.css";
import { Route, Routes } from "react-router-dom";
import Entry from "./components/Entry/Entry";
import Detail from "./components/Detail/Detail";
import Form from "./components/Form/Form";
import Home from "./components/Home/Home";

function App() {

  return (
    <>
      <Routes>
        <Route exact path="/" element={<Entry />} />
        <Route path="/home" element={<Home />} />
        <Route path="/home/detail/:detailId" element={<Detail />} />
        <Route path="/form" element={<Form />} />
      </Routes>
    </>
  );
}

export default App;
