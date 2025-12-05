/*Esse arquivo é o campo -- Cateogira ^ -- que irá conter todos os componentes (calça, camisa, etc)*/
import TodasCategorias from "./ComponentesCategoria/TodasCategorias.jsx";
export default function (Categorias) {
  return (
    <>
      <li className="lista-categoria">
        <span className="texto-categoria">
          Categoria{" "}
          {/*aqui a flecha está do lado do texto categoria, o código quebrou a linha só */}
          <svg
            className="flecha-cima"
            xmlns="http://www.w3.org/2000/svg"
            width="25"
            height="25"
            viewBox="0 0 24 24"
          >
            <path
              fill="currentColor"
              fill-rule="evenodd"
              d="m4 15l8-8l8 8l-2 2l-6-6l-6 6z"
            />
          </svg>
        </span>
        <TodasCategorias />
      </li>
    </>
  );
}
