import { Link } from "react-router";

function Navbar() {
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
          <Link to="" className="btn btn-ghost hover:text-primary">
            Especialidades
          </Link>
          <Link to="" className="btn btn-ghost hover:text-primary">
            Convênio
          </Link>
          <Link to="" className="btn btn-ghost hover:text-primary">
            Agendamentos
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
