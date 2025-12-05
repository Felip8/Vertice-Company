import "../../adm-css/InicioDashboardAdm.css";
export default function ContainerDashboard() {
  return (
    <>
      <div className="container-dashboards">
        <div className="container-dashboard">
          <div className="header-dashboard">
            <p className="texto-header-dashboard">Produtos cadastrados</p>
          </div>
        </div>

        <div className="container-dashboard">
          <div className="header-dashboard">
            <p className="texto-header-dashboard">Vendas</p>
          </div>
        </div>
      </div>
    </>
  );
}

/*esse é o lugar reservado para criar os componentes que vão aparecer na tela do menu Início
o InicioDashboardAdm é responsável por chamar esses componentes */
