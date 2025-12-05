/*esse é o arquivo dos componentes dos produtos cadastrados com informações de estoque e venda */
import "../../adm-css/ProdutosAdm.css";
import camisaImg from "../../img/modelo-camiseta.png";
export default function ContainerProduto() {
  return (
    <>
      <div className="container-cinza">
        <div className="container-engloba-tudo-do-produto">
          {/*container BRANCO que engloba todos os dados do produto */}
          <div className="container-produto">
            {/*container que engloba todos os dados do produto */}
            <div className="container-imagem">
              <img src={camisaImg} alt="camiseta" className="imagem-camiseta" />
            </div>
            <div className="info-produto">
              <h3 className="nome-produto">Vértice Butterfly</h3>
              <p className="nome-tipo-produto">Camiseta</p>
              <p className="preco-produto">R$119,99</p>
            </div>
            <div className="container-tres-pontinhos">
              <p className="texto-tres-pontinhos">...</p>
            </div>
          </div>
          <div className="container-descricao">
            <p className="titulo-descricao">Descrição</p>
            <p className="texto-descricao">
              Camiseta preta com estampa de borboletas nas costas.
            </p>
          </div>
          <div className="container-venda-estoque">
            <div className="texto-venda-e-numero-aparecendo">
              <p className="texto-venda">Vendas</p>
              <div className="container-numero-venda">
                <p className="texto-numero-venda">284</p>
              </div>
            </div>

            <div className="texto-estoque-e-numero-aparecendo">
              <p className="texto-estoque">Estoque</p>
              <div className="container-numero-estoque">
                <p className="texto-numero-estoque">50</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
