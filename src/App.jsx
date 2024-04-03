import AppRouter from "./router/AppRouter";
import AuthState from "./context/AuthState";
import ProductState from "./context/ProductState";
import { PayPalScriptProvider } from "@paypal/react-paypal-js";

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";


import 'boxicons/css/boxicons.min.css'
import "./styles/styles-general.css"

function App() {

  return (
    <>
      <AuthState>
        <PayPalScriptProvider options={{
          clientId: "AY38mdxdA0CgkXI6G-vVnc4Zhmrz1y-Bn_amGLxPCGvrfd1EBKuoHHpt-3AtUAAiEpXglvUVC_figtNe",
        }}>
          <ProductState>
            <AppRouter />
          </ProductState>
        </PayPalScriptProvider>
      </AuthState>
    </>
  )
}

export default App
