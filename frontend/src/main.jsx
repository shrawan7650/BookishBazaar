import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { AuthProvider } from "./helper/context/auth.jsx";
import { BrowserRouter } from "react-router-dom";
import { CartProvider } from "./helper/context/cart.jsx";
import { Auth0Provider } from "@auth0/auth0-react";
ReactDOM.createRoot(document.getElementById("root")).render(
  <Auth0Provider
    domain="dev-0endkz8znkyjxq38.us.auth0.com"
    clientId="2cu4C877G6PgrP9fnj5DBJB5igoOfgd2"
    authorizationParams={{
      redirect_uri: window.location.origin,
    }}
  >
    <AuthProvider>
      <BrowserRouter>
        <CartProvider>
          <App />
        </CartProvider>
      </BrowserRouter>
    </AuthProvider>
  </Auth0Provider>
);
