import "./App.css";
import Head from "./components/Head";
import Body from "./components/Body";
import { Provider } from "react-redux";
import store from "./utils/store";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import MainContainer from "./components/MainContainer";
import WatchPage from "./components/WatchPage";
import Demo from "./components/Demo";
import Demo2 from "./components/Demo2";

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <Body />,

    //These children will go wherever my Outlet is. and I will create Outlet after Sidebar in Body.js

    children: [
      {
        path: "/",
        element: <MainContainer />,
      },
      {
        path: "watch",
        element: <WatchPage />,
      },
      {
        path: "demo",
        element: (
          <>
            <Demo />
            <Demo2 />
          </>
        ),
      },
    ],
  },
]);

//wherever I give my RouterProvider it will render it over there
//If my app path is "/" my body will render below <Head/>

function App() {
  return (
    <Provider store={store}>
      <div>
        <Head />
        <RouterProvider router={appRouter} />
        {/**
         *
         * Head
         * Body
         *   Sidebar
         *   MenuItems
         *   MainContainer
         *      ButtonsList
         *      VideoContainer
         *    Videocard
         *
         */}
      </div>
    </Provider>
  );
}

export default App;
