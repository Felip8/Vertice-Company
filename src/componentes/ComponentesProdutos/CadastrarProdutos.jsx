import "../../adm-css/Produtos-css/CadastrarProdutos.css";

export default function CadastrarProdutos() {
  return (
    <>
      <div className="container-formulario">
        <div className="titulo-pagina-novo-produto">
          <p className="titulo-topo-pagina">Detalhes do produto</p>
        </div>
        <div className="dados-produtos">
          {/*container-cadastro-produto é a div com cor branca que envolve todo o cadastro */}
          <div className="container-cadastro-produto">
            <div className="container-flex">
              {/*esse container-flex precisa existir para deixar a div dos inputs do lado da imagem */}
              <div className="dados-cadastro">
                <div className="input-nome">
                  <p className="nome-produto">Nome do produto</p>
                  <input className="input-nome-produto" type="text" />
                </div>
                <div className="input-descricao">
                  <p className="texto-descricao-produto">Descrição</p>
                  <textarea
                    className="textarea"
                    name="textarea"
                    id=""
                  ></textarea>
                  {/*acho que da pra renderiza coisa nisso ja que tem id */}
                </div>
                <div className="input-categoria">
                  <p className="nome-produto">Categoria</p>
                  <select
                    className="select"
                    id="linguagem"
                    name="linguagem"
                    required
                  >
                    <option value="">Camiseta</option>
                    <option value="python">Moletons</option>
                    <option value="javascript">Meias</option>
                    <option value="java">Bermudas</option>
                    <option value="csharp">Calças</option>
                  </select>
                </div>
              </div>
            </div>

            <div className="container-das-imagens">
              {/*a intenção dessa div é deixar o cadastro da imagem do lado dos inputs */}
              {/*imagem do produto vem logo abaixo */}
              <div class="foto-roupa">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 500 500">
                  <path
                    fill="currentColor"
                    d="M256 96c33.08 0 60.71-25.78 64-58c.3-3-3-6-6-6a13 13 0 0 0-4.74.9c-.2.08-21.1 8.1-53.26 8.1s-53.1-8-53.26-8.1a16.2 16.2 0 0 0-5.3-.9h-.06a5.69 5.69 0 0 0-5.38 6c3.35 32.16 31 58 64 58"
                  />
                  <path
                    fill="currentColor"
                    d="M485.29 89.9L356 44.64a4 4 0 0 0-5.27 3.16a96 96 0 0 1-189.38 0a4 4 0 0 0-5.35-3.16L26.71 89.9A16 16 0 0 0 16.28 108l16.63 88a16 16 0 0 0 13.92 12.9l48.88 5.52a8 8 0 0 1 7.1 8.19l-7.33 240.9a16 16 0 0 0 9.1 14.94A17.5 17.5 0 0 0 112 480h288a17.5 17.5 0 0 0 7.42-1.55a16 16 0 0 0 9.1-14.94l-7.33-240.9a8 8 0 0 1 7.1-8.19l48.88-5.52a16 16 0 0 0 13.92-12.9l16.63-88a16 16 0 0 0-10.43-18.1"
                  />
                </svg>

                {/*Input para importar imagem */}
                <input type="file" accept="image/*" class="importar-imagem" />
              </div>
              {/*Container da galeria do produto */}

              <div className="container-galeria">
                <div className="container-texto-galeria">
                  <p className="texto-galeria">Galeria do produto</p>
                </div>
                {/*o campo tracejado é esse */}
                <div className="galeria-produto"></div>
              </div>
              {/*botão salvar e cancelar*/}
              <div className="botoes-adicionar-cancelar">
                <div class="botao-adicionar-produto">
                  <button className="botao-adicionar" onClick={botaoSalvar}>
                    Adicionar
                  </button>
                  <a href="/ProdutosAdm">
                    <button className="botao-cancelar">Cancelar</button>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

function botaoSalvar() {
  alert("Produto cadastrado com sucesso!");
}
