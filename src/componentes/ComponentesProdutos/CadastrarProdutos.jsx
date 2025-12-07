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
              <div
                className="foto-roupa"
                onClick={() => document.getElementById("fileInput").click()}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="64"
                  height="64"
                  viewBox="0 0 512 512"
                >
                  <rect
                    width="416"
                    height="352"
                    x="48"
                    y="80"
                    fill="none"
                    stroke="currentColor"
                    strokeLinejoin="round"
                    strokeWidth="32"
                    rx="48"
                    ry="48"
                  />
                  <circle
                    cx="336"
                    cy="176"
                    r="32"
                    fill="none"
                    stroke="currentColor"
                    strokeMiterlimit="10"
                    strokeWidth="32"
                  />
                  <path
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="32"
                    d="m304 335.79l-90.66-90.49a32 32 0 0 0-43.87-1.3L48 352m176 80l123.34-123.34a32 32 0 0 1 43.11-2L464 368"
                  />
                </svg>

                <span>Adicionar imagem</span>

                <input
                  type="file"
                  id="fileInput"
                  accept="image/*"
                  className="input-escondido"
                  onChange={(e) => console.log(e.target.files[0])}
                />
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
