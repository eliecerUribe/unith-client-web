import { Route, Routes } from "react-router-dom";
import App from "../App";
import Details from "../views/Details";
import routes from "./routes";

export default function RoutesComponent() {
  return (
    <Routes>
      <Route path={`${routes.HOME}`} element={<App />} />
      <Route path={`${routes.DETAILS}/:id`} element={<Details />} />
    </Routes>
  );
}
