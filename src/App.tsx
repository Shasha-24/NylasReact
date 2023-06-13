import "./App.css";
import Header from "../src/components/navbar/Header";
import "./index.css";
import Footer from "./components/footer/footer";
import Formulaire from "./components/formulaire/formulaire";
import NewProductsPage from "./pages/NewProductsPage";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Panier from "./components/panier/panier";



    function App() {
      return (
        <Router>
          <div>
            <Route path="/" Component={Header} />
            <Route path="/" Component={Footer} />
            <Route path="/" Component={NewProductsPage} />
            <Route path="/" Component={Formulaire} />
            <Route path="/" Component={Panier} />
            <Route path="/" Component={Footer} />
          </div>
        </Router>
      );
    }





/*function App() {
  return (
    <div>
      <Header name=" nous contacter" />
      <NewProductsPage />
      <Formulaire />
      <Footer />
      <main>{}</main>
    </div>
  );
}*/

export default App;

