import "./adm-css/MenuLateralAdm.css";

import "./adm-css/App.css";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import MenuLateralAdm from "./componentes/MenuLateralAdm.jsx";
import InicioDashboardAdm from "./componentes/InicioDashboardAdm.jsx";
import ProdutosAdm from "./componentes/ProdutosAdm.jsx";
import CadastrarProdutos from "./componentes/ComponentesProdutos/CadastrarProdutos.jsx";
import Pedidos from "./componentes/Pedidos.jsx";

/*esse é o arquivo que vai mostrar a tela inicial do adm
aqui ele está trazendo o menu lateral.
Segundo o ChatGPT, é necessário que os componentes sejam chamados por aqui e não pelo menu lateral porque
o componente Menu é apenas algo visual, por isso precisa usar as Routes aqui*/
function App() {
  return (
    <>
      <div className="container-adm">
        <BrowserRouter>
          {/* Menu sempre visível */}
          <MenuLateralAdm />

          <Routes>
            {/*aqui é a linkagem responsável por trazer os componentes do dashboard criados */}
            <Route
              path="/InicioDashboardAdm"
              element={<InicioDashboardAdm />}
            />
            <Route path="/ProdutosAdm" element={<ProdutosAdm />} />
            <Route
              path="/CadastrarProdutos"
              element={<CadastrarProdutos />}
            ></Route>
            <Route path="/Pedidos" element={<Pedidos />} />
          </Routes>
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
