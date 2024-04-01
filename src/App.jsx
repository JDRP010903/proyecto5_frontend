import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";


import 'boxicons/css/boxicons.min.css'
import "./styles/styles-general.css"
import AppRouter from "./router/AppRouter";
import AuthState from "./context/AuthState";
import ProductState from "./context/ProductState";

function App() {

  return (
    <>
      <AuthState>
        <ProductState>
          <AppRouter />
        </ProductState>
      </AuthState>
    </>
  )
}

export default App
