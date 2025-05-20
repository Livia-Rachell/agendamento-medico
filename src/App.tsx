import { Route, Routes } from "react-router";

import Agendamentos from "./pages/Agendamentos";
import Convenios from "./pages/Convenios";
import Especialidades from "./pages/Especialidades";
import Navbar from "./components/Navbar";
import routes from "./routes";

export default function App() {
  return (
    <>
      <Navbar />
      <div className="flex justify-center my-6">
        <Routes>
          <Route path={routes.agendamentos} element={<Agendamentos />} />
          <Route path={routes.especialidades} element={<Especialidades />} />
          <Route path={routes.convenios} element={<Convenios />} />
        </Routes>
      </div>
    </>
  );
}
