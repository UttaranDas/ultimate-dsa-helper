import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Footer from "./Footer";
import Home from "./Home";
import Error from "./Error";
import QuestionList from "./QuestionList";

function App() {

  return (
    <>
      <div className="browser-router">
        <BrowserRouter basename={process.env.PUBLIC_URL}>
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route path='*' element={<Error />} />
            <Route path="/topic/:topicName" exact element={<QuestionList />} />
          </Routes>
        </BrowserRouter>
      </div>
      <Footer />
    </>
  );
}

export default App;
