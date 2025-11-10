import React from "react";
import ReactDOM from "react-dom/client";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Layout from "./Layout";
import Home from "./pages/Home";
import Processes from "./pages/Processes";
import List from "./pages/List";
import Credits from "./pages/Credits";
import Submission from "./pages/Submission";
import Info from "./components/Info";

export default function App() {
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />}/>
          <Route path="processes" element={<Processes />}/>
          <Route path="list" element={<List />}/>
          <Route path="credits" element={<Credits />}/>
          <Route path="submission" element={<Submission />}/>
          <Route path="info" element={<Info />}/>
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
