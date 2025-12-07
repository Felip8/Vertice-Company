import { Link } from "react-router-dom";
/*esse é o componente resposável pelo menu lateral com a opção de início e produtos */
import "../adm-css/Categorias-css/CategoriasMenuLateral.css";
import "./ComponentesMenuLateral/Categorias.jsx";
import Categorias from "./ComponentesMenuLateral/Categorias.jsx";
export default function MenuLateralAdm() {
  return (
    <>
      <div className="container-navbar">
        <ul>
          <p className="logo-vertice">vérticecompany</p>

          <Link to="/InicioDashboardAdm">
            <li className="menu-item">
              <div className="conteudo-li">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="25"
                  height="25"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill="currentColor"
                    d="M13 9V3h8v6zM3 13V3h8v10zm10 8V11h8v10zM3 21v-6h8v6z"
                  />
                </svg>
                <span>Dashboard</span>
              </div>
            </li>
          </Link>

          <Link to="/ProdutosAdm">
            <li className="menu-item">
              <div className="conteudo-li">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="25"
                  height="25"
                  viewBox="0 0 512 512"
                >
                  <path
                    fill="currentColor"
                    d="M256 96c33.08 0 60.71-25.78 64-58c.3-3-3-6-6-6a13 13 0 0 
                    0-4.74.9c-.2.08-21.1 8.1-53.26 8.1s-53.1-8-53.26-8.1a16.2 16.2 0 0 0-5.3-.9h-.06a5.69 
                    5.69 0 0 0-5.38 6c3.35 32.16 31 58 64 58"
                  />
                  <path
                    fill="currentColor"
                    d="M485.29 89.9L356 44.64a4 4 0 0 0-5.27 3.16a96 96 0 0 
                    1-189.38 0a4 4 0 0 0-5.35-3.16L26.71 89.9A16 16 0 0 0 16.28 108l16.63 88a16 16 0 0 
                    0 13.92 12.9l48.88 5.52a8 8 0 0 1 7.1 8.19l-7.33 240.9a16 16 0 0 0 9.1 14.94A17.5 17.5 
                    0 0 0 112 480h288a17.5 17.5 0 0 0 7.42-1.55a16 16 0 0 0 9.1-14.94l-7.33-240.9a8 8 0 0 
                    1 7.1-8.19l48.88-5.52a16 16 0 0 0 13.92-12.9l16.63-88a16 16 0 0 0-10.43-18.1"
                  />
                </svg>

                <span>Produtos</span>
              </div>
            </li>
          </Link>

          <Link to="/Pedidos">
            <li className="menu-item">
              <div className="conteudo-li">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="25"
                  height="25"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill="currentColor"
                    fill-rule="evenodd"
                    d="M20.75 16.714a1 1 0 0 1-.014.143a.75.75 0 0 1-.736.893H6a1.25 1.25 0 1 0 0 2.5h14a.75.75 0 0 1 0 1.5H6A2.75 2.75 0 0 1 3.25 19V5A2.75 2.75 0 0 1 6 2.25h13.4c.746 0 1.35.604 1.35 1.35zM9 6.25a.75.75 0 0 0 0 1.5h6a.75.75 0 0 0 0-1.5z"
                    clip-rule="evenodd"
                  />
                </svg>
                <span>Pedidos</span>
              </div>
            </li>
          </Link>
          {/*Aqui são todos os componentes das categorias */}
          <Categorias />
        </ul>
      </div>
    </>
  );
}
