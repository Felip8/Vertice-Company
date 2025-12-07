export default function Pedidos() {
  return (
    <>
      <div className="container-renderizacao">
        <div className="container-dashboard">
          <div className="topo-container">Pedidos</div>
          <div className="container-search">
            <div className="container-search1">
              <p>Nome</p>
              <input
                type="text"
                className="input-dashboard"
                placeholder="Pesquise pelo nome"
              />
            </div>
            <div className="container-search2">
              <p>Data</p>
              <input type="date" className="input-date" />
            </div>
          </div>

          <div className="botao-pesquisar">
            <button>Pesquisar</button>
          </div>
          <hr />
        </div>
      </div>
    </>
  );
}
