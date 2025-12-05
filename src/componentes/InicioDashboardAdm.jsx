import ContainerDashboard from "./InicioComponentes/ContainerDashboard";
export default function InicioDashboardAdm() {
  return (
    <>
      <div className="container-renderizacao">
        <ContainerDashboard />
      </div>
    </>
  );
}

/*esse é o componente que carrega os dashboard
eu separei esse arquivo do ContainerDashboard pois aqui ele apenas chama os componentes criados.
Para criar um componente é necessário ir no arquivo ContainerDashboard */
