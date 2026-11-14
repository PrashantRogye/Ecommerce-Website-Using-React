
import { BrowserRouter } from "react-router-dom";
import AppRoutes from "./routes/AppRoutes";
import { ShopProvider } from "./context/ShopContext";

function App() {
  return (
    <ShopProvider>
      <BrowserRouter>
        <AppRoutes />
      </BrowserRouter>
    </ShopProvider>
  );
}

export default App;
