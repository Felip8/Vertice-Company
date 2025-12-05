import { Link } from "react-router-dom";
import "../adm-css/ProdutosAdm.css";
import "../adm-css/ProdutosAdm-tabela.css";
import ContainerProduto from "./ComponentesProdutos/ContainerProduto.jsx";
import "../adm-css/Produtos-css/ContainerComponentes.css";

export default function ProdutosAdm() {
  return (
    <>
      <div className="corpo-principal">
        <div className="titulo-botao">
          <p className="titulo-pagina">Todos os produtos</p>
          <Link to="/CadastrarProdutos">
            <button className="botao-cadastrar-produto">
              {" "}
              &#8853; <span>CADASTRAR PRODUTO</span>
            </button>
          </Link>
        </div>
        <div className="container-componentes-produtos">
          <ContainerProduto />
          <ContainerProduto />
        </div>
      </div>
    </>
  );
}
