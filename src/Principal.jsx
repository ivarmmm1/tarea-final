import { Link , Route, Routes } from "react-router-dom";
import { Footer } from "./components/Footer";
import { Cartilla } from "./components/Cartilla";
import { Peliculas } from "./components/Peliculas";
import './Estilo.css'
export function Principal() {
  return (
    <div>
        <div className="arriba_del_navbar bg-emerald-950 text-emerald-400 p-4 shadow-lg text-center text-5xl font-bold">
            <h1>CINEMATECA BOLIVIANA</h1>
        </div>
        <div> 
            <div className="navbar bg-emerald-600 shadow-sm">
            <div className="flex-1 ">
                <nav >
                    <ul className="flex">
                        <li>
                            <Link to="/" className="btn btn-ghost text-xl" > Principal</Link>
                        </li>
                        <li>
                            <Link to="/pag2" className="btn btn-ghost text-xl">Peliculas</Link>
                        </li>
                    </ul>
                </nav>
            </div>
            <div className="flex gap-2">
                <input type="text" placeholder="Search" className="input input-bordered w-24 md:w-auto" />
                <div className="dropdown dropdown-end">
                <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                    <div className="w-10 rounded-full">
                    <img
                        alt="Tailwind CSS Navbar component"
                        src="https://cdn-icons-png.flaticon.com/512/3106/3106921.png" />
                    </div>
                </div>
                <ul
                    tabIndex={0}
                    className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                    <li>
                    <a className="justify-between">
                        Perfil
                        <span className="badge">New</span>
                    </a>
                    </li>
                    <li><a>Configuracion</a></li>
                    <li><a>Cerrar sesión</a></li>
                </ul>
                </div>
            </div>
            </div>
          
        </div>
        <div> 
            <Routes>
                <Route path="/" element={<Cartilla />} />
                <Route path="/pag2" element={<Peliculas />} />
            </Routes>
        </div>
        <div> <Footer /></div>
    </div>
  );
}