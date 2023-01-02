import React from "react";
import { Provider } from "react-redux";
import "./init";
import Routes from "./routes";
import { BrowserRouter } from "react-router-dom";
import { store } from "./redux/store";
import TranslationWrapper from "./translation/TranslationWrapper";
import Loader from "components/loader";
function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <TranslationWrapper>
          <Routes />
          <Loader />
        </TranslationWrapper>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
