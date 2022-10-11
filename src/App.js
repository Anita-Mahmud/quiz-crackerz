import logo from './logo.svg';
import { useEffect } from "react";
import './App.css';
import { RouterProvider } from 'react-router-dom';
import router from './components/Router/router';
import AOS from "aos";
import "aos/dist/aos.css";

function App() {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);
  return (
    <div className="App">
     
    <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
