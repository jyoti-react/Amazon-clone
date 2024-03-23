import "./App.css";
// import { Route, Routes } from "react-router-dom";
import Basket from "./Components/Basket";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./Layout";
import Home from "./Components/Home";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { path: "/", element: <Home/> },
      { path: "/basket", element: <Basket /> }
    ],
  },
]);

function App() {
  return <>
     <RouterProvider router={router}/>
  </>;
}

export default App;
