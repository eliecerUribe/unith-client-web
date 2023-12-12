import { Route, Routes } from "react-router-dom";
import Home from "../views/Home";
import Details from "../views/Details";
import routes from "./routes";

export default function RoutesComponent() {
  return (
    <Routes>
      <Route path={`${routes.HOME}`} element={<Home />} />
      <Route path={`${routes.DETAILS}/:id`} element={<Details />} />
    </Routes>
  );
}
