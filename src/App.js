import React from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/pages/Home";
import Navbar from "./components/navbar/Navbar";
import CharactersPage from "./components/pages/CharactersPage";
import Stories from "./components/pages/Stories";
import Series from "./components/pages/Series";
import Comics from "./components/pages/Comics";
import { Provider } from "react-redux";
import store from "./store";
import ContainerComics from "./components/layouts/comics/ContainerComics";
import ConteinerCharacter from "./components/layouts/charactersPage/ContainerCharacter";
import ContainerSeries from "./components/layouts/series/ContainerSeries";
import ConteinerStories from "./components/layouts/stories/ContainerStories";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Router>
          <Navbar />
          <Routes>
            <Route path="/stories/:id" element={<ConteinerStories />} />
            <Route path="/stories" element={<Stories />} />
            <Route path="/series/:id" element={<ContainerSeries />} />
            <Route path="/series" element={<Series />} />
            <Route path="/comics/:id" element={<ContainerComics />} />
            <Route path="/comics" element={<Comics />} />
            <Route path="/characters/:id" element={<ConteinerCharacter />} />
            <Route path="/characters" element={<CharactersPage />} />
            <Route path="/" element={<Home />} />
          </Routes>
        </Router>
      </div>
    </Provider>
  );
}

export default App;
