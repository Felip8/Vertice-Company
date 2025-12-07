import "../../adm-css/InicioDashboardAdm.css";
export default function ContainerDashboard() {
  return (
    <>
      <div className="container-dashboard">
        <div className="topo-container">Dashboard</div>
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
    </>
  );
}

/*esse é o lugar reservado para criar os componentes que vão aparecer na tela do menu Início
o InicioDashboardAdm é responsável por chamar esses componentes */
