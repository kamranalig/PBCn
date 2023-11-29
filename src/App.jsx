import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.scss";
import { Home } from "./pages/Home/Home";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Poster } from "./pages/Poster/Poster";
import { Layout } from "./Layout/Layout";
import Illustration from "./pages/Illustration/Illustration";
import PrintAndPublication from "./pages/PrintAndPublication/PrintAndPublication";
import Typography from "./pages/Typography/Typography";
import Branding from "./pages/Branding/Branding";
import Education from "./pages/Education/Education";
import Contact from "./pages/Contact/Contact";
import { Splash } from "./pages/Splash/Splash";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Splash />,
  },
  {
    path: "/about",
    element: (
      <Layout type="home">
        <Home />,
      </Layout>
    ),
  },
  {
    path: "/poster",
    element: (
      <Layout>
        <Poster />
      </Layout>
    ),
  },
  {
    path: "/illustration",
    element: (
      <Layout>
        <Illustration />
      </Layout>
    ),
  },
  {
    path: "/print-and-publication",
    element: (
      <Layout>
        <PrintAndPublication />
      </Layout>
    ),
  },
  {
    path: "/typography",
    element: (
      <Layout>
        <Typography />
      </Layout>
    ),
  },
  {
    path: "/branding",
    element: (
      <Layout>
        <Branding />
      </Layout>
    ),
  },
  {
    path: "/education",
    element: (
      <Layout>
        <Education />
      </Layout>
    ),
  },
  {
    path: "/portfolio",
    element: (
      <Layout>
        <Poster />
      </Layout>
    ),
  },
  {
    path: "/contact",
    element: (
      <Layout>
        <Contact />
      </Layout>
    ),
  },
]);

function App() {
  return (
    <>
      <RouterProvider router={router}></RouterProvider>
    </>
  );
}

export default App;

// const BrowserRouter = createBrowserRouter({
//   routeMatching: {
//     path: "/",
//     routes: [
//       {
//         path: "/",
//         action: () => <Home />,
//       },
//       {
//         path: "/poster",
//         action: () => <Poster />,
//       },
//     ],
//   },
// });

// const App = () => {
//   return (
//     <BrowserRouter>
//       <Layout />
//     </BrowserRouter>
//   );
// }

// export default App;
