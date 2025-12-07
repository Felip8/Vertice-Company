import "../../adm-css/InicioDashboardAdm.css";
export default function ContainerDashboard() {
  return (
    <>
      <div className="container-dashboard">
        <div className="topo-container">Dashboard</div>
        <input
          type="text"
          className="input-dashboard"
          placeholder="Nome do produto"
        />
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
