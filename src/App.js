import React from 'react';
import {
  BrowserRouter,
  Route,
  Routes
} from "react-router-dom";
import Layout from "./layouts";
import Home from "./pages/Home";
import Registeration from './pages/Registeration';
import { Provider } from 'react-redux';
import { store } from './redux/store'

function App() {

  return (
    <Provider store={store}>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/Registeration" element={<Registeration />} />
        </Route>
      </Routes>
    </BrowserRouter>
    </Provider>
  );
}

export default App;
