import { Link } from "react-router";
import routes from "../routes";

export default function Navbar() {
  return (
    <div className="navbar bg-base-100 shadow-sm justify-center">
      <div className="container flex items-center">
        <div className="navbar-start">
          <Link to="/" className="link">
            <img
              src="public/logo-liga.webp"
              alt="Logo LigaHM"
              className="w-24"
            />
          </Link>
        </div>
        <div className="navbar-end gap-3">
          <Link
            to={routes.agendamentos}
            className="btn btn-ghost hover:text-primary"
          >
            Agendamentos
          </Link>
          <Link
            to={routes.especialidades}
            className="btn btn-ghost hover:text-primary"
          >
            Especialidades
          </Link>
          <Link
            to={routes.convenios}
            className="btn btn-ghost hover:text-primary"
          >
            Convênios
          </Link>
          <Link
            to={routes.disponibilidades}
            className="btn btn-ghost hover:text-primary"
          >
            Disponibilidades
          </Link>
        </div>
      </div>
    </div>
  );
}
