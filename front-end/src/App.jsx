import {
  createBrowserRouter,
  RouterProvider,
  Outlet,
} from "react-router-dom";
import Footer from "./components/Footer";
import NavBar from "./components/NavBar";
import Createblog from "./pages/Createblog";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Showblog from "./pages/Showblog";

const Layout = () => {
  return (
    <>
      <NavBar />
      <Outlet />
      <Footer />
    </>
  );
};

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/post/:id",
        element: <Showblog />,
      },
      {
        path: "/create",
        element: <Createblog />,
      },
    ],
  },
  {
    path: "/register",
    element: <Register />,
  },
  {
    path: "/login",
    element: <Login />,
  },
]);



function App() {
  return (
    <div className="">
      <RouterProvider router={router}/>
    </div>
  )
}

export default App
