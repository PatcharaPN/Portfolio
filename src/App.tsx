import React from "react";
import { RouteObject, useRoutes } from "react-router-dom";
import Home from "./pages/Home";

const App: React.FC = () => {
  const routes: RouteObject[] = [{ path: "/", element: <Home /> }];

  const element = useRoutes(routes);
  return element;
};

export default App;
