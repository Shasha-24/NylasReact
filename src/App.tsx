import "./App.css";
import Header from "../src/components/navbar/Header";
import "./index.css";
import NewProductsPage from "./pages/NewProductsPage";
/*import { ContactPage } from "./ContactPage";*/
import Footer from "./components/footer/footer";
import Formulaire from "./components/formulaire/formulaire";
//import Panier from "./components/panier/panier";

function App() {
  return (
    <div>
      <Header name=" nous contacter" />
      <NewProductsPage />
      <Formulaire />
      <Footer />
      <main>{}</main>
    </div>
  );
}

export default App;
