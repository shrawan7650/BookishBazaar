import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { AuthProvider } from "./helper/context/auth.jsx";
import { BrowserRouter } from "react-router-dom";
import { CartProvider } from "./helper/context/cart.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <AuthProvider>
    <BrowserRouter>
      <CartProvider>
        <div className="dark:bg-slate-900 dark:text-white">
          <App />
        </div>
      </CartProvider>
    </BrowserRouter>
  </AuthProvider>
);
