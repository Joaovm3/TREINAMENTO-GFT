import React from "react";

import './App.css';

import Header from "./components/Header";
import Footer from "./components/Footer";
import Main from "./components/Main";

export default function App() {
  return (
    <div className="App">
        <Header />
          <Main />
        <Footer />
    </div>
  );
}
