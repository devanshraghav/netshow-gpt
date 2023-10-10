import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "./App.css";
import Authentication from "./Page/Authentication";
import Browse from "./components/Browse";
import { Provider } from "react-redux";
import appStore from "./utils/Redux/appStore";

function App() {
  const appRouter = createBrowserRouter([
    {
      path: "/",
      element: <Authentication />,
    },
    {
      path: "/browse",
      element: <Browse />,
    },
  ]);

  return (
    <>
      <Provider store={appStore}>
        <RouterProvider router={appRouter} />
      </Provider>
    </>
  );
}

export default App;
